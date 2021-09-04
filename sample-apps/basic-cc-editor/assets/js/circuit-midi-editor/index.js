
import { renderEditor, initMidiEvents, initPatchEvents } from './patch-editor/index.js';

const config = {
  selectors: {
    midiConnectionStatus: '#web-midi-connection-status',
    editorWrapper: '#circuit-midi-editor'
  }
};

(function () {
  const { selectors } = config;
  renderEditor(selectors);
  initMidiEvents(selectors);
  initPatchEvents();
})();
