(function () {
  "use strict";

  var cc = require('./cc/');
  var midiNRPNs = require('./nrpn/');

  var midiComponents = getMidiComponents();
  // var midiDrumCCs = getDrumComponents();
  var midiChannels = {
    '0': 'synth 1',
    '1': 'synth 2',
    '9': 'drum',
    '15': 'session'
  };

  console.log(cc);
  console.log(midiNRPNs);
  console.log(midiComponents);
  // console.log(midiDrumCCs);

  function getMidiComponents() {
    var components = {
      'synth 1': getComponentSettings(0, cc.midiComponents.synth),
      'synth 2': getComponentSettings(1, cc.midiComponents.synth),
      // 'drum 1': getComponentSettings(9, cc.midiComponents.drums[0]),
      // 'drum 2': getComponentSettings(9, cc.midiComponents.drums[1]),
      // 'drum 3': getComponentSettings(9, cc.midiComponents.drums[2]),
      // 'drum 4': getComponentSettings(9, cc.midiComponents.drums[3]),
      'session': getComponentSettings(15, cc.midiComponents.session)
    };
    var defaultPatch = new Map();

    Object.keys(components).forEach(function (key) {
      var value = components[key];
      var componentValues = new Map();

      console.log('key', key);

      value.forEach(function (v, k) {
        var midiParameters = Object.keys(v),
          componentArray = [],
          componentType = "";

        console.log('v', v, 'k', k);

        midiParameters.forEach(function (parameter) {
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

        componentValues.set(componentType, componentArray);
        defaultPatch.set(key, componentValues);
        console.log(componentValues, defaultPatch);
      });
    });

    return defaultPatch;
  }

  function getDrumComponents() {
    return cc.midiComponents.drums.map(function (component) { return component.settings; });
  }

  function getComponentSettings(midiChannel, component) {
    var componentSettings = new Map();

    Object.keys(component).forEach(function (key) {
      console.log('component', component, 'key', key);
      componentSettings.set(key, getMidiSettings(midiChannel, component[key]));
    });

    return componentSettings;
  }

  function getMidiSettings(midiChannel, midiCCArray) {
    var midiCCArrayLength = midiCCArray.length,
      midiSettings = [];

    for (var i = 0; i < midiCCArrayLength; i++) {
      var thisSetting = getCircuitMidiCC(midiChannel, midiCCArray[i]);

      midiSettings[midiCCArray[i]] = thisSetting;
    }

    return midiSettings;
  }

  function getCircuitMidiCC(midiChannel, midiCCNumber) {
    var circuitCCValues = false;

    switch (midiChannel) {
      case 0:
      case 1:
        circuitCCValues = cc.midiCCs.synth[midiCCNumber];
        break;
      case 9:
        circuitCCValues = cc.midiCCs.drums[midiCCNumber];
        break;
      case 15:
        circuitCCValues = cc.midiCCs.session[midiCCNumber];
        break;
    }

    return circuitCCValues;
  }

  function getMidiParameterName(parameter) {
    return parameter && parameter.name ? parameter.name : false;
  }

  function getMidiParameterDefault(parameter) {
    return parameter && parameter.default ? parameter.default : false;
  }

  function getMidiParameterRange(parameter) {
    var range = parameter && parameter.hasOwnProperty('range') ? parameter.range : false,
      rangeValues = parameter && parameter.hasOwnProperty('rangeValues') ? parameter.rangeValues : false;

    return rangeValues ? getRangeValues(range, rangeValues) : getRange(range);
  }

  function getRangeValues(range, rangeValues) {
    var values = {},
      rangeStart = range[0],
      rangeValuesStart = rangeValues[0],
      rangeValuesType = typeof (rangeValues[0]),
      rangeLength = range[1] - range[0];

    for (var i = 0; i < rangeLength + 1; i++) {
      values[rangeStart + i] = rangeValuesType === 'number' ? rangeValuesStart + i : rangeValues[i];
    }

    return values;
  }

  function getRange(range) {
    var values = {},
      rangeValuesStart = range[0],
      rangeLength = range[1];

    for (var i = 0; i < rangeLength + 1; i++) {
      values[rangeValuesStart + i] = rangeValuesStart + i;
    }

    return values;
  }

  module.exports = {
    midiCCs: cc.midiCCs,
    midiComponents: midiComponents,
    // midiDrumCCs: midiDrumCCs,
    midiChannels: midiChannels,
    getCircuitMidiCC: getCircuitMidiCC,
    midiNRPNs: midiNRPNs
  }
})();
