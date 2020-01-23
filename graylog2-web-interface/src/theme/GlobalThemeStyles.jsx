import { createGlobalStyle } from 'styled-components';

import { progressBarStyles } from 'components/graylog/ProgressBar.jsx';

import './fonts/fontawesome.css';
import './fonts/opensans.css';

const GlobalThemeStyles = createGlobalStyle`
  ${progressBarStyles};
`;

export default GlobalThemeStyles;
