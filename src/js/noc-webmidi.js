(function() {
  "use strict";
  var synth = require('./novation-circuit-synth.js'),
    drum = require('./novation-circuit-drums.js'),
    session = require('./novation-circuit-session.js');

  var midiCCs = {
    synth: synth.midiCCs,
    drum: drum.midiCCs,
    session: session.midiCCs
  };

  var midiComponents = getMidiComponents(),
    midiDrumCCs = getDrumComponents(drum.midiComponents),
    midiChannels = {
      '0': 'synth 1',
      '1': 'synth 2',
      '9': 'drum',
      '15': 'session'
    };

  function getMidiComponents() {
    var components = {
      'synth 1': getComponentSettings(0,synth.midiComponents),
      'synth 2': getComponentSettings(1,synth.midiComponents),
      'drum 1': getComponentSettings(9,drum.midiComponents[0]),
      'drum 2': getComponentSettings(9,drum.midiComponents[1]),
      'drum 3': getComponentSettings(9,drum.midiComponents[2]),
      'drum 4': getComponentSettings(9,drum.midiComponents[3]),
      'session': getComponentSettings(15,session.midiComponents)
    };
    var componentsKeys = Object.keys(components);
    var defaultPatch = new Map();

    componentsKeys.forEach(function(key) {
      var value = components[key];
      var componentValues = new Map();

      value.forEach(function(v, k) {
        var midiParameters = Object.keys(v),
          componentArray = [],
          componentType = "";

        midiParameters.forEach(function(parameter) {
          if (!componentType) {
            componentType = k;
          }

          componentArray.push({
            'cc': parameter,
            'name': getMidiParameterName(v[parameter]),
            'default': getMidiParameterDefault(v[parameter]),
            'range': getMidiParameterRange(v[parameter])
          });
        });

        componentValues.set( componentType, componentArray );
        defaultPatch.set( key, componentValues );
      });
    });

    return defaultPatch;
  }

  function getDrumComponents(drumComponents) {
    return drumComponents.map(function(component) { return component.settings; });
  }

  function getComponentSettings(midiChannel, midiCCObject) {
    var midiCCObjectKeys = Object.keys(midiCCObject),
      componentSettings = new Map();

    midiCCObjectKeys.forEach(function(key) {
      componentSettings.set( key, getMidiSettings(midiChannel, midiCCObject[key]) );
    });

    return componentSettings;
  }

  function getMidiSettings(midiChannel, midiCCArray) {
    var midiCCArrayLength = midiCCArray.length,
      midiSettings = [];

    for (var i=0; i<midiCCArrayLength; i++) {
      var thisSetting = getCircuitMidiCC(midiChannel, midiCCArray[i]);

      midiSettings[midiCCArray[i]] = thisSetting;
    }

    return midiSettings;
  }

  function getCircuitMidiCC(midiChannel, midiCCNumber) {
    var circuitCCValues = false;

    switch( midiChannel ) {
      case 0:
      case 1:
        circuitCCValues = midiCCs.synth[midiCCNumber];
        break;
      case 9:
        circuitCCValues = midiCCs.drum[midiCCNumber];
        break;
      case 15:
        circuitCCValues = midiCCs.session[midiCCNumber];
        break;
    }

    return circuitCCValues;
  }

  function getMidiParameterName(parameter) {
    return parameter.name ? parameter.name : false;
  }

  function getMidiParameterDefault(parameter) {
    return parameter.default ? parameter.default : false;
  }

  function getMidiParameterRange(parameter) {
    var range = parameter.hasOwnProperty('range') ? parameter.range : false,
      rangeValues = parameter.hasOwnProperty('rangeValues') ? parameter.rangeValues : false;

    return rangeValues ? getRangeValues(range, rangeValues) : getRange(range);
  }

  function getRangeValues(range, rangeValues) {
    var values = {},
      rangeStart = range[0],
      rangeValuesStart = rangeValues[0],
      rangeValuesType = typeof(rangeValues[0]),
      rangeLength = range[1] - range[0];

    for(var i=0; i<rangeLength+1; i++) {
      values[rangeStart+i] = rangeValuesType === 'number' ? rangeValuesStart+i : rangeValues[i];
    }

    return values;
  }

  function getRange(range) {
    var values = {},
      rangeValuesStart = range[0],
      rangeLength = range[1];

    for(var i=0; i<rangeLength+1; i++) {
      values[rangeValuesStart+i] = rangeValuesStart+i;
    }

    return values;
  }

  window.circuitMidiApp = {
    midiCCs: midiCCs,
    midiComponents: midiComponents,
    midiDrumCCs: midiDrumCCs,
    midiChannels: midiChannels,
    getCircuitMidiCC: getCircuitMidiCC
  }
})();
