

function handlePatchChanges(component, parameterName) {
  markControlChange(component, parameterName);
}

function markControlChange(component, parameterName) {
  const control = component.querySelector(`[data-parameter-name='${parameterName}']`);

  if (control) {
    control.classList.add('changed');
  }
}

function isChanged(midiChannel, midiCC) {
  // console.log({ midiPatch, midiChannel, midiCC });
  if (!midiPatch[midiChannels[midiChannel]]
    || (midiPatch[midiChannels[midiChannel]]
      && !midiPatch[midiChannels[midiChannel]][midiCC])) {

    return false;
  }

  return true;
}

export { handlePatchChanges };