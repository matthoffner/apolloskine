import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export default createGlobalStyle`
    ${reset}

    #root {
        padding: 20px;
    }
    html {
        background-color: green;
        background: url(https://i.stack.imgur.com/yJedC.jpg)
    }
    body {
        box-shadow: 10px 20px 20px #333;
        font-family: 'Roboto', sans-serif;
        background-color: rgba(255, 255, 255, 0.15);
        backdrop-filter: blur(10px);
        box-sizing: border-box;
        color: ${(props) => props.theme.black}
        @media(max-width: ${(props) => props.theme.breakpoints.medium}) {
            margin: 70px 20px;
            margin-left: 0px;
            margin-right: 0px;
        }
    }

    a {
        text-decoration: inherit;
        color: inherit;
    }

    input,
    textarea {
        color: white;
        appearance: none;
        border: none;
        background-color: transparent;
        resize: none;

        &:focus,
        &:active{
            outline: none;
        }

        &::placeholder {
            color: ${({ theme: { white } }) => white};
        }
    }

    * {
        box-sizing: inherit;
    }
`;
