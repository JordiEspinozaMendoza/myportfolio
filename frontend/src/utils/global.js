import { createGlobalStyle } from "styled-components";
import { primaryFont } from "./typography";
import { normalize } from "polished";

export const GlobalStyle = createGlobalStyle`
    ${normalize()}
    html{
        box-sizing: border-box;
        font-size: 16px;
        overflow-x: scroll;
    }
    *,*::before,*::after{
        box-sizing: inherit;
    }
    body{
        padding: 0;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        overflow-x: hidden;
    }
    .main {
        margin: 0 auto;
        overflow-x: hidden;
    }
    `;
