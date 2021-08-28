
import { renderEditor, initEditorEvents } from './patch-editor/index.js';

(function () {
  let midiPatch = {};

  renderEditor();
  initEditorEvents();
})();
