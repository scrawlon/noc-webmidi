(function () {
  const midiCCs = nocWebMidi.midiCCs;
  const midiChannels = nocWebMidi.midiChannels;
  const midiComponents = nocWebMidi.midiComponents;

  let midiPatch = {};
  let midi = false;
  let midiDevices = {};
  // inputID = false,
  let outputID = false;
  let browserLocalStorageEnabled = localStorageSupport();
  let midiIn = {
    channel: 0,
    enabled: false
  };

  console.log({ midiCCs });
  console.log({ midiChannels });

  showEditorTest();

  function showEditorTest() {
    // var midiChannelsKeys = Object.keys(midiChannels);

    // Load Circuit Components HTML
    buildMidiComponents();

    // Load Web MIDI
    getWebMidi();
  }

  // Begin Circuit Editor HTML code
  function buildMidiComponents() {
    let circuitWebMidiTestDiv = document.getElementById("circuit-web-midi-test");

    midiComponents.forEach(function (component, componentType) {
      let { midiChannel, parameters } = component;
      let componentTypeSlug = componentType.toLowerCase().replace(' ', '-');

      console.log({ parameters, componentType, componentTypeSlug });

      let componentHtml = `
        <div id='${componentTypeSlug}' class='component-section' data-midi-channel='${midiChannel}'> 
          <h2>${componentType}</h2>
          <button type='button' class='activate-midi-in' data-midi-enabled=''>
            MIDI IN
          </button> 
          <button type='button' class='randomizer' data-component-section='${componentTypeSlug}'>
            randomize
          </button>
          <div class='button-bar'> 
            <label for='${componentTypeSlug}-patch-select'>Patch Select: </label>
            <select id='${componentTypeSlug}-patch-select'>
              <option value=''></option>
            </select>
            <button type='button' class='patch-load' data-component-section='${componentType}'>load</button>
            <button type='button' class='patch-save' data-component-section='${componentType}'>save</button>
            <button type='button' class='patch-delete' data-component-section='${componentType}'>delete</button>
            <button type='button' class='patch-export' data-component-section='${componentType}'>export</button>
            <button type='button' class='patch-import' data-component-section='${componentType}'>import</button>
          </div>
          ${getComponentValueString(parameters, midiChannel)}
        </div>
      `;

      // console.log({ componentHtml });

      circuitWebMidiTestDiv.innerHTML = circuitWebMidiTestDiv.innerHTML + componentHtml;
    });

    populatePatchSelectMenu();
    activatePatchManagementButtons();


    initDropdowns();
    initSliders();

    // addSynthEditorEvents();
    activateMidiInButtons()
    activateRandomizeButtons();
  }

  function getComponentValueString(component, midiChannel) {
    let componentHtml = "";

    component.forEach(function (parameters, parameterName) {
      let parameterHtml = "";

      parameters.forEach(function (parameter) {
        parameterHtml += `
          <div class='component-value' data-midi-cc='${parameter.cc}'> 
            ${parameter.name}: ${getComponentRangeDescriptionText(parameter.range)} <br />
            ${getComponentRangeInput(parameter)}
          </div> 
        `;
      });

      componentHtml += `
        <div class='component'>
          <h3>${parameterName}</h3>
          ${parameterHtml}
        </div>
      `;
    });

    // console.log({ componentHtml });

    return componentHtml;
  }

  function getComponentRangeDescriptionText(range) {
    let rangeKeys = Object.keys(range);
    let rangeKeysLength = rangeKeys.length;

    if (range[rangeKeys[0]] === parseInt(range[rangeKeys[0]])) {
      return `(${range[rangeKeys[0]]} - ${range[rangeKeys[rangeKeysLength - 1]]})`;
    }

    return "";
  }

  function getComponentRangeInput(parameter) {
    let rangeKeys = Object.keys(parameter.range);
    let nameSlug = parameter.name.toLowerCase().replace(' ', '-');

    if (parameter.range[rangeKeys[0]] !== parseInt(parameter.range[rangeKeys[0]])) {
      return getComponentValueSelect(nameSlug, parameter.default, parameter.range, rangeKeys);
    } else {
      return getComponentValueSlider(nameSlug, rangeKeys);
    }
  }

  function getComponentValueSelect(nameSlug, defaultValue, range, rangeKeys) {
    let componentValueSelect = ``;

    rangeKeys.forEach(function (key) {
      let selected = defaultValue == key ? "selected" : "";

      componentValueSelect += `
        <option value='${key}' ${selected}>
          ${range[key]}
        </option>
      `;
    });

    return `
      <select name='${nameSlug}'>
        ${componentValueSelect}
      </select>
    `;
  }

  function getComponentValueSlider(nameSlug, rangeKeys) {
    return `
      <input name='${nameSlug}' type='range' min='${rangeKeys[0]}' max='${rangeKeys[rangeKeys.length - 1]}' /> 
    `;
  }

  // function addSynthEditorEvents() {
  //   initDropdowns();
  //   initSliders();
  // }

  function initDropdowns() {
    let selects = document.getElementsByTagName("select");

    for (let i = 0; i < selects.length; i++) {
      if (!selects[i].id.endsWith('-patch-select')) {
        selects[i].addEventListener('change', function () {
          let selectedOption = this.options[this.selectedIndex];

          handlePatchChanges(selectedOption, this);
        });
      }
    }
  }

  function handlePatchChanges(changedOption, control) {
    let selectedMidiChannel = parseInt(changedOption.dataset.midiChannel);
    let selectedMidiCC = changedOption.dataset.midiCc;
    let selectedMidiCCValue = changedOption.value;

    console.log({ changedOption, control });
    console.log({ parent: control.parentElement.closest('component-section') });

    markControlChange(selectedMidiChannel, selectedMidiCC, control);
    updateMidiPatch(selectedMidiChannel, selectedMidiCC, selectedMidiCCValue);
    sendMidiEvent(selectedMidiChannel, selectedMidiCC, selectedMidiCCValue);
  }

  function sendMidiEvent(selectedMidiChannel, selectedMidiCC, selectedMidiCCValue) {
    let selectedMidiChannelHex = selectedMidiChannel.toString(16);
    let output = false;

    if (midi && midi.outputs && outputID) {
      output = midi.outputs.get(outputID);
      output.send(["0xB" + selectedMidiChannelHex, selectedMidiCC, selectedMidiCCValue]);
    }
  }

  function initSliders() {
    let ranges = document.getElementsByTagName("input");

    for (var i = 0; i < ranges.length; i++) {
      if (ranges[i].type === 'range') {
        ranges[i].addEventListener('change', function () {
          handlePatchChanges(this, this);
        });
      }
    }
  }

  function populatePatchSelectMenu() {
    let patchSelects = document.querySelectorAll('[id$=patch-select]');
    let patchSelectsCount = patchSelects.length;

    for (let i = 0; i < patchSelectsCount; i++) {
      let selectId = patchSelects[i].id;
      let selectComponent = selectId.split('-')[0];

      addPatchSelectOptions(patchSelects[i], selectComponent);
    }
  }

  function addPatchSelectOptions(selectElement, component) {
    let patches = getCache(component);
    let patchNames = patches ? Object.keys(patches) : {};
    let patchNamesCount = patchNames.length;

    if (patchNamesCount) {
      patchNames.sort(function (a, b) {
        return a.toLowerCase().localeCompare(b.toLowerCase());
      });
    }

    for (let i = 0; i < patchNamesCount; i++) {
      let option = document.createElement('option');

      option.value = patchNames[i];
      option.innerHTML = patchNames[i];
      selectElement.add(option);
    }
  }

  function activateMidiInButtons() {
    let midiInButtons = document.getElementsByClassName("activate-midi-in");
    let midiInButtonsCount = midiInButtons.length;

    for (let i = 0; i < midiInButtonsCount; i++) {
      midiInButtons[i].addEventListener('click', function () {
        let midiInChannel = this.getAttribute('data-midi-channel');
        let midiInEnabled = this.getAttribute('data-midi-enabled');
        let buttonClass = this.className;

        if (midiInEnabled) {
          this.dataset.midiEnabled = '';

          for (let j = 0; j < midiInButtonsCount; j++) {
            midiInButtons[j].className = removeClass(buttonClass, 'active-midi-in');
          }

          midiIn.enabled = false;
        } else {

          for (let j = 0; j < midiInButtonsCount; j++) {
            midiInButtons[j].className = removeClass(buttonClass, 'active-midi-in');

            if (midiInButtons[j].getAttribute('data-midi-channel') === midiInChannel) {
              midiInButtons[j].className = buttonClass + ' active-midi-in';
            }
          }

          this.dataset.midiEnabled = 'true';
          midiIn.channel = parseInt(midiInChannel);
          midiIn.enabled = true;
        }
      });
    }
  }

  function removeClass(classListString, classToRemove) {
    let classList = classListString.split(' ');
    let classInList = classList.indexOf(classToRemove);

    if (classInList !== -1) {
      return classList.splice(classInList - 1, 1);
    } else {
      return classListString;
    }
  }

  function activatePatchManagementButtons() {
    let buttons = {
      load: document.getElementsByClassName("patch-load"),
      save: document.getElementsByClassName("patch-save"),
      delete: document.getElementsByClassName("patch-delete"),
      export: document.getElementsByClassName("patch-export"),
      import: document.getElementsByClassName("patch-import")
    };
    let buttonTypes = Object.keys(buttons);
    let buttonTypesCount = buttonTypes.length;

    for (var i = 0; i < buttonTypesCount; i++) {
      activatePatchButtonsByType(buttonTypes[i], buttons[buttonTypes[i]]);
    }
  }

  function activatePatchButtonsByType(buttonType, buttons) {
    let buttonsCount = buttons.length;

    for (let i = 0; i < buttonsCount; i++) {
      buttons[i].addEventListener('click', function () {
        switch (buttonType) {
          case 'load':
            activatePatchButtonLoad(this);
            break;
          case 'save':
            activatePatchButtonSave(this);
            break;
          case 'delete':
            activatePatchButtonDelete(this);
            break;
          case 'export':
            activatePatchButtonExport(this);
            break;
          case 'import':
            activatePatchButtonImport(this);
            break;
        }
      });
    }
  }

  function activatePatchButtonLoad(button) {
    let buttonData = getPatchButtonData(button);
    // var isDrum = buttonData.patchType === 'drum',
    // var drumNumber = isDrum ? parseInt(buttonData.buttonComponent.split(' ')[1]) - 1 : false;

    if (buttonData.patchSelected) {
      let cachedPatches = getCache(buttonData.patchType);
      let patch = cachedPatches[buttonData.patchSelected] ? cachedPatches[buttonData.patchSelected] : {};
      let midiChannel = getPatchMidiChannel(buttonData.buttonComponent);
      // let midiChannel = isDrum
      //     ? getPatchMidiChannel(buttonData.patchType)
      //     : getPatchMidiChannel(buttonData.buttonComponent);

      // if (isDrum) {
      //   patch = buildDrumPatch(patch, drumNumber);
      // }

      if (patch) {
        updatePatchValues(midiChannel, patch, buttonData.buttonComponent);
      } else {
        alert(`Ooops. Something ain't right`);
      }
    } else {
      alert('select a patch from the dropdown menu');
    }
  }

  // function buildDrumPatch(drumPatch, drumNumber) {
  //   var patch = {},
  //     drumPatchCount = drumPatch.length,
  //     drumComponent = midiDrumCCs[drumNumber],
  //     drumMidiCC = '',
  //     drumMidiCCName = '';

  //   for (var i = 0; i < drumPatchCount; i++) {
  //     if (drumPatch[i]) {
  //       drumMidiCC = nocWebMidi.getCircuitMidiCC(9, drumComponent[i]);
  //       drumMidiCCName = drumMidiCC.name.replace(/[0-9]\s/g, '');
  //       patch[drumComponent[i]] = { value: drumPatch[i], name: drumMidiCCName };
  //     }
  //   }

  //   return patch;
  // }

  function getPatchMidiChannel(patchComponent) {
    let midiChannelsKeys = Object.keys(midiChannels);
    let midiChannelsKeysCount = midiChannelsKeys.length;

    for (let i = 0; i < midiChannelsKeysCount; i++) {
      if (midiChannels[midiChannelsKeys[i]] === patchComponent) {
        return midiChannelsKeys[i];
      }
    }
  }

  function updatePatchValues(midiChannel, patch, selectedMidiComponent) {
    let midiCCNumbers = Object.keys(patch);
    let midiCCNumbersCount = midiCCNumbers.length;

    for (let i = 0; i < midiCCNumbersCount; i++) {
      let options = document.querySelectorAll(`[data-midi-channel='${midiChannel}'] [data-midi-cc='${midiCCNumbers[i]}']`);
      // var options = document.querySelectorAll("[data-midi-channel='" + midiChannel + "']"
      //   + "[data-midi-cc='" + midiCCNumbers[i] + "']"),
      let event = new Event('change');

      if (options) {
        if (options[0].tagName.toLowerCase() === 'option') {
          options[0].parentNode.selectedIndex = patch[midiCCNumbers[i]].value;
          options[0].dispatchEvent(event);
        } else if (options[0].tagName.toLowerCase() === 'input') {
          options[0].value = patch[midiCCNumbers[i]].value;
          options[0].dispatchEvent(event);
        }
      }
    }
  }

  function activatePatchButtonSave(button) {
    let buttonData = getPatchButtonData(button);
    // let isDrum = buttonData.patchType === 'drum';
    // let drumNumber = isDrum ? parseInt(buttonData.buttonComponent.split(' ')[1]) - 1 : false;
    let patchData = midiPatch[buttonData.buttonComponent];
    let newPatchName = "";

    // if (isDrum) {
    //   patchData = midiPatch[buttonData.patchType][drumNumber];
    // }

    if (!patchData) {
      alert(`There's nothing to save`);
      return false;
    }

    newPatchName = prompt('Enter a new patch name', buttonData.selectedPatch);

    if (newPatchName) {
      setCache(buttonData.patchType, newPatchName, patchData);
      updatePatchSelectOptions('add', newPatchName, buttonData.patchSelects, buttonData.patchSelectId);
    }
  }

  function updatePatchSelectOptions(addRemove, patchName, selectElements, activeElementId) {
    let selectElementsCount = selectElements.length;

    if (addRemove === 'add') {
      for (let i = 0; i < selectElementsCount; i++) {
        let matcheElement = document.querySelector(`#${selectElements[i].id} option[value='${patchName}']`);
        // var matchedElement = document.querySelector(
        //   "#" + selectElements[i].id + " option[value='" + patchName + "']"
        // ),
        // let selectedIndex = selectElements[i].selectedIndex;

        if (!matchedElement) {
          let option = document.createElement('option');
          let currentSelection = selectElements[i].options[selectElements[i].selectedIndex];

          option.value = patchName;
          option.innerHTML = patchName;
          selectElements[i].add(option);
          sortPatchSelectOptions(selectElements[i]);

          if (selectElements[i].id === activeElementId) {
            updateActiveSelectOption(selectElements[i], patchName);
          } else {
            updateActiveSelectOption(selectElements[i], currentSelection.value);
          }
        }
      }
    } else if (addRemove === 'delete') {
      for (let i = 0; i < selectElementsCount; i++) {
        let options = selectElements[i].options;
        let optionsCount = options.length;

        if (options) {
          for (let j = 0; j < optionsCount; j++) {
            if (options[j] && options[j].value === patchName) {
              selectElements[i].remove(j);
            }
          }
        }
      }
    }
  }

  function sortPatchSelectOptions(selectElement) {
    let optionsArray = [];

    for (let i = selectElement.options.length - 1; i > 0; i--) {
      if (optionsArray.indexOf(selectElement.options[i]) === -1) {
        optionsArray.push(selectElement.removeChild(selectElement.options[i]));
      }
    }

    optionsArray.sort(function (a, b) {
      return a.innerHTML.localeCompare(b.innerHTML);
    });

    while (optionsArray.length) {
      let nextOption = optionsArray.shift();
      let option = document.createElement('option');

      option.value = nextOption.value;
      option.text = nextOption.text;
      selectElement.add(option);
    }
  }

  function updateActiveSelectOption(selectElement, patchName) {
    let options = selectElement.options;
    let optionsCount = options.length;

    for (let i = 0; i < optionsCount; i++) {
      if (options[i].value === patchName) {
        selectElement.selectedIndex = i;
        return false;
      }
    }
  }

  function activatePatchButtonDelete(button) {
    let buttonData = getPatchButtonData(button);

    if (buttonData.patchSelected) {
      let cachedPatches = getCache(buttonData.patchType);
      let patchType = buttonData.patchType;
      let patchName = buttonData.patchSelected;

      if (cachedPatches[patchName]) {
        let confirm = window.confirm('Delete ' + patchName + '?');

        if (confirm) {
          deletePatch(patchType, patchName);
          updatePatchSelectOptions('delete', patchName, buttonData.patchSelects);
          updateActiveSelectOption(buttonData.patchSelect, '');
        }
      } else {
        alert(`Ooops. Something ain't right`);
      }
    } else {
      alert('select a patch from the dropdown menu');
    }
  }

  function getPatchButtonData(button) {
    let buttonComponent = button.getAttribute('data-component-section');
    let buttonComponentArray = buttonComponent.split(' ');
    let patchType = buttonComponentArray[0];
    let patchSelectId = buttonComponentArray.join('-') + '-patch-select';
    let patchSelect = document.getElementById(patchSelectId);
    let patchSelects = document.querySelectorAll(`[id^='${patchType}'] [id$='-patch-select']`);
    let patchSelected = patchSelect.options[patchSelect.selectedIndex].text;

    return {
      buttonComponent: buttonComponent,
      patchType: patchType,
      patchSelectId: patchSelectId,
      patchSelect: patchSelect,
      patchSelects: patchSelects,
      patchSelected: patchSelected
    };
  }

  function activatePatchButtonExport(button) {
    let buttonData = getPatchButtonData(button);
    // let isDrum = buttonData.patchType === 'drum';
    // let drumNumber = isDrum ? parseInt(buttonData.buttonComponent.split(' ')[1]) - 1 : false;
    let patchName = '';
    let exportPatch = {};
    let patchExportHolder = document.createElement("textarea");

    if (buttonData.patchSelected) {
      let cachedPatches = getCache(buttonData.patchType);
      let patch = cachedPatches[buttonData.patchSelected] ? cachedPatches[buttonData.patchSelected] : {};
      // let midiChannel = getPatchMidiChannel(buttonData.buttonComponent);

      if (patch) {
        patchName = buttonData.patchSelected;
        exportPatch[buttonData.patchType] = {};
        exportPatch[buttonData.patchType][patchName] = patch;
        patchExportHolder.class = "patch-export-holder";
        patchExportHolder.value = JSON.stringify(exportPatch);
        document.body.appendChild(patchExportHolder);
        patchExportHolder.select();

        if (document.execCommand('copy')) {
          alert(`${buttonData.patchType.toUpperCase()} patch ${patchName} has been copied to the clipboard.`);
        } else {
          alert('ERROR: the patch could not be exported');
        }
      } else {
        alert(`Ooops. Something ain't right`);
      }
    } else {
      alert('select a patch from the dropdown menu');
    }
  }

  function activatePatchButtonImport(button) {
    let buttonData = getPatchButtonData(button);
    let importPatchString = prompt(`PATCH IMPORT: Paste new ${buttonData.patchType.toUpperCase()} patch below.`);
    let importPatch = JSON.parse(importPatchString);
    let importPatchData = {};
    // let isDrum = buttonData.patchType === 'drum';
    // let drumNumber = isDrum ? parseInt(buttonData.buttonComponent.split(' ')[1]) - 1 : false;
    // let patchData = midiPatch[buttonData.buttonComponent];
    let newPatchName = "";

    if (importPatch && importPatch[buttonData.patchType] !== undefined) {
      importPatchData = getImportPatchData(importPatch[buttonData.patchType]);
    }

    if (importPatchData && importPatchData.patchName && importPatchData.patch) {
      newPatchName = prompt("Save imported patch as...", importPatchData.patchName);
      setCache(buttonData.patchType, newPatchName, importPatchData.patch);
      updatePatchSelectOptions('add', newPatchName, buttonData.patchSelects, buttonData.patchSelectId);
    } else {
      alert('Patch import failed. Are sure you\'re importing the correct patch type?');
    }
  }

  function getImportPatchData(data) {
    let dataKeys = Object.keys(data);
    let patchData = {};

    dataKeys.forEach(function (patchName) {
      patchData.patchName = patchName;
      patchData.patch = data[patchName];
    });

    return patchData;
  }

  function activateRandomizeButtons() {
    let randomizeButtons = document.getElementsByClassName("randomizer");
    let randomizeButtonsCount = randomizeButtons.length;

    for (let i = 0; i < randomizeButtonsCount; i++) {
      randomizeButtons[i].addEventListener('click', function () {
        let targetComponentId = this.getAttribute('data-component-section');
        let targetComponent = document.getElementById(targetComponentId);
        let targetSelects = targetComponent.getElementsByTagName('select');
        let targetSliders = targetComponent.getElementsByTagName('input');

        updateRandomSliderValues(targetSliders);
        updateRandomSelectValues(targetSelects);
      });
    }
  }

  function updateRandomSliderValues(sliders) {
    // let slidersCount = sliders.length;
    // let randomMaximum = 0;
    // let randomMinimum = 0;
    // let randomValue = 0;
    let event = new Event('change');

    for (let i = 0; i < sliders.length; i++) {
      let sliderMinimum = Math.ceil(sliders[i].getAttribute('min'));
      let sliderMaximum = Math.floor(sliders[i].getAttribute('max'));
      let randomValue = Math.floor(Math.random() * (sliderMaximum - sliderMinimum)) + sliderMinimum;
      let midiChannel = sliders[i].getAttribute('data-midi-channel');
      let midiCCNumber = sliders[i].getAttribute('data-midi-cc');

      sliders[i].value = randomValue;
      sliders[i].dispatchEvent(event);
      updateMidiPatch(midiChannel, midiCCNumber, randomValue);
      markControlChange(midiChannel, midiCCNumber, sliders[i]);
    }
  }

  function markControlChange(midiChannel, midiCC, control) {
    if (!isChanged(midiChannel, midiCC)) {
      control.parentNode.className += " midi-patch-value";
    }
  }

  function isChanged(midiChannel, midiCC) {
    console.log({ midiPatch, midiChannel, midiCC });
    if (!midiPatch[midiChannels[midiChannel]]
      || (midiPatch[midiChannels[midiChannel]]
        && !midiPatch[midiChannels[midiChannel]][midiCC])) {

      return false;
    }

    return true;
  }

  function updateMidiPatch(midiChannel, midiCCNumber, midiCCValue) {
    let circuitMidiCCValues = nocWebMidi.getCircuitMidiCC(parseInt(midiChannel), parseInt(midiCCNumber));
    let patchType = midiChannels[midiChannel];
    // let selectedMidiComponent = midiComponents[patchType];
    // let drumIndex = 0;

    if (!midiPatch[patchType]) {
      midiPatch[patchType] = {};
    }

    midiPatch[patchType][midiCCNumber] = {
      name: circuitMidiCCValues.name,
      value: midiCCValue
    };

    // if (!midiPatch[patchType] && patchType === 'drum') {
    //   midiPatch[patchType] = new Array(4);
    // } else if (!midiPatch[patchType]) {
    //   midiPatch[patchType] = {};
    // }

    // if (patchType === 'drum') {
    //   drumIndex = getDrumIndex(midiCCNumber);

    //   if (!midiPatch[patchType][drumIndex[0]]) {
    //     midiPatch[patchType][drumIndex[0]] = new Array(6);
    //   }

    //   midiPatch[patchType][drumIndex[0]][drumIndex[1]] = midiCCValue;
    // } else {
    //   midiPatch[patchType][midiCCNumber] = {
    //     name: circuitMidiCCValues.name,
    //     value: midiCCValue
    //   }
    // }
  }

  // function getDrumIndex(midiCCNumber) {
  //   var drumNumber = 0,
  //     controlNumber = 0;

  //   midiDrumCCs.forEach(function (component, index) {
  //     controlIndex = component.indexOf(midiCCNumber);

  //     if (controlIndex !== -1) {
  //       controlNumber = controlIndex;
  //       drumNumber = index;
  //       return true;
  //     }
  //   });

  //   return [drumNumber, controlNumber];
  // }

  function updateRandomSelectValues(selects) {
    // let selectsCount = selects.length;
    // let randomOptions = [];
    // let randomOptionsCount = 0;
    // let randomOptionNumber = 0;
    // let midiChannel = 0;
    // let midiCCNumber = 0;
    let event = new Event('change');

    for (let i = 0; i < selects.length; i++) {
      let randomOptions = selects[i].getElementsByTagName('option');

      if (randomOptions && randomOptions[0] && randomOptions[0].getAttribute('data-midi-channel')) {
        let randomOptionsCount = randomOptions.length;
        let randomOptionNumber = Math.floor(Math.random() * (randomOptionsCount));
        let midiChannel = randomOptions[randomOptionNumber].getAttribute('data-midi-channel');
        let midiCCNumber = randomOptions[randomOptionNumber].getAttribute('data-midi-cc');

        selects[i].selectedIndex = randomOptionNumber;
        selects[i].dispatchEvent(event);
        markControlChange(midiChannel, midiCCNumber, selects[i]);
        updateMidiPatch(midiChannel, midiCCNumber, randomOptionNumber);
      }
    }
  }

  function setCache(component, patchName, patchData) {
    let savedComponent = {};

    if (browserLocalStorageEnabled) {
      savedComponent = getCache(component) ? getCache(component) : {};
      savedComponent[patchName] = patchData;

      localStorage.setItem(component, JSON.stringify(savedComponent));
    }
  }

  function getCache(component) {
    let cachedItem = {};

    if (browserLocalStorageEnabled) {
      cachedItem = localStorage.getItem(component);
    }

    return JSON.parse(cachedItem);
  }

  function deletePatch(component, patchName) {
    if (browserLocalStorageEnabled) {
      let savedComponent = getCache(component) ? getCache(component) : {};

      delete savedComponent[patchName];

      localStorage.setItem(component, JSON.stringify(savedComponent));
    }
  }

  function localStorageSupport() {
    let mod = 'test';

    try {
      localStorage.setItem(mod, mod);
      localStorage.removeItem(mod);
      return true;
    } catch (e) {
      return false;
    }
  }

  // Begin Web Midi Code
  function getWebMidi() {
    if (navigator.requestMIDIAccess) {
      navigator.requestMIDIAccess().then(onMIDISuccess, onMIDIFailure);
    } else {
      onMIDIFailure('Your browser does not support web midi. This feature is currently only supported in Google Chrome.');
    }
  }

  function onMIDISuccess(MIDIAccess) {
    midi = MIDIAccess;
    midiDevices.inputs = getMidiDevices(midi, 'inputs');
    midiDevices.outputs = getMidiDevices(midi, 'outputs');
    let errorMessage = 'unknown error';

    if (!midiDevices.inputs.size) {
      errorMessage = `
        Novation Circuit&trade; device not detected on MIDI in<br />
        Make sure your Circuit&trade; is connected and reload this page.
      `;
      printErrorMessage(errorMessage);
    } else {
      midiDevices.inputs.forEach(function (device) {
        if (device.name.toLowerCase() === 'circuit') {
          device.onmidimessage = onMIDIMessage;
          inputID = device.id;
        }
      });
    }

    if (!midiDevices.outputs.size) {
      errorMessage = `
        Novation Circuit&trade; device not detected on MIDI out<br />
        Make sure your Circuit&trade; is connected and reload this page.
      `;
      printErrorMessage(errorMessage);
    } else {
      midiDevices.outputs.forEach(function (device) {
        if (device.name.toLowerCase() === 'circuit') {
          outputID = device.id;
        }
      });
    }
  }

  function getMidiDevices(midi, connectionType) {
    if (midi && midi[connectionType] && midi.size !== 0) {
      return midi[connectionType];
    }
  }

  function printErrorMessage(message) {
    let messageHolder = document.getElementById('message-holder');
    messageHolder.innerHTML += `<p>${message}</p>`;
  }

  function onMIDIMessage(event) {
    if (midiIn && midiIn.enabled) {
      // let str = "";
      let eventMidiChannel = event.data && event.data[0] ? (event.data[0] & 0x0F) : false;
      let eventMidiCC = event.data && event.data[1] ? event.data[1] : false;
      let eventMidiCCValue = event.data && event.data[2] ? event.data[2] : false;

      if ((eventMidiChannel === midiIn.channel) && eventMidiCC && eventMidiCCValue) {
        let eventType = event.data[0] & 0xf0;

        if (eventType === 0xB0) {
          updateSliderValue(eventMidiChannel, eventMidiCC, eventMidiCCValue);
          updateMidiPatch(eventMidiChannel, eventMidiCC, eventMidiCCValue);
        }
      }
    }
  }

  function updateSliderValue(midiChannel, midiCC, midiCCValue) {
    let slider = document.querySelectorAll(`[data-midi-channel='${midiChannel}'][data-midi-cc='${midiCC}']`)[0];

    slider.value = midiCCValue;

    markControlChange(midiChannel, midiCC, slider);
  }

  function sendMiddleC(midi, portID) {
    let noteOnMessage = [0x90, 60, 63];
    let output = midi.outputs.get(portID);
    output.send(noteOnMessage);
    output.send([0x80, 60, 0x40], window.performance.now() + 1000.0);
  }

  function onMIDIFailure(msg) {
    printErrorMessage('Failed to get MIDI access - ' + msg);
  }

  function getCircuitDevices(midiDevices) {
    let circuits = [];

    midiDevices.forEach(function (device) {
      if (device.name.toLowerCase() === 'circuit') {
        circuits.push(device);
      }
    });

    return circuits;
  }

  // Limit real-time slider imput to avoid page crash
  function throttle(fn, threshhold, scope) {
    threshhold || (threshhold = 250);
    let last;
    let deferTimer;

    return function () {
      let context = scope || this;
      let now = +new Date;
      let args = arguments;

      if (last && now < last + threshhold) {
        // hold on to it
        clearTimeout(deferTimer);
        deferTimer = setTimeout(function () {
          last = now;
          fn.apply(context, args);
        }, threshhold);
      } else {
        last = now;
        fn.apply(context, args);
      }
    };
  }

  function debounce(fn, delay) {
    let timer = null;

    return function () {
      let context = this, args = arguments;

      clearTimeout(timer);
      timer = setTimeout(function () {
        fn.apply(context, args);
      }, delay);
    };
  }
})();
