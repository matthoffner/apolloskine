import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export default createGlobalStyle`
    ${reset}

    body {
        font-family: 'Roboto', sans-serif;
        margin: 80px 110px;
        box-sizing: border-box;
        color: ${props => props.theme.black}

        @media(max-width: ${props => props.theme.breakpoints.medium}) {
            margin: 70px 20px;
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
