import { createGlobalStyle } from "styled-components";
import Formula1Regular from "../fonts/Formula1-Regular.ttf";
import Formula1Bold from "../fonts/Formula1-Bold.ttf";

const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: Formula1;
    font-style: normal;
    font-weight: 400;
    src: url(${Formula1Regular});
  }

  @font-face {
    font-family: Formula1;
    font-style: normal;
    font-weight: 800;
    src: url(${Formula1Bold});
  }

    body{
        margin: 0;
        padding: 0;
        background: ${({ theme }) => theme.background};
        color: ${({ theme }) => theme.text};
        font-family: Formula1, Roboto, Open-Sans, Helvetica, Sans-Serif;
        transition: all 0.30s linear;
    }

    *, *:before, *:after {
        box-sizing: border-box;
    }   
`;

export default GlobalStyle;
