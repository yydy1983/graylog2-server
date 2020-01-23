import { css } from 'styled-components';

import regular from './opensans-regular.woff';
import bold from './opensans-bold.woff';
import italic from './opensans-italic.woff';
import bolditalic from './opensans-bolditalic.woff';

const fontStyles = css`
  @font-face {
    font-family: 'Open Sans';
    src: url(${regular}) format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Open Sans';
    src: url(${italic}) format('woff');
    font-weight: normal;
    font-style: italic;
  }

  @font-face {
    font-family: 'Open Sans';
    src: url(${bold}) format('woff');
    font-weight: bold;
    font-style: normal;
  }

  @font-face {
    font-family: 'Open Sans';
    src: url(${bolditalic}) format('woff');
    font-weight: bold;
    font-style: italic;
  }
`;

export default fontStyles;
