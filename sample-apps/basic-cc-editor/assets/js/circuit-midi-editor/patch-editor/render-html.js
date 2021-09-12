
import { selectors, getAllComponentTypes, getAllComponents } from './config.js';

const { midiChannels } = nocWebMidi;

function renderEditor() {
  const { editorWrapper } = selectors;
  const editorWrapperBox = document.querySelector(editorWrapper);
  const allComponentTypes = getAllComponentTypes();

  if (!editorWrapperBox || !allComponentTypes.length) {
    return false;
  }

  let editorHtml = '';

  allComponentTypes.forEach(function (componentType) {
    editorHtml += getComponentSectionHtml(componentType);
  });

  editorWrapperBox.innerHTML = editorHtml;
}

function getComponentSectionHtml(componentType) {
  const componentTypeSlug = componentType.toLowerCase().replace(' ', '-');
  const componentHtml = getComponentHtml(componentType);
  const componentMidiChannelOptions = getComponentMidiChannelOptions(componentType);

  // HTML for each MIDI component component.
  return `
    <div id='${componentTypeSlug}' class='component' data-component-name='${componentType}'> 
      <h2>${componentType}</h2>
      <div class='midi-controls'>
        <label for='${componentTypeSlug}-midi-channel'>Midi Channel</label> 
        <select id='${componentTypeSlug}-midi-channel' name='${componentTypeSlug}-midi-channel' class='midi-channel'>
          ${componentMidiChannelOptions}
        </select>      
        <button type='button' class='activate-midi-in' data-midi-enabled=''>
          MIDI IN
        </button> 
        <button type='button' class='randomizer' data-component-name='${componentType}'>
          randomize
        </button>
      </div>
      <div class='button-bar patch-management'> 
        <label for='${componentTypeSlug}-patch-select'>Patch Select: </label>
        <select id='${componentTypeSlug}-patch-select'>
          <option value='default'>Default Patch</option>
        </select>
        <button type='button' value='load'>load</button>
        <button type='button' value='save'>save</button>
        <button type='button' value='delete'>delete</button>
        <button type='button' value='import'>import</button>
        <button type='button' value='export'>export</button>
      </div>
      ${componentHtml}
    </div>
  `;
}

function getComponentHtml(componentType) {
  const components = getAllComponents(componentType);

  let componentSectionsHtmlArrays = {};
  let componentHtml = '';

  components.forEach(function (sections) {
    const { parameters: section = [] } = sections || {};

    section.forEach(function (parameters, sectionName) {
      const sectionHtml = getSectionHtml(parameters);

      if (!(sectionName in componentSectionsHtmlArrays)) {
        componentSectionsHtmlArrays[sectionName] = [];
      }

      componentSectionsHtmlArrays[sectionName].push(sectionHtml);
    });
  });

  Object.keys(componentSectionsHtmlArrays).forEach(function (sectionName) {
    componentHtml += `
      <div class='section' data-section-name='${sectionName}'>
        <h3>${sectionName}</h3>
        ${componentSectionsHtmlArrays[sectionName].join('')}
      </div>
    `;
  });

  return componentHtml;
}

function getSectionHtml(parameters) {
  let sectionHtml = '';

  if (!parameters) {
    return sectionHtml;
  }

  parameters.forEach(function (parameter) {
    const { name, range, cc, nrpn } = parameter;
    const nameSlug = name && name.toLowerCase().replace(' ', '-');
    const inputField = getParameterInput(parameter);

    let parameterDataset = `data-parameter-name='${parameter.name}'`;

    if (cc) {
      parameterDataset += `data-parameter-type='cc' data-parameter-number='${cc}'`;
    }

    if (nrpn) {
      parameterDataset += `data-parameter-type='nrpn' data-parameter-number='${nrpn}'`;
    }

    sectionHtml += `
      <div class='parameter' ${parameterDataset}> 
        <label for='${nameSlug}'>${name}</label><br />
        ${inputField}
      </div> 
    `;
  });

  return sectionHtml;
}

function getComponentMidiChannelOptions(componentType) {
  const midiChannel = midiChannels[componentType];

  const midiChannelOptions = [...Array(16).keys()].map(function (channel) {
    const selected = midiChannel == channel + 1 ? 'selected' : '';

    return `
      <option value='${channel + 1}' ${selected}>
        ${channel + 1}
      </option>
    `;
  });

  return midiChannelOptions.join('\n');
}

function getParameterInput(parameter) {
  const { name, defaultValue, range } = parameter;
  const rangeKeys = range && Object.keys(range);
  const nameSlug = name && name.toLowerCase().replace(' ', '-');
  const isSlider = rangeKeys && Number.isInteger(parseInt(range[rangeKeys[0]]));

  // console.log({ range, rangeKeys });

  return isSlider
    ? getParameterSliderInput(nameSlug, defaultValue, rangeKeys)
    : getParameterSelectInput(nameSlug, defaultValue, range, rangeKeys);
}

function getParameterSliderInput(nameSlug, defaultValue, rangeKeys) {
  const rangeMin = rangeKeys[0];
  const rangeMax = rangeKeys.pop();

  // Generate HTML for Slider element.
  return `
    <input name='${nameSlug}' type='range' min='${rangeMin}' max='${rangeMax}' value='${defaultValue}' />
    <output name="display" for="${nameSlug}">${defaultValue}</output> 
    `;
}

function getParameterSelectInput(nameSlug, defaultValue, range, rangeKeys) {
  const values = rangeKeys.map(function (key) {
    const selected = defaultValue == key ? 'selected' : '';

    // Generate HTML for Select options.
    return `
      <option value='${key}' ${selected}>
        ${range[key]}
      </option>
    `;
  });

  // Generate HTML for Select element.
  return `
    <select name='${nameSlug}'>
      ${values}
    </select>
  `;
}

export { renderEditor };