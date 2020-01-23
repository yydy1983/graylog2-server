import { createGlobalStyle } from 'styled-components';

import { progressBarStyles } from 'components/graylog/ProgressBar.jsx';

import fontStyles from './fonts';

const GlobalThemeStyles = createGlobalStyle`
  ${progressBarStyles};
  ${fontStyles};
`;

export default GlobalThemeStyles;
