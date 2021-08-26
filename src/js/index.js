"use strict";

import { midiCCs, ccComponents, midiChannels } from './cc/';
import { midiNRPNs, nrpnComponents } from './nrpn/';

let midiType;

function getMidiComponents(midiControllerType) {
  let components;
  let componentTypes;
  let midiTypeValues;
  let defaultPatch = new Map();

  midiType = midiControllerType.toLowerCase();

  switch (midiType) {
    case 'cc':
      components = ccComponents;
      midiTypeValues = midiCCs;
      break;
    case 'nrpn':
      components = nrpnComponents;
      midiTypeValues = midiNRPNs;
      break;
    default:
      console.log('invalid Midi Component type');
      return false;
  }

  componentTypes = Object.keys(components);

  // console.log({ components, componentTypes });

  componentTypes.forEach(function (componentTypeSpecific) {
    const componentSettings = getComponentSettings(components, componentTypeSpecific, midiTypeValues);

    let componentValues = new Map();

    if (!componentSettings) {
      return false;
    }

    console.log({ componentSettings });

    componentSettings.forEach(function (parameters, parameterType) {
      let componentArray = [];

      parameters.forEach(function (parameter) {
        let values = [];
        let valueObject = {
          name: parameter.name,
          defaultValue: parameter.defaultValue,
          range: getMidiParameterRange(parameter),
          values: []
        };

        valueObject[midiType] = parameter[midiType].trim();

        values.push(valueObject);
        componentArray.push(valueObject);
      });

      componentValues.set(parameterType, componentArray);
    });

    defaultPatch.set(componentTypeSpecific, {
      midiChannel: midiChannels[componentTypeSpecific],
      parameters: componentValues
    });
  });

  return defaultPatch;
}

function getComponentSettings(components, componentTypeSpecific, midiTypeValues) {
  const parameters = components[componentTypeSpecific];
  const componentTypeValues = parameters && getComponentTypeValues(componentTypeSpecific, midiTypeValues);

  let componentSettings = new Map();

  if (!componentTypeValues) {
    return componentSettings;
  }

  console.log({ componentTypeValues });

  Object.keys(parameters).forEach(function (type) {
    console.log({ type, componentTypeValues });
    // console.log({ values, componentTypeValues });
    componentSettings.set(type, getParameterSettings(parameters[type], componentTypeValues));
  });

  // console.log({ componentSettings });

  return componentSettings;
}

function getComponentTypeValues(component, midiTypeValues) {
  const midiTypeKeys = Object.keys(midiTypeValues);

  let componentType;

  midiTypeKeys.forEach(function (type) {
    if (component.toLowerCase().includes(type)) {
      componentType = type;
    }
  });

  // console.log(componentType, 'values', midiTypeValues[componentType]);

  // console.log({ 'midiTypeValue': midiTypeValues[componentType] });

  return midiTypeValues[componentType];
}

function getParameterSettings(parameters, componentTypeValues) {
  var midiSettings = [];

  parameters.forEach(function (parameter) {
    let componentTypeValue = componentTypeValues[parameter];
    let values = Array.isArray(componentTypeValue) ? componentTypeValue : [componentTypeValue];

    values.forEach(function (value) {
      value[midiType] = parameter;

      // console.log({ componentTypeValue });

      midiSettings.push(value);
    });
  });

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

function getMidiParameterRange(values) {
  const range = values && values.hasOwnProperty('range') ? values.range : false;
  const rangeValues = values && values.hasOwnProperty('rangeValues') ? values.rangeValues : false;

  return rangeValues ? getRangeValues(range, rangeValues) : getRange(range);
}

function getRangeValues(range, rangeValues) {
  const rangeStart = range[0];
  const rangeValuesStart = rangeValues[0];
  const rangeValuesType = typeof (rangeValues[0]);
  const rangeLength = range[1] - range[0];

  let values = {};

  for (var i = 0; i <= rangeLength; i++) {
    values[rangeStart + i] = rangeValuesType === 'number' ? rangeValuesStart + i : rangeValues[i];
  }

  return values;
}

function getRange(range) {
  const rangeValuesStart = range[0];
  const rangeLength = range[1];

  let values = {};

  for (var i = 0; i <= rangeLength; i++) {
    values[rangeValuesStart + i] = rangeValuesStart + i;
  }

  return values;
}

// console.log({ midiComponents });
// console.log({ nrpnMidiComponents });
// console.log({ midiChannels });
export { midiCCs, midiNRPNs, midiChannels, getMidiComponents };