import { css } from 'styled-components';

const globalStyles = css`
  #editor {
    height: 256px;
  }

  body {
    background-color: #e3e3e3;
    font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 12px;
    overflow-x: hidden;
    margin-top: 50px;
    min-height: calc(100vh - 50px);
  }

  ul {
    list-style-type: none;
    margin: 0;
  }

  ul.no-padding {
    padding: 0;
  }

  hr {
    border-top: 1px solid #e3e3e3;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: normal;
    padding: 0;
    margin: 0;
    color: #333
  }

  h1 {
    font-size: 28px;
  }

  h2 {
    font-size: 21px;
  }

  h3 {
    font-size: 18px;
  }

  h4 {
    font-size: 14px;
    font-weight: normal;
  }

  a {
    color: #16ace3;
  }

  /* Remove boostrap outline */
  a:active,
  select:active,
  input[type="file"]:active,
  input[type="radio"]:active,
  input[type="checkbox"]:active,
  .btn:active {
    outline: none;
    outline-offset: 0;
  }

  input.form-control,
  select.form-control,
  textarea.form-control {
    color: #666;
    font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;

    &:hover {
      border-color: hsl(0,0%,70%)
    }
  }

  label {
    font-size: 14px;
  }

  legend small {
    color: #aaa;
    margin-left: 5px;
  }

  .input-group-addon.input-group-separator {
    border-right-width: 0;
    border-left-width: 0;
  }

  .btn:focus {
    background-position: 0;
  }

  .navbar-brand {
    padding: 12px 15px 0 15px;
  }

  .content {
    padding-top: 15px;
    padding-bottom: 15px;
    background-color: #fff;
    border: 1px solid #D1D1D1;
    margin-bottom: 10px;

    p.description-tooltips {
      margin-top: 10px;
    }

    p.description {
      margin-top: 3px;
      color: #939393;
    }

    p.description-tooltips-small .fa-stack {
      margin-right: 1px;
      position: relative;
      top: -1px;
    }
  }

  .content-head {
    padding-bottom: 0px;

    p {
      margin-top: 15px;
    }

    .actions-lg {
      float: right;
    }

    .actions-sm {
      padding-bottom: 15px;
    }

    .description-tooltips .fa-stack {
      margin-right: 3px;
    }
  }

  .actions-lg .actions-container {
    height: 60px;
    margin-top: 10px;
    padding-left: 50px;
  }

  #main-row {
    margin-bottom: 0px;
  }

  .notifications-none {
    margin-top: 10px;
  }

  .row {
    margin-bottom: 15px;
  }

  .no-bm {
    margin-bottom: 0px;
  }

  .alert {
    margin-bottom: 0px;
    margin-top: 5px;
  }

  .xtrc-new-example {
    margin-bottom: 5px;
    font-family: monospace;
    font-size: 14px;
    white-space: pre-wrap;
    word-wrap: break-word;
  }

  .xtrc-no-example {
    margin-top: 15px;
    margin-bottom: 12px;
  }

  .xtrc-hl {
    background-color: #f8b9b7;
    padding-top: 3px;
    padding-bottom: 3px;
  }

  #create-extractor {
    margin-top: 10px;
  }

  .xtrc-converter-subfields {
    margin-left: 20px;
  }

  .xtrc-list-container {
    margin-top: 15px;
  }

  .xtrc-list-container h2 {
    margin-bottom: 5px;
  }

  .xtrc-list-container .alert {
    margin-top: 5px;
  }

  .xtrc-list-drag {
    margin-top: 10px;
  }

  .u-light {
    border-bottom: 1px dotted #bbb;
    margin-bottom: 5px;
    padding-bottom: 5px;
  }

  .timerange-selector select {
    margin-bottom: 0;
  }

  .timerange-chooser {
    float: left;
    margin-right: 5px;
  }

  .timerange-chooser .btn {
    padding: 6px 7px;
    line-height: 15px;
    font-size: 12px;
  }

  .timerange-chooser .btn .caret {
    margin-left: 1px;
  }

  .timerange-chooser .selected a {
    font-weight: bold;
  }

  .master-node {
    color: #f89406;
  }

  .loglevel-metrics-row {
    margin-top: 2px;
    margin-left: 10px;
  }

  .loglevel-metrics dl {
    margin-bottom: 5px;
    margin-top: 5px;
  }

  .loglevel-metrics dt {
    float: left;
    margin-right: 5px;
  }

  .subsystems {
    margin-top: 10px;
    margin-left: 10px;
  }

  .subsystems-row {
    margin-bottom: 10px;
  }

  .metrics-filter {
    margin-bottom: 15px !important;
  }

  dl.metric-def dt {
    float: left;
  }

  dl.metric-timer dd {
    margin-left: 125px;
  }

  dl.metric-meter dd {
    margin-left: 95px;
  }

  dl.metric-gauge dd {
    margin-left: 80px;
  }

  dl.metric-counter dd {
    margin-left: 80px;
  }

  dl.metric-histogram dd {
    margin-left: 125px;
  }

  #user-list th.user-type {
    width: 50px;
  }

  td.centered {
    text-align: center;
  }

  td.limited {
    max-width: 180px;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .dashboard {
    color: #333333;
    margin: 0;
    width: 100%;
  }

  .dashboard .widget {
    height: inherit;
    margin: 0;
    padding: 20px;
    display: grid;
    grid-template-rows: max-content minmax(10px, 1fr);
  }

  .dashboard .widget .widget-top {
    position: relative;
    margin-bottom: -15px;
    top: -5px;
    font-size: 11px;
    line-height: 11px;
  }

  .dashboard .widget .controls {
    position: relative;
    left: -3px;
  }

  .dashboard .widget .reloading {
    margin-right: 2px;
    font-weight: bold;
    color: #0085A7;
    display: none;
  }

  .dashboard .widget .loading-failed {
    color: #ff4646 !important;
  }

  .dashboard .widget .controls {
    display: none;
  }

  .tooltip .tooltip-inner {
    max-width: 300px;
  }

  .tooltip .tooltip-inner .datapoint-info {
    text-align: left;
  }

  .tooltip .tooltip-inner .datapoint-info .date {
    color: #E3E5E5;
  }

  .dashboard .widget .dc-chart {
    float: none;
  }

  .dashboard .widget .widget-title {
    font-size: 18px;
    height: 25px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .dashboard .widget .load-error {
    color: #FF3B00;
    margin-right: 5px;
  }

  .dashboard .widget .widget-update-info {
    text-align: left;
    float: left;
    font-size: 11px;
    position: absolute;
    bottom: 10px;
    width: 130px;
  }

  .dashboard .widget .configuration dt {
    text-transform: capitalize;
  }

  .dashboard .widget svg {
    overflow: hidden;
  }

  .dashboard .widget .graph.scatterplot path.line {
    display: none;
  }

  .dashboard .widget .actions {
    position: absolute;
    right: 15px;
    bottom: 10px;
  }

  .dashboard .widget .actions div {
    display: inline-block;
    margin-left: 5px;
  }

  .dashboard .widget .actions button {
    padding: 0 5px 0 5px;
  }

  .dashboard .widget .not-available {
    font-size: 70px;
  }

  .dashboard .widget .loading,
  .dashboard .widget .not-available {
    line-height: 100px;
    text-align: center;
  }

  .dashboard .widget .loading .spinner,
  .dashboard .widget .not-available .spinner {
    vertical-align: middle;
  }

  .configuration-field-optional {
    margin-left: 5px;
    font-size: 11px;
  }

  .index-description {
    margin-bottom: 7px;
  }

  .index-description .index-info {
    margin-top: 5px;
  }

  .index-description .index-info dl {
    margin-top: 5px;
  }

  .index-label {
    vertical-align: text-top;
  }

  .index-label .label {
    margin-right: 5px;
  }

  .index-more-actions {
    font-size: 90%;
    margin-left: 5px;
  }

  .shard-meters {
    margin-top: 10px;
  }

  .shard-meters dl {
    margin-bottom: 0px;
    margin-top: 0px;
  }

  .shard-meters dl dt {
    float: left;
  }

  .shard-meters dl dd {
    margin-left: 65px;
  }

  .shards {
    margin: 0;
    padding: 0;
    margin-top: 5px;
  }

  .shard-routing .shards .shard {
    padding: 10px;
    margin: 5px;
    width: 50px;
    float: left;
    text-align: center;
  }

  .shard-routing .shards .shard-started {
    background-color: #dff0d8;
  }

  .shard-routing .shards .shard-relocating {
    background-color: #de9df4;
  }

  .shard-routing .shards .shard-initializing {
    background-color: #f4ddbc;
  }

  .shard-routing .shards .shard-unassigned {
    background-color: #c3c3c3;
  }

  .shard-routing .shards .shard-primary .id {
    font-weight: bold;
    margin-bottom: 3px;
    border-bottom: 1px solid #000;
  }

  .shard-routing .description {
    font-size: 11px;
    margin-top: 2px;
    margin-left: 6px;
  }

  .node-buffer-usage {
    margin-top: 10px;
    margin-bottom: 7px;
  }

  .node-buffer-usage .progress-bar, .journal-details-usage .progress-bar {
    text-shadow: 0 1px 2px rgba(0,0,0,0.4), 2px -1px 3px rgba(255,255,255,0.5);

    span {
      margin-left: 1px;
    }
  }

  .system-system dt {
    float: left;
  }

  .system-system dd {
    margin-left: 75px;
  }

  dl.system-journal {
    margin-top: 5px;
    margin-bottom: 0px;
  }

  .system-journal dt {
    float: left;
  }

  .system-journal dd {
    margin-left: 120px;
  }

  dl.system-dl {
    margin: 0;
  }

  .system-dl dt {
    float: left;
    clear: left;
  }

  .system-dl dd {
    margin-left: 180px;
  }

  .system-rest dt {
    float: left;
  }

  .system-rest dd {
    margin-left: 120px;
  }

  .search-help {
    margin: 0 5px;
    line-height: 34px;
  }

  .alerts {
    margin-top: 15px;
  }

  .alerts tbody {
    border: none;
  }

  .alerts th {
    background-color: #333;
    color: #fff;
    font-weight: normal;
  }

  .alerts th a {
    display: block;
  }

  .alerts th a:focus {
    color: #fff;
  }

  .alert-condition .in-grace {
    color: #8c8e86;
  }

  .alert-conditions hr {
    margin-top: 7px;
    margin-bottom: 7px;
  }

  .result-highlight-colored {
    background-color: #ffec3d;
  }

  .node-state {
    cursor: help
  }

  .annotation .content {
    margin-bottom: 10px;
    cursor: auto !important;
  }

  .well.configuration-well {
    margin-top: 5px;
    margin-bottom: 0;
    padding: 9px;
    font-family: monospace;
    word-wrap: break-word;
  }

  .well.configuration-well > ul {
    padding: 0;
    margin: 0;
  }

  .well.react-configuration-well {
    white-space: pre-line;
  }

  .well.configuration-well .configuration-section {
    margin-bottom: 10px;
  }

  .well.configuration-well li:not(:last-child) {
    margin-bottom: 5px;
  }

  .well.configuration-well .key {
    display: inline;
  }

  .alert-callback .well.configuration-well .key {
    display: inline-block;
    min-width: 140px;
    vertical-align: top;
  }

  .well.configuration-well .value {
    display: inline;
  }

  .alert-callback .well.configuration-well .value {
    display: inline-block;
  }

  .card {
    padding: 12px 20px;
    font-size: 15px;
    font-weight: 300;
    background-color: #fafafa;
    border: 1px solid #ececec;
    border-radius: 2px;
    margin: 10px;
  }

  .card h1 {
    margin-bottom: 5px;
    font-size: 28px;
    line-height: 1;
    letter-spacing: -1;
  }

  .card label {
    font-weight: inherit;
  }

  .card div {
    margin-left: 0;
  }

  .card ul li {
    margin-bottom: 5px;
  }

  .card.info p {
    margin: 0;
  }

  .card .configuration-bundles .bundle-preview {
    border: 1px solid #ececec;
    border-radius: 2px;
    background-color: #ffffff;
    padding: 20px;
  }

  .card .configuration-bundles .bundle-preview pre {
    background-color: #f5f5f5;
  }

  .bundle-preview ul, .bundle-preview ol {
    margin: 0px 0px 10px 25px;
  }

  .bundle-preview ul {
    list-style-type: circle;
  }

  .build-content-pack button.select-all {
    margin-top: 7px;
    padding: 0;
  }

  #react-configuration-bundles {
    font-size: 14px;
    font-weight: normal;
    line-height: 20px;
    margin-top: 15px;
  }

  .form-inline label {
    margin-right: 10px;
  }

  .form-horizontal .help-block.help-standalone {
    line-height: 20px;
    margin-top: 7px;
  }

  .form-horizontal.pull-left label.control-label {
    width: auto;
  }

  .form-horizontal.pull-left div.controls {
    display: inline-block;
    float: right;
    margin-left: 20px;
  }

  .form-horizontal .control-group .controls .checkbox-control:first-child {
    padding-top: 5px;
  }

  .form-horizontal .control-group .controls .checkbox-control label.checkbox {
    display: inline-block;
  }

  .form-horizontal .control-group .controls .checkbox-control span.help-inline {
    vertical-align: top;
  }

  form.extractor-form .control-group label {
    display: inline-block;
  }

  table th.actions, table td.actions {
    width: 110px;
  }

  #grok-pattern-list th.name {
    min-width: 200px;
  }

  #grok-pattern-list td {
    word-break: break-all;
  }

  .btn-text {
    font-family: 'Open Sans', sans-serif;
    font-size: 12px;
    padding: 0;
    vertical-align: baseline;
  }

  .message-loader-form input {
    margin-right: 5px;
  }

  ul.streams {
    padding: 0;
    margin: 0;
  }

  ul.streams li.stream {
    display: block;
    padding: 15px 0px;
  }

  ul.streams li.stream:not(:last-child) {
    border-bottom: 1px solid #6dcff6;
  }

  ul.streams li.stream .stream-data {
    margin-top: 8px;
  }

  ul.streams li.stream .stream-data .stream-actions {
    position: relative;
    float: right;
    right: 0px;
    bottom: 20px;
  }

  ul.streams li.stream .stream-data .stream-actions form.action-form {
    display: inline-block;
  }

  ul.streams li.stream .stream-data .stream-actions .btn-delete {
    margin-left: 15px;
    margin-right: 15px;
  }

  ul.streams li.stream .stream-data .stream-actions .btn-delete.last {
    margin-right: 0;
  }

  ul.streams li.stream .stream-description {
    margin-bottom: 3px;
  }

  ul.streams li.stream .streamrules-details {
    margin-top: 15px;
  }

  ul.entity-list {
    padding: 0;
    margin: 0;

    li.entity-list-item {
      display: block;
      padding: 15px 0px;

      h2 .label {
        margin-left: 5px;
        line-height: 2;
        vertical-align: bottom;
      }

      .item-description {
        min-height: 17px;
        margin: 5px 0;
      }

      .item-actions > .btn, .item-actions > .btn-group, .item-actions > span > .btn {
        margin-left: 5px;
        margin-bottom: 5px;
      }
    }

    li.entity-list-item:not(:last-child) {
      border-bottom: 1px solid #6dcff6;
    }
  }

  .breadcrumb {
    margin-bottom: 10px !important;
    margin-left: -15px;
    margin-right: -15px;
  }

  .graylog-node {
    margin-top: 15px;
  }

  .graylog-node-title {
    margin-top: 8px;
  }

  dl.graylog-node-state {
    margin-top: 0;
    margin-bottom: 0;
  }

  dl.graylog-node-state dt {
    float: left;
  }

  dl.graylog-node-state dd {
    margin-left: 180px;
  }

  .graylog-node .graylog-node-heap {
    margin-top: 10px;
  }

  .graylog-node .graylog-node-heap .progress {
    height: 25px;
    margin-bottom: 5px;
  }

  span.blob {
    display: inline-block;
    width: 9px;
    height: 9px;
    margin-left: 2px;
  }

  dl.message-details {
    margin-top: 10px;
    margin-bottom: 0;
  }

  dl.message-details dt {
    font-weight: bold;
    margin-left: 1px;
  }

  dl.message-details dd {
    margin-bottom: 5px;
    padding-bottom: 5px;
    margin-left: 1px; /* Ensures that italic text is not cut */
  }

  dl.message-details dd.stream-list ul {
    list-style-type: disc;
    padding-left: 25px;
  }

  dl.message-details dd.stream-list ul li {
    margin-top: 3px;
  }

  dl.message-details dd div.message-field-actions {
    padding-left: 10px;
    position: relative;
    top: -10px;
  }

  dl.message-details-fields span:not(:last-child) dd {
    border-bottom: 1px solid #ececec;
  }

  dl.message-details-fields dd {
    white-space: pre-wrap;
  }

  dl.message-details-fields .field-value {
    font-family: monospace;
  }

  dl.message-details-fields dd.message-field .field-value {
    max-height: 500px;
    overflow: auto;
  }

  nav.navbar-fixed-top ul.dropdown-menu li a {
    font-size: 12px;
  }

  nav.navbar-fixed-top ul.dropdown-menu {
    padding-top: 10px;
    padding-bottom: 10px;
  }

  nav.navbar-fixed-top ul.dropdown-menu li {
    padding: 2px 2px 2px 0;
  }

  nav.navbar-fixed-top ul.dropdown-menu li.divider {
    padding: 0;
  }

  div.row-sm {
    margin-bottom: 5px;
  }

  .graylog-node-heap .progress,
  .node-buffer-usage .progress,
  .journal-details-usage .progress {
    margin-bottom: 5px;
  }

  .journal-details-usage .progress {
    margin-top: 10px;
  }

  .journal-details-usage .progress .progress-bar {
    min-width: 3em;
  }

  .progress-bar {
    max-width: 100%;
  }

  .graylog-node-heap p {
    margin-bottom: 0px;
  }

  .graylog-node-heap .used-memory {
    background-color: #9e1f63;
  }

  .graylog-node-heap .committed-memory {
    background-color: #f7941e;
  }

  .graylog-node-heap .max-memory {
    background-color: #f5f5f5;
  }

  dl.system-system, dl.system-rest {
    margin-top: 5px;
    margin-bottom: 0px;
  }

  .table-sm {
    margin-bottom: 0px;
  }

  .graylog-input {
    margin-top: 15px;
    border-bottom: 1px
  }

  .graylog-input-metrics {
    margin-top: 5px;
  }

  .filter .form-inline .form-group {
    display: inline-block;
    margin-bottom: 0;
    vertical-align: middle;
  }

  div.alert-callback hr {
    margin-top: 10px;
    margin-bottom: 10px;
  }

  div.alert-callbacks {
    margin-top: 10px;
  }

  .alarm-callbacks {
    padding: 0;
  }

  .alarm-callbacks li:not(:last-child) {
    margin-bottom: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid #ececec;
  }

  /* // Ensure that the stream start/pause buttons have the same size. */
  .toggle-stream-button {
    width: 8.5em;
  }

  .threaddump {
    font-size: 11px;
  }

  .stream-description .fa-cube {
    margin-right: 5px;
  }

  .content-head .btn-lg {
    font-size: 16px;
  }

  .stream-loader {
    margin-top: 5px;
  }

  .form-inline .typeahead-wrapper {
    display: inline-block;
    vertical-align: middle;
    width: auto;
  }

  .form-group-inline {
    display: inline-block;
    margin: 0;
  }

  .save-button-margin {
    margin-right: 5px;
  }

  .form-control.message-id-input {
    width: 300px;
  }

  .dropdown-header {
    text-transform: uppercase;
    padding: 0 15px !important;
    font-weight: bold;
  }
`;

export default globalStyles;
