(function () {
  "use strict";

  const cc = require('./cc/');
  const midiNRPNs = require('./nrpn/');

  const midiComponents = getMidiComponents();
  const midiChannels = {
    '0': 'synth 1',
    '1': 'synth 2',
    '9': 'drum',
    '15': 'session'
  };

  console.log(cc);
  console.log(midiNRPNs);
  console.log(midiComponents);

  function getMidiComponents() {
    var components = {
      'synth 1': {
        midiChannel: 0,
        parameters: getComponentSettings(cc.midiComponents['synth 1'], cc.midiCCs.synth)
      },
      'synth 2': {
        midiChannel: 1,
        parameters: getComponentSettings(cc.midiComponents['synth 2'], cc.midiCCs.synth)
      },
      'drum 1': {
        midiChannel: 9,
        parameters: getComponentSettings(cc.midiComponents['drum 1'], cc.midiCCs.drums)
      },
      'drum 2': {
        midiChannel: 9,
        parameters: getComponentSettings(cc.midiComponents['drum 2'], cc.midiCCs.drums)
      },
      'drum 3': {
        midiChannel: 9,
        parameters: getComponentSettings(cc.midiComponents['drum 3'], cc.midiCCs.drums)
      },
      'drum 4': {
        midiChannel: 9,
        parameters: getComponentSettings(cc.midiComponents['drum 4'], cc.midiCCs.drums)
      },
      'session': {
        midiChannel: 15,
        parameters: getComponentSettings(cc.midiComponents.session, cc.midiCCs.session)
      }
    };
    var defaultPatch = new Map();

    Object.keys(components).forEach(function (key) {
      const { midiChannel, parameters } = components[key];

      var componentValues = new Map();

      parameters.forEach(function (v, k) {
        var midiParameters = Object.keys(v);
        var componentArray = [];
        var componentType = "";

        midiParameters.forEach(function (parameter) {
          if (!componentType) {
            componentType = k;
          }

          componentArray.push({
            'cc': parameter,
            'name': v[parameter] && v[parameter].name,
            'default': v[parameter] && v[parameter].default,
            'range': getMidiParameterRange(v[parameter])
          });
        });

        componentValues.set(componentType, componentArray);
      });

      defaultPatch.set(key, {
        midiChannel: midiChannel,
        parameters: componentValues
      });
    });

    return defaultPatch;
  }

  function getComponentSettings(component, componentCCs) {
    var componentSettings = new Map();

    Object.keys(component).forEach(function (key) {
      componentSettings.set(key, getMidiSettings(component[key], componentCCs));
    });

    return componentSettings;
  }

  function getMidiSettings(midiCCArray, midiCCs) {
    var midiCCArrayLength = midiCCArray.length;
    var midiSettings = [];

    for (var i = 0; i < midiCCArrayLength; i++) {
      var thisSetting = midiCCs[midiCCArray[i]];
      // var thisSetting = getCircuitMidiCC(midiChannel, midiCCArray[i], midiCCs);

      midiSettings[midiCCArray[i]] = thisSetting;
    }

    return midiSettings;
  }

  // function getCircuitMidiCC(midiChannel, midiCCNumber, midiCCs) {
  //   return cc.midiCCs[midiCCNumber];
  //   // var circuitCCValues = false;


  //   // switch (midiChannel) {
  //   //   case 0:
  //   //   case 1:
  //   //     circuitCCValues = cc.midiCCs.synth[midiCCNumber];
  //   //     break;
  //   //   case 9:
  //   //     circuitCCValues = cc.midiCCs.drums[midiCCNumber];
  //   //     break;
  //   //   case 15:
  //   //     circuitCCValues = cc.midiCCs.session[midiCCNumber];
  //   //     break;
  //   // }

  //   // return circuitCCValues;
  // }

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
    midiChannels: midiChannels,
    // getCircuitMidiCC: getCircuitMidiCC,
    midiNRPNs: midiNRPNs
  }
})();
