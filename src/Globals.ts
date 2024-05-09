import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
     }

     html {
        font-size: 62.5%;
     }

    body {
        font-family: "JetBrains Mono", monospace;
        display: flex;
        justify-content: center;
        background: #08070B;
        color: #E6E5EA;
    }
`;
