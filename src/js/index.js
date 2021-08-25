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

    componentSettings.forEach(function (parameters, parameterType) {
      let componentArray = [];

      console.log({ parameters });

      parameters.forEach(function (values, parameter) {
        let componentObject = {
          values: []
        };

        let valueObject = {};

        if (!values) {
          return componentObject;
        }

        // console.log({ values });

        valueObject.cc = values.cc;
        valueObject.nrpn = values.nrpn;
        valueObject.name = values.name;
        valueObject.default = values.defaultValue;
        valueObject.range = getMidiParameterRange(values);
        valueObject.values = values;

        componentObject.values.push(valueObject);
        componentArray.push(componentObject);
      });

      componentValues.set(parameterType, componentArray);
    });

    console.log({ componentValues });

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

  console.log({ parameters });

  Object.keys(parameters).forEach(function (type) {
    console.log({ type, componentTypeValues });
    // console.log({ values, componentTypeValues });
    componentSettings.set(type, getMidiSettings(parameters[type], componentTypeValues));
  });

  console.log({ componentSettings });

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

  console.log({ 'midiTypeValue': midiTypeValues[componentType] });

  return midiTypeValues[componentType];
}

function getMidiSettings(parameters, componentTypeValues) {
  var midiSettings = [];

  console.log('TEST', parameters);

  parameters.forEach(function (parameter) {
    let componentTypeValue = componentTypeValues[parameter];
    // console.log({ parameter, componentTypeValue });

    if (midiType === 'nrpn') {
      componentTypeValue[0].nrpn = parameter;
    } else {
      componentTypeValue.cc = parameter;
    }

    if (Array.isArray(componentTypeValue)) {
      midiSettings.push(componentTypeValue[0]);
    } else {
      midiSettings.push(componentTypeValue);
    }

  });
  // for (var i = 0; i < paramters.length; i++) {
  //   var thisSetting = componentTypeValues[component[i]];
  //   // var thisSetting = getCircuitMidiCC(midiChannel, component[i], componentTypeValues);

  //   midiSettings[component[i]] = thisSetting;
  // }

  console.log({ midiSettings });

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
  var range = values && values.hasOwnProperty('range') ? values.range : false,
    rangeValues = values && values.hasOwnProperty('rangeValues') ? values.rangeValues : false;

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

// console.log({ midiComponents });
// console.log({ nrpnMidiComponents });
// console.log({ midiChannels });
export { midiCCs, midiNRPNs, midiChannels, getMidiComponents };