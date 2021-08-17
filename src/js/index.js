"use strict";

import { midiCCs, ccComponents, midiChannels } from './cc/';
import { midiNRPNs, nrpnComponents } from './nrpn/';

const midiComponents = getMidiComponents();


// console.log(cc);
// console.log(midiNRPNs);
// console.log(midiComponents);

function getMidiComponents(type = 'cc') {
  let componentTypes;
  let defaultPatch = new Map();

  type = type.toLowerCase();

  switch (type) {
    case 'cc':
      componentTypes = Object.keys(ccComponents);
      break;
    case 'nrpn':
      componentTypes = Object.keys(nrpnComponents);
      break;
    default:
      console.log('invalid Midi Component type');
      return false;
  }

  componentTypes.forEach(function (component) {
    const componentType = getComponentType(component);
    const componentSettings = getComponentSettings(ccComponents[component], midiCCs[componentType]);

    let componentValues = new Map();

    componentSettings.forEach(function (v, k) {
      const parameters = Object.keys(v);
      let componentArray = [];
      let paramterType = "";

      parameters.forEach(function (parameter) {
        if (!paramterType) {
          paramterType = k;
        }

        componentArray.push({
          type: parameter,
          'name': v[parameter] && v[parameter].name,
          'defaultValue': v[parameter] && v[parameter].defaultValue,
          'range': getMidiParameterRange(v[parameter])
        });
      });

      componentValues.set(paramterType, componentArray);
    });

    defaultPatch.set(component, {
      midiChannel: midiChannels[component],
      parameters: componentValues
    });
  });

  return defaultPatch;
}

function getComponentType(component) {
  const midiCCTypes = Object.keys(midiCCs);
  let componentType = '';

  midiCCTypes.forEach(function (type) {
    if (component.toLowerCase().includes(type)) {
      componentType = type;
    }
  });

  return componentType;
}

function getComponentSettings(component, componentCCs) {
  var componentSettings = new Map();

  // console.log({ component, componentCCs });

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

function getCircuitMidiCC(midiCCNumber, midiCCs) {
  return midiCCs[midiCCNumber];
  // var circuitCCValues = false;


  // switch (midiChannel) {
  //   case 0:
  //   case 1:
  //     circuitCCValues = midiCCs.synth[midiCCNumber];
  //     break;
  //   case 9:
  //     circuitCCValues = midiCCs.drums[midiCCNumber];
  //     break;
  //   case 15:
  //     circuitCCValues = midiCCs.session[midiCCNumber];
  //     break;
  // }

  // return circuitCCValues;
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

console.log({ midiComponents });
console.log({ midiChannels });
export { midiCCs, midiNRPNs, midiComponents, midiChannels, getCircuitMidiCC };