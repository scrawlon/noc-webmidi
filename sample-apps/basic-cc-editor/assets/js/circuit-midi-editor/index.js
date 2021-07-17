
import { renderEditor, initEditorEvents } from './patch-editor/index.js';

(function () {
  // Import MIDI CC data from nocWebMidi.js library
  // const midiCCs = nocWebMidi.midiCCs;
  // const midiComponents = nocWebMidi.midiComponents;

  // Circuit Editor Globals

  // Web Midi GLobals

  let localStorageEnabled = localStorageSupport();

  circuitMidi();

  function circuitMidi() {
    // Load Circuit Components HTML
    renderEditor();
    initEditorEvents();

    // populatePatchSelectMenu();
    // activatePatchManagementButtons();


    // initDropdowns();
    // initSliders();

    // addSynthEditorEvents();
    // activateMidiInButtons()
    // activateRandomizeButtons();

    // Load Web MIDI
    // getWebMidi();
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

    if (localStorageEnabled) {
      savedComponent = getCache(component) ? getCache(component) : {};
      savedComponent[patchName] = patchData;

      localStorage.setItem(component, JSON.stringify(savedComponent));
    }
  }

  function getCache(component) {
    let cachedItem = {};

    if (localStorageEnabled) {
      cachedItem = localStorage.getItem(component);
    }

    return JSON.parse(cachedItem);
  }

  function deletePatch(component, patchName) {
    if (localStorageEnabled) {
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
  function updateSliderValue(midiChannel, midiCC, midiCCValue) {
    let slider = document.querySelectorAll(`[data-midi-channel='${midiChannel}'][data-midi-cc='${midiCC}']`)[0];

    slider.value = midiCCValue;

    markControlChange(midiChannel, midiCC, slider);
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
