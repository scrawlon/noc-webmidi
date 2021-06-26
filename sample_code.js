(function() {
  var midiPatch = {},
    midiCCs = circuitMidiApp.midiCCs,
    midiChannels = circuitMidiApp.midiChannels,
    midiComponents = circuitMidiApp.midiComponents,
    midiDrumCCs = circuitMidiApp.midiDrumCCs,
    midi = false,
    midiDevices = {},
    inputID = false,
    outputID = false,
    browserLocalStorageEnabled = localStorageSupport(),
    midiIn = {
      channel: 0,
      enabled: false
    };

  showEditorTest();

  function showEditorTest() {
    var midiChannelsKeys = Object.keys(midiChannels);

    // Load Circuit Components HTML
    buildMidiComponents(midiChannelsKeys);

    // Load Web MIDI
    getWebMidi();
  }

  // Begin Circuit Editor HTML code
  function buildMidiComponents(midiChannelsKeys) {
    var circuitWebMidiTestDiv = document.getElementById("circuit-web-midi-test");

    midiComponents.forEach(function(value, key) {
      var thisMidiChannel = 0,
        outputHTML = "",
        keyHyphen = key.replace(' ', '-');

      midiChannelsKeys.forEach(function(channelKey) {
        if ( key === midiChannels[channelKey] || key.split(' ')[0] === midiChannels[channelKey] ) {
          thisMidiChannel = channelKey;
        }
      });

      outputHTML += "<div id='" + keyHyphen + "' class='component-section'>"
        + "<h2>" + key
        + "<button type='submit' class='activate-midi-in' data-midi-channel='"
        + thisMidiChannel  + "' data-midi-enabled=''>MIDI IN</button>"
        + "<button type='submit' class='randomizer' data-component-section='"
        + keyHyphen  + "'>randomize</button>"
        + "</h2>"
        + "<div class='button-bar'>"
        + "<label for='" + keyHyphen + "-patch-select'>Patch Select: </label>"
        + "<select id='" + keyHyphen + "-patch-select'>"
        + "<option value=''></option>"
        + "</select>"
        + "<button type='submit' class='patch-load' data-component-section='"
        + key + "'>load</button>"
        + "<button type='submit' class='patch-save' data-component-section='"
        + key + "'>save</button>"
        + "<button type='submit' class='patch-delete' data-component-section='"
        + key + "'>delete</button>"
        + "<button type='submit' class='patch-export' data-component-section='"
        + key + "'>export</button>"
        + "<button type='submit' class='patch-import' data-component-section='"
        + key + "'>import</button>"
        + "</div>";
      outputHTML += getComponentValueString(value, thisMidiChannel);
      outputHTML += "</div>";
      circuitWebMidiTestDiv.innerHTML = circuitWebMidiTestDiv.innerHTML + outputHTML;
    });

    populatePatchSelectMenu();
    activatePatchManagementButtons();
    addSynthEditorEvents();
    activateMidiInButtons()
    activateRandomizeButtons();
  }

  function getComponentValueString(component, midiChannel) {
    var outputHTML = "";

    component.forEach(function(value, key) {
      outputHTML += "<div class='component'>"
        + "<h3>" + key + "</h3>";

      value.forEach(function(el) {
        outputHTML += "<div id='" + el.name.replace(' ', '-') + "' class='component-value'>";
        outputHTML += el.name + ": " + getComponentRangeDescriptionText(el.range) + "<br />";
        outputHTML += getComponentRangeInput(midiChannel, el.cc, el.name, el.default, el.range);
        outputHTML += "</div>";
      });

      outputHTML += "</div>";
    });

    return outputHTML;
  }

  function getComponentRangeDescriptionText(range) {
    var rangeKeys = Object.keys(range),
      rangeKeysLength = rangeKeys.length;

      if ( range[rangeKeys[0]] === parseInt(range[rangeKeys[0]]) ) {
        return "(" + range[rangeKeys[0]] + " - " + range[rangeKeys[rangeKeysLength-1]] + ")";
      }

      return "";
  }

  function getComponentRangeInput(midiChannel, midiCCNumber, name, defaultValue, range) {
    var rangeKeys = Object.keys(range),
      rangeKeysLength = rangeKeys.length,
      outputHTML = "";

      if ( range[rangeKeys[0]] !== parseInt(range[rangeKeys[0]]) ) {
        outputHTML = getComponentValueSelect(midiChannel, midiCCNumber, name, defaultValue, range, rangeKeys);
      } else {
        outputHTML = getComponentValueSlider(midiChannel, midiCCNumber, name, defaultValue, range, rangeKeys, rangeKeysLength);
      }

      return outputHTML;
  }

  function getComponentValueSelect(midiChannel, midiCCNumber, name, defaultValue, range, rangeKeys) {
    var outputHTML = "<select name='" + name + "'>";

    rangeKeys.forEach(function(key) {
      var selected = defaultValue == key ? "selected" : "";
      outputHTML += "<option value='" + key + "' " + selected
        + " data-midi-channel='" + midiChannel + "' "
        + " data-midi-cc='" + midiCCNumber + "' "
        + ">" + range[key] + "</option>";
    });

    outputHTML += "</select>";
    return outputHTML;
  }

  function getComponentValueSlider(midiChannel, midiCCNumber, name, defaultValue, range, rangeKeys, rangeKeysLength) {
    return "<input type='range' min='" + rangeKeys[0] + "' max='" + rangeKeys[rangeKeysLength-1] + "' "
      + " data-midi-channel='" + midiChannel + "' "
      + " data-midi-cc='" + midiCCNumber + "' "
      + " />";
  }

  function addSynthEditorEvents() {
    selectMidiEvents();
    rangeMidiEvents();
  }

  function selectMidiEvents() {
    var selects = document.getElementsByTagName("select"),
      selectsCount = selects.length;

    for ( var i=0; i<selectsCount; i++ ) {
      if ( !selects[i].id.endsWith('-patch-select') ) {
        selects[i].addEventListener('change', function() {
          var selectedOption = this.options[this.selectedIndex];

          handlePatchChanges(selectedOption, this);
        });
      }
    }
  }

  function handlePatchChanges(changedOption, control) {
    var selectedMidiChannel = parseInt(changedOption.dataset.midiChannel),
      selectedMidiCC = changedOption.dataset.midiCc,
      selectedMidiCCValue = changedOption.value;

    markControlChange(selectedMidiChannel, selectedMidiCC, control);
    updateMidiPatch(selectedMidiChannel, selectedMidiCC, selectedMidiCCValue);
    sendMidiEvent(selectedMidiChannel, selectedMidiCC, selectedMidiCCValue);
  }

  function sendMidiEvent(selectedMidiChannel, selectedMidiCC, selectedMidiCCValue) {
    var selectedMidiChannelHex = selectedMidiChannel.toString(16),
      output = false;

    if ( midi && midi.outputs && outputID ) {
      output = midi.outputs.get(outputID);
      output.send( ["0xB"+selectedMidiChannelHex, selectedMidiCC, selectedMidiCCValue] );
    }
  }

  function rangeMidiEvents() {
    var ranges = document.getElementsByTagName("input"),
      rangesCount = ranges.length;

    for ( var i=0; i<rangesCount; i++ ) {
      if ( ranges[i].type === 'range' ) {
        ranges[i].addEventListener('change', function() {
          handlePatchChanges(this, this);
        });
      }
    }
  }


  function populatePatchSelectMenu() {
    var patchSelects = document.querySelectorAll('[id$=patch-select]'),
      patchSelectsCount = patchSelects.length;

    for ( var i=0; i<patchSelectsCount; i++ ) {
      var selectId = patchSelects[i].id,
        selectComponent = selectId.split('-')[0];

      addPatchSelectOptions(patchSelects[i], selectComponent);
    }
  }

  function addPatchSelectOptions(selectElement, component) {
    var patches = getCache(component),
      patchNames = patches ? Object.keys(patches) : {},
      patchNamesCount = patchNames.length;

    if ( patchNamesCount ) {
      patchNames.sort(function (a, b) {
        return a.toLowerCase().localeCompare(b.toLowerCase());
      });
    }

    for ( var i=0; i<patchNamesCount; i++ ) {
      var option = document.createElement('option');

      option.value = patchNames[i];
      option.innerHTML = patchNames[i];
      selectElement.add(option);
    }
  }

  function activateMidiInButtons() {
    var midiInButtons = document.getElementsByClassName("activate-midi-in"),
      midiInButtonsCount = midiInButtons.length;

    for ( var i=0; i<midiInButtonsCount; i++ ) {
      midiInButtons[i].addEventListener('click', function() {
        var midiInChannel = this.getAttribute('data-midi-channel'),
          midiInEnabled = this.getAttribute('data-midi-enabled'),
          buttonClass = this.className;

        if ( midiInEnabled ) {
          this.dataset.midiEnabled = '';

          for ( var j=0; j<midiInButtonsCount; j++ ) {
            midiInButtons[j].className = removeClass(buttonClass, 'active-midi-in');
          }

          midiIn.enabled = false;
        } else {

          for ( var j=0; j<midiInButtonsCount; j++ ) {
            midiInButtons[j].className = removeClass(buttonClass, 'active-midi-in');

            if ( midiInButtons[j].getAttribute('data-midi-channel') === midiInChannel ) {
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
    var classList = classListString.split(' '),
      classInList = classList.indexOf(classToRemove);

    if ( classInList !== -1 ) {
      return classList.splice(classInList-1, 1);
    } else {
      return classListString;
    }
  }

  function activatePatchManagementButtons() {
    var buttons = {
      load: document.getElementsByClassName("patch-load"),
      save: document.getElementsByClassName("patch-save"),
      delete: document.getElementsByClassName("patch-delete"),
      export: document.getElementsByClassName("patch-export"),
      import: document.getElementsByClassName("patch-import")
      },
      buttonTypes = Object.keys(buttons),
      buttonTypesCount = buttonTypes.length;

    for (var i=0; i<buttonTypesCount; i++) {
      activatePatchButtonsByType(buttonTypes[i], buttons[buttonTypes[i]]);
    }
  }

  function activatePatchButtonsByType(buttonType, buttons) {
    var buttonsCount = buttons.length;

    for (var i=0; i<buttonsCount; i++) {
      buttons[i].addEventListener('click', function() {
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
    var buttonData = getPatchButtonData(button),
      isDrum = buttonData.patchType === 'drum',
      drumNumber = isDrum ? parseInt(buttonData.buttonComponent.split(' ')[1]) - 1 : false;

    if ( buttonData.patchSelected ) {
      var cachedPatches = getCache(buttonData.patchType),
        patch = cachedPatches[buttonData.patchSelected]
          ? cachedPatches[buttonData.patchSelected] : {},
        midiChannel = isDrum
          ? getPatchMidiChannel(buttonData.patchType)
          : getPatchMidiChannel(buttonData.buttonComponent);

      if ( isDrum ) {
        patch = buildDrumPatch(patch, drumNumber);
      }

      if ( patch ) {
        updatePatchValues(midiChannel, patch, buttonData.buttonComponent);
      } else {
        alert('Ooops. Something ain\'t right');
      }
    } else {
      alert('select a patch from the dropdown menu');
    }
  }

  function buildDrumPatch(drumPatch, drumNumber) {
    var patch = {},
      drumPatchCount = drumPatch.length,
      drumComponent = midiDrumCCs[drumNumber],
      drumMidiCC = '',
      drumMidiCCName = '';

    for ( var i=0; i < drumPatchCount; i++ ) {
      if ( drumPatch[i] ) {
        drumMidiCC = circuitMidiApp.getCircuitMidiCC(9, drumComponent[i]);
        drumMidiCCName = drumMidiCC.name.replace(/[0-9]\s/g, '');
        patch[drumComponent[i]] = { value: drumPatch[i], name: drumMidiCCName };
      }
    }

    return patch;
  }

  function getPatchMidiChannel(patchComponent) {
    var midiChannelsKeys = Object.keys(midiChannels),
    midiChannelsKeysCount = midiChannelsKeys.length;

    for ( var i=0; i<midiChannelsKeysCount; i++ ) {
      if ( midiChannels[midiChannelsKeys[i]] === patchComponent ) {
        return midiChannelsKeys[i];
      }
    }
  }

  function updatePatchValues(midiChannel, patch, selectedMidiComponent) {
    var midiCCNumbers = Object.keys(patch),
      midiCCNumbersCount = midiCCNumbers.length;

    for ( var i=0; i<midiCCNumbersCount; i++ ) {
      var options = document.querySelectorAll("[data-midi-channel='" + midiChannel + "']"
        + "[data-midi-cc='" + midiCCNumbers[i] + "']"),
        event = new Event('change');

      if ( options ) {
        if ( options[0].tagName.toLowerCase() === 'option' ) {
          options[0].parentNode.selectedIndex = patch[midiCCNumbers[i]].value;
          options[0].dispatchEvent(event);
        } else if ( options[0].tagName.toLowerCase() === 'input' ) {
          options[0].value = patch[midiCCNumbers[i]].value;
          options[0].dispatchEvent(event);
        }
      }
    }
  }

  function activatePatchButtonSave(button) {
    var buttonData = getPatchButtonData(button),
      isDrum = buttonData.patchType === 'drum',
      drumNumber = isDrum ? parseInt(buttonData.buttonComponent.split(' ')[1]) - 1 : false,
      patchData = midiPatch[buttonData.buttonComponent],
      newPatchName = "";

    if ( isDrum ) {
      patchData = midiPatch[buttonData.patchType][drumNumber];
    }

    if ( !patchData ) {
      alert('There\'s nothing to save');
      return false;
    }

    newPatchName = prompt('Enter a new patch name', buttonData.selectedPatch);

    if ( newPatchName ) {
      setCache(buttonData.patchType, newPatchName, patchData);
      updatePatchSelectOptions('add', newPatchName, buttonData.patchSelects, buttonData.patchSelectId);
    }
  }

  function updatePatchSelectOptions(addRemove, patchName, selectElements, activeElementId) {
    var selectElementsCount = selectElements.length;

    if ( addRemove === 'add' ) {
      for ( var i=0; i<selectElementsCount; i++ ) {
        var matchedElement = document.querySelector(
          "#" + selectElements[i].id + " option[value='" + patchName + "']"
        ),
          selectedIndex = selectElements[i].selectedIndex;

        if ( !matchedElement ) {
          var option = document.createElement('option'),
            currentSelection = selectElements[i].options[selectElements[i].selectedIndex];

          option.value = patchName;
          option.innerHTML = patchName;
          selectElements[i].add(option);
          sortPatchSelectOptions(selectElements[i]);

          if ( selectElements[i].id === activeElementId ) {
            updateActiveSelectOption(selectElements[i], patchName);
          } else {
            updateActiveSelectOption(selectElements[i], currentSelection.value);
          }
        }
      }
    } else if ( addRemove === 'delete' ) {
      for ( var i=0; i<selectElementsCount; i++ ) {
        var options = selectElements[i].options,
          optionsCount = options.length;

        if ( options ) {
          for ( var j=0; j<optionsCount; j++ ) {
            if ( options[j] && options[j].value === patchName ) {
              selectElements[i].remove(j);
            }
          }
        }
      }
    }
  }

  function sortPatchSelectOptions(selectElement) {
    var optionsArray = [];

    for ( var i=selectElement.options.length-1; i>0; i-- ) {
      if ( optionsArray.indexOf(selectElement.options[i]) === -1 ){
        optionsArray.push(selectElement.removeChild(selectElement.options[i]));
      }
    }

    optionsArray.sort(function(a, b) {
      return a.innerHTML.localeCompare(b.innerHTML);
    });

    while ( optionsArray.length ) {
      var nextOption = optionsArray.shift(),
        option = document.createElement('option');

      option.value = nextOption.value;
      option.text = nextOption.text;
      selectElement.add(option);
    }
  }

  function updateActiveSelectOption(selectElement, patchName) {
    var options = selectElement.options,
      optionsCount = options.length;

    for ( var i=0; i<optionsCount; i++ ) {
      if ( options[i].value === patchName ) {
        selectElement.selectedIndex = i;
        return false;
      }
    }
  }

  function activatePatchButtonDelete(button) {
    var buttonData = getPatchButtonData(button);

    if ( buttonData.patchSelected ) {
      var cachedPatches = getCache(buttonData.patchType),
        patchType = buttonData.patchType,
        patchName = buttonData.patchSelected;

      if ( cachedPatches[patchName] ) {
        var confirm = window.confirm('Delete ' + patchName + '?');

        if ( confirm ) {
          deletePatch(patchType, patchName);
          updatePatchSelectOptions('delete', patchName, buttonData.patchSelects);
          updateActiveSelectOption(buttonData.patchSelect, '');
        }
      } else {
        alert('Ooops. Something ain\'t right');
      }
    } else {
      alert('select a patch from the dropdown menu');
    }
  }

  function getPatchButtonData(button) {
    var buttonComponent = button.getAttribute('data-component-section'),
      buttonComponentArray = buttonComponent.split(' '),
      patchType = buttonComponentArray[0],
      patchSelectId = buttonComponentArray.join('-') + '-patch-select',
      patchSelect = document.getElementById(patchSelectId),
      patchSelects = document
        .querySelectorAll("[id^='" + patchType + "']" + "[id$='-patch-select']"),
      patchSelected = patchSelect.options[patchSelect.selectedIndex].text

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
    var buttonData = getPatchButtonData(button),
      isDrum = buttonData.patchType === 'drum',
      drumNumber = isDrum ? parseInt(buttonData.buttonComponent.split(' ')[1]) - 1 : false,
      patchName = '',
      exportPatch = {},
      patchExportHolder = document.createElement("textarea");

    if ( buttonData.patchSelected ) {
      var cachedPatches = getCache(buttonData.patchType),
        patch = cachedPatches[buttonData.patchSelected]
          ? cachedPatches[buttonData.patchSelected] : {},
        midiChannel = isDrum
          ? getPatchMidiChannel(buttonData.patchType)
          : getPatchMidiChannel(buttonData.buttonComponent);

      if ( patch ) {
        patchName = buttonData.patchSelected;
        exportPatch[buttonData.patchType] = {};
        exportPatch[buttonData.patchType][patchName] = patch;
        patchExportHolder.class = "patch-export-holder";
        patchExportHolder.value = JSON.stringify(exportPatch);
        document.body.appendChild(patchExportHolder);
        patchExportHolder.select();

        if ( document.execCommand('copy') ) {
          alert( buttonData.patchType.toUpperCase()
            + ' patch "' + patchName + '" has been copied to the clipboard.');
        } else {
          alert( 'ERROR: the patch could not be exported');
        }
      } else {
        alert('Ooops. Something ain\'t right');
      }
    } else {
      alert('select a patch from the dropdown menu');
    }
  }

  function activatePatchButtonImport(button) {
    var buttonData = getPatchButtonData(button),
      importPatchString = prompt('PATCH IMPORT: Paste new '
      + buttonData.patchType.toUpperCase() + ' patch below.'),
      importPatch = JSON.parse(importPatchString),
      importPatchData = {},
      isDrum = buttonData.patchType === 'drum',
      drumNumber = isDrum ? parseInt(buttonData.buttonComponent.split(' ')[1]) - 1 : false,
      patchData = midiPatch[buttonData.buttonComponent],
      newPatchName = "";

    if ( importPatch && importPatch[buttonData.patchType] !== undefined ) {
      importPatchData = getImportPatchData(importPatch[buttonData.patchType]);
    }

    if ( importPatchData && importPatchData.patchName && importPatchData.patch ) {
      newPatchName = prompt("Save imported patch as...", importPatchData.patchName);
      setCache(buttonData.patchType, newPatchName, importPatchData.patch);
      updatePatchSelectOptions('add', newPatchName, buttonData.patchSelects, buttonData.patchSelectId);
    } else {
      alert('Patch import failed. Are sure you\'re importing the correct patch type?');
    }
  }

  function getImportPatchData(data) {
    var dataKeys = Object.keys(data),
      patchData = {};

    dataKeys.forEach(function(patchName) {
      patchData.patchName = patchName;
      patchData.patch = data[patchName];
    });

    return patchData;
  }

  function activateRandomizeButtons() {
    var randomizeButtons = document.getElementsByClassName("randomizer"),
      randomizeButtonsCount = randomizeButtons.length;

    for (var i=0; i<randomizeButtonsCount; i++) {
      randomizeButtons[i].addEventListener('click', function() {
        var targetComponentId = this.getAttribute('data-component-section'),
          targetComponent = document.getElementById(targetComponentId),
          targetSelects = targetComponent.getElementsByTagName('select'),
          targetSliders = targetComponent.getElementsByTagName('input');

        updateRandomSliderValues(targetSliders);
        updateRandomSelectValues(targetSelects);
      });
    }
  }

  function updateRandomSliderValues(sliders) {
    var slidersCount = sliders.length,
      randomMaximum = 0,
      randomMinimum = 0,
      randomValue = 0,
      event = new Event('change');

    for (var i=0; i<slidersCount; i++) {
      sliderMinimum = Math.ceil( sliders[i].getAttribute('min') );
      sliderMaximum = Math.floor( sliders[i].getAttribute('max') );
      randomValue = Math.floor(Math.random() * (sliderMaximum - sliderMinimum)) + sliderMinimum,
      midiChannel = sliders[i].getAttribute('data-midi-channel'),
      midiCCNumber = sliders[i].getAttribute('data-midi-cc');

      sliders[i].value = randomValue;
      sliders[i].dispatchEvent(event);
      updateMidiPatch(midiChannel, midiCCNumber, randomValue);
      markControlChange(midiChannel, midiCCNumber, sliders[i]);
    }
  }

  function markControlChange(midiChannel, midiCC, control) {
    if ( !isChanged(midiChannel, midiCC) ) {
      control.parentNode.className += " midi-patch-value";
    }
  }

  function isChanged(midiChannel, midiCC) {
    if ( !midiPatch[midiChannels[midiChannel]]
        || ( midiPatch[midiChannels[midiChannel]]
          && !midiPatch[midiChannels[midiChannel]][midiCC] ) ) {

      return false;
    }

    return true;
  }

  function updateMidiPatch(midiChannel, midiCCNumber, midiCCValue) {
    var circuitMidiCCValues = circuitMidiApp
      .getCircuitMidiCC(parseInt(midiChannel), parseInt(midiCCNumber)),
      patchType = midiChannels[midiChannel],
      selectedMidiComponent = midiComponents[patchType],
      drumIndex = 0;

    if ( !midiPatch[patchType] && patchType === 'drum' ) {
      midiPatch[patchType] = new Array(4);
    } else if ( !midiPatch[patchType] ) {
      midiPatch[patchType] = {};
    }

    if ( patchType === 'drum' ) {
      drumIndex = getDrumIndex(midiCCNumber);

      if ( !midiPatch[patchType][drumIndex[0]] ) {
        midiPatch[patchType][drumIndex[0]] = new Array(6);
      }

      midiPatch[patchType][drumIndex[0]][drumIndex[1]] = midiCCValue;
    } else  {
      midiPatch[patchType][midiCCNumber] = {
        name: circuitMidiCCValues.name,
        value: midiCCValue
      }
    }
  }

  function getDrumIndex(midiCCNumber) {
    var drumNumber = 0,
      controlNumber = 0;

    midiDrumCCs.forEach(function(component, index) {
      controlIndex = component.indexOf(midiCCNumber);

      if ( controlIndex !== -1 ) {
        controlNumber = controlIndex;
        drumNumber = index;
        return true;
      }
    });

    return [drumNumber, controlNumber];
  }

  function updateRandomSelectValues(selects) {
    var selectsCount = selects.length,
      randomOptions = [],
      randomOptionsCount = 0,
      randomOptionNumber = 0,
      midiChannel = 0,
      midiCCNumber = 0,
      event = new Event('change');

    for (var i=0; i<selectsCount; i++){
      randomOptions = selects[i].getElementsByTagName('option');

      if ( randomOptions && randomOptions[0] && randomOptions[0].getAttribute('data-midi-channel') ) {
        randomOptionsCount = randomOptions.length,
        randomOptionNumber = Math.floor(Math.random() * (randomOptionsCount));
        midiChannel = randomOptions[randomOptionNumber].getAttribute('data-midi-channel');
        midiCCNumber = randomOptions[randomOptionNumber].getAttribute('data-midi-cc');

        selects[i].selectedIndex = randomOptionNumber;
        selects[i].dispatchEvent(event);
        markControlChange(midiChannel, midiCCNumber, selects[i]);
        updateMidiPatch(midiChannel, midiCCNumber, randomOptionNumber);
      }
    }
  }

  function setCache(component, patchName, patchData) {
    var savedComponent = {};

    if ( browserLocalStorageEnabled ) {
      savedComponent = getCache(component) ? getCache(component) : {};
      savedComponent[patchName] = patchData;

      localStorage.setItem( component, JSON.stringify(savedComponent) );
    }
  }

  function getCache(component) {
    var cachedItem = {};

    if ( browserLocalStorageEnabled ) {
      cachedItem = localStorage.getItem( component );
    }

    return JSON.parse( cachedItem );
  }

  function deletePatch(component, patchName) {
    if ( browserLocalStorageEnabled ) {
      savedComponent = getCache(component) ? getCache(component) : {};
      delete savedComponent[patchName];

      localStorage.setItem( component, JSON.stringify(savedComponent) );
    }
  }

  function localStorageSupport() {
    var mod = 'test';

    try {
      localStorage.setItem(mod, mod);
      localStorage.removeItem(mod);
      return true;
    } catch(e) {
      return false;
    }
  }

  // Begin Web Midi Code
  function getWebMidi() {
    if ( navigator.requestMIDIAccess ) {
      navigator.requestMIDIAccess().then( onMIDISuccess, onMIDIFailure );
    } else {
      onMIDIFailure('Your browser does not support web midi. This feature is currently only supported in Google Chrome.');
    }
  }

  function onMIDISuccess(MIDIAccess) {
    midi = MIDIAccess;
    midiDevices.inputs = getMidiDevices(midi, 'inputs');
    midiDevices.outputs = getMidiDevices(midi, 'outputs'),
    errorMessage = 'unknown error';

    if (!midiDevices.inputs.size) {
      errorMessage = 'Novation Circuit&trade; device not detected on MIDI in<br />'
        + 'Make sure your Circuit&trade; is connected and reload this page.';
      printErrorMessage(errorMessage);
    } else {
      midiDevices.inputs.forEach(function(device){
        if (device.name.toLowerCase() === 'circuit') {
          device.onmidimessage = onMIDIMessage;
          inputID = device.id;
        }
      });
    }

    if (!midiDevices.outputs.size) {
      errorMessage = 'Novation Circuit&trade; device not detected on MIDI out<br />'
        + 'Make sure your Circuit&trade; is connected and reload this page.';
      printErrorMessage(errorMessage);
    } else {
      midiDevices.outputs.forEach(function(device){
        if (device.name.toLowerCase() === 'circuit') {
          outputID = device.id;
        }
      });
    }
  }

  function getMidiDevices(midi, connectionType) {
    if ( midi && midi[connectionType] && midi.size !== 0 ) {
      return midi[connectionType];
    }
  }

  function printErrorMessage(message) {
    var messageHolder = document.getElementById('message-holder');
    messageHolder.innerHTML += '<p>' + message + '</p>';
  }

  function onMIDIMessage(event) {
    if ( midiIn && midiIn.enabled ) {
      var str = "",
        eventMidiChannel = event.data && event.data[0] ? (event.data[0] & 0x0F) : false;
        eventMidiCC = event.data && event.data[1] ? event.data[1] : false,
        eventMidiCCValue = event.data && event.data[2] ? event.data[2] : false;

      if ( (eventMidiChannel === midiIn.channel) && eventMidiCC && eventMidiCCValue ) {
        var eventType = event.data[0] & 0xf0;

        if ( eventType === 0xB0 ) {
          updateSliderValue(eventMidiChannel, eventMidiCC, eventMidiCCValue);
          updateMidiPatch(eventMidiChannel, eventMidiCC, eventMidiCCValue);
        }
      }
    }
  }

  function updateSliderValue(midiChannel, midiCC, midiCCValue) {
    var slider = document
      .querySelectorAll("[data-midi-channel='" + midiChannel + "'][data-midi-cc='" + midiCC + "']")[0];

    slider.value = midiCCValue;

    markControlChange(midiChannel, midiCC, slider);
  }
  function sendMiddleC( midi, portID ) {
    var noteOnMessage = [0x90, 60, 63];
    var output = midi.outputs.get(portID);
    output.send( noteOnMessage );
    output.send( [0x80, 60, 0x40], window.performance.now() + 1000.0 );
  }

  function onMIDIFailure(msg) {
    printErrorMessage('Failed to get MIDI access - ' + msg);
  }

  function getCircuitDevices(midiDevices) {
    var circuits = [];

    midiDevices.forEach( function( device ) {
      if ( device.name.toLowerCase() === 'circuit' ) {
        circuits.push(device);
      }
    });

    return circuits;
  }

  // Limit real-time slider imput to avoid page crash
  function throttle(fn, threshhold, scope) {
    threshhold || (threshhold = 250);
    var last,
        deferTimer;
    return function () {
      var context = scope || this;

      var now = +new Date,
          args = arguments;
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
    var timer = null;
    return function () {
      var context = this, args = arguments;
      clearTimeout(timer);
      timer = setTimeout(function () {
        fn.apply(context, args);
      }, delay);
    };
  }
})();
