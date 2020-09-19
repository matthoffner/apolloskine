import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export default createGlobalStyle`
    ${reset}

    #root {
        padding: 20px;
    }
    body {
        box-shadow: 10px 20px 20px #999;
        font-family: 'Roboto', sans-serif;
        
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
