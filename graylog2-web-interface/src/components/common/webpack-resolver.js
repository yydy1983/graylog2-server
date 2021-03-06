/* eslint-disable */
const modes = [
  'json',
  'lua',
  'markdown',
  'text',
  'yaml',
];

modes.forEach((mode) => {
  ace.config.setModuleUrl(
    'ace/mode/' + mode, require('file-loader!ace-builds/src-min-noconflict/mode-' + mode + '.js')
  );
});

ace.config.setModuleUrl(
  `ace/mode/pipeline`, require(`file-loader!components/rules/mode-pipeline-hax.js`)
);

const themes = [
  'tomorrow',
  'monokai',
];

themes.forEach((theme) => {
  ace.config.setModuleUrl(
    'ace/theme/' + theme, require('file-loader!ace-builds/src-min-noconflict/theme-' + theme + '.js')
  );
});
