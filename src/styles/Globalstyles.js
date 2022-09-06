import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  a {
    text-decoration: none;
    color: inherit;
  }
  * {
    box-sizing: border-box;
    font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue',
      'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji',
      'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif !important;
  }
  body {
    max-width: 1190px;
    width: 100%;
    margin: 0 auto;
  }
`;

export default GlobalStyle;
