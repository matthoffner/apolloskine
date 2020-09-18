import styled, { css } from 'styled-components';

export const boxShadow = css`
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
`;

export const grayBottomLine = css`
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    padding-bottom: 8px;
`;

export const grayLeftLine = css`
    border-left: 7px solid rgba(0, 0, 0, 0.1);
    padding-left: 10px;
`;

export const buttons = css`
    font-size: 18px;
    color: ${props => props.theme.gray};
    cursor: pointer;
    position: absolute;
    border-radius: 3px;
    padding: 5px 10px;

    &:hover {
        color: ${props => props.theme.white};
        background-color: ${props => props.theme.gray};
    }
`;

export const transition = css`
    transition: all 0.3s ease-in-out;
`;

export const Image = styled.img`
    display: block;
    margin: 0 auto;
    width: 50%;
    max-width: 600px;

    @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.medium}) {
        width: 80%;
    }
`;
