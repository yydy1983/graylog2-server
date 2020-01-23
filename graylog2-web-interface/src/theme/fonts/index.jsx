import { css } from 'styled-components';

/*!
 *  Open Sans 1.4.2 by @FontFaceKit - https://github.com/FontFaceKit/open-sans
 *  License - http://www.apache.org/licenses/LICENSE-2.0
 */
import openSansRegular from './opensans-regular.woff';
import openSansBold from './opensans-bold.woff';
import openSansItalic from './opensans-italic.woff';
import openSansBoldItalic from './opensans-bolditalic.woff';

/*!
 *  Font Awesome 4.7.0 by @davegandy - http://fontawesome.io - @fontawesome
 *  License - http://fontawesome.io/license (Font: SIL OFL 1.1, CSS: MIT License)
 */
import fontAwesome from './font-awesome.woff';
import './font-awesome.css';

const fontStyles = css`
  @font-face {
    font-family: 'Open Sans';
    src: url(${openSansRegular}) format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Open Sans';
    src: url(${openSansItalic}) format('woff');
    font-weight: normal;
    font-style: italic;
  }

  @font-face {
    font-family: 'Open Sans';
    src: url(${openSansBold}) format('woff');
    font-weight: bold;
    font-style: normal;
  }

  @font-face {
    font-family: 'Open Sans';
    src: url(${openSansBoldItalic}) format('woff');
    font-weight: bold;
    font-style: italic;
  }

  @font-face {
    font-family: 'FontAwesome';
    src: url(${fontAwesome}) format('woff');
    font-weight: normal;
    font-style: normal;
  }
`;

export default fontStyles;
