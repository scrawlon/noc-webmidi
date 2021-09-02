"use strict";

import { midiCCs, ccComponents, midiChannels } from './cc/';
import { midiNRPNs, nrpnComponents } from './nrpn/';
import { initWebMidi, sendWebMidiEvent } from './web-midi';


let midiMessageType;

function getMidiComponents(requestedMidiMessageType) {
  let components;
  let midiMessageTypeValues;
  let defaultPatch = new Map();

  midiMessageType = requestedMidiMessageType.toLowerCase();

  switch (midiMessageType) {
    case 'cc':
      components = ccComponents;
      midiMessageTypeValues = midiCCs;
      break;
    case 'nrpn':
      components = nrpnComponents;
      midiMessageTypeValues = midiNRPNs;
      break;
    default:
      console.log('invalid Midi Component type');
      return false;
  }

  Object.keys(components).forEach(function (componentTypeSpecific) {
    const componentSettings = getComponentSettings(components, componentTypeSpecific, midiMessageTypeValues);

    let componentValues = new Map();

    if (!componentSettings) {
      return false;
    }

    componentSettings.forEach(function (parameters, parameterType) {
      let componentArray = [];

      parameters.forEach(function (parameter) {
        let values = [];
        let valueObject = {
          name: parameter.name,
          defaultValue: parameter.defaultValue,
          range: getParameterRangeValues(parameter)
        };

        valueObject[midiMessageType] = parameter[midiMessageType].trim();

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

function getComponentSettings(components, componentTypeSpecific, midiMessageTypeValues) {
  const sections = components[componentTypeSpecific];
  const sectionParameterValues = getSectionParameterValues(componentTypeSpecific, midiMessageTypeValues);

  let componentSettings = new Map();

  if (!sections || !sectionParameterValues) {
    return componentSettings;
  }

  Object.keys(sections).forEach(function (parameter) {
    componentSettings.set(parameter, getParameterSettings(sections[parameter], sectionParameterValues));
  });

  return componentSettings;
}

function getSectionParameterValues(componentTypeSpecific, midiMessageTypeValues) {
  const midiMessageTypeKeys = Object.keys(midiMessageTypeValues);

  let componentType;

  midiMessageTypeKeys.forEach(function (type) {
    if (componentTypeSpecific.toLowerCase().includes(type)) {
      componentType = type;
    }
  });

  return midiMessageTypeValues[componentType];
}

function getParameterSettings(parameters, sectionParameterValues) {
  var midiSettings = [];

  parameters.forEach(function (parameter) {
    let componentTypeValue = sectionParameterValues[parameter];
    let values = Array.isArray(componentTypeValue) ? componentTypeValue : [componentTypeValue];

    values.forEach(function (value) {
      value[midiMessageType] = parameter;
      midiSettings.push(value);
    });
  });

  return midiSettings;
}

// function getCircuitMidiCC(midiCCNumber, midiCCs) {
//   return midiCCs[midiCCNumber];
//   // var circuitCCValues = false;


//   // switch (midiChannel) {
//   //   case 0:
//   //   case 1:
//   //     circuitCCValues = midiCCs.synth[midiCCNumber];
//   //     break;
//   //   case 9:
//   //     circuitCCValues = midiCCs.drums[midiCCNumber];
//   //     break;
//   //   case 15:
//   //     circuitCCValues = midiCCs.session[midiCCNumber];
//   //     break;
//   // }

//   // return circuitCCValues;
// }

function getParameterRangeValues(values) {
  const { range, rangeValues } = values;

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

export { getMidiComponents, midiChannels, initWebMidi, sendWebMidiEvent };