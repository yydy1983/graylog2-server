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

  .btn:focus {
    background-position: 0;
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

  #create-extractor {
    margin-top: 10px;
  }

  .xtrc-converter-subfields {
    margin-left: 20px;
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

  .subsystems {
    margin-top: 10px;
    margin-left: 10px;
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

  .tooltip .tooltip-inner {
    max-width: 300px;
  }

  .tooltip .tooltip-inner .datapoint-info {
    text-align: left;
  }

  .tooltip .tooltip-inner .datapoint-info .date {
    color: #E3E5E5;
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

  .shards {
    margin: 0;
    padding: 0;
    margin-top: 5px;
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

  .form-inline label {
    margin-right: 10px;
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

  table th.actions,
  table td.actions {
    width: 110px;
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

  div.row-sm {
    margin-bottom: 5px;
  }

  .progress-bar {
    max-width: 100%;
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

  .dropdown-header {
    text-transform: uppercase;
    padding: 0 15px !important;
    font-weight: bold;
  }
`;

export default globalStyles;
