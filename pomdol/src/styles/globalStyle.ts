import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
    ${reset}

    @font-face {
      font-family: "Pretendard";
      font-weight: 100 300 500 900;
      font-style: normal;
      font-display: swap;
      src:
        local("Pretendard Variable"),
        url("../../public/fonts/PretendardVariable.woff2") format("woff2-variations");
    }
    html,
    body {
    height: 100%;
    padding: 0;
    margin: 0px auto;
    font-family: Pretendard;
    -webkit-text-size-adjust: none;
    -webkit-user-select: none;
    -webkit-user-drag: none;
    -moz-user-select: none;
    -ms-use-select: none;
    user-select: none;
    }
    a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
    }
    b {
        font-weight: 800;
    }
    i {
        font-style: italic;
    }
    *,
    *:before,
    *:after {
    font-family: Pretendard;
    box-sizing: border-box;
    color: ${({ theme }) => theme.color.text1};
    }
    :focus {
        outline: none;
        border: none;
    }
    ::-webkit-scrollbar {
        width: 10px;
        height: 10px;
        background: #ffffff;
    }
    ::-webkit-scrollbar-thumb {
        border-radius: 4px;
        background-color: #ced4da;
        &:hover {
            background-color: #adb5bd;
        }
    }
    
    button {
        background: none;
        padding: 0;
        border: none;
        cursor: pointer;
    }
`;
