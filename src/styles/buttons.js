import styled from 'styled-components';

import { buttons, transition } from './mixins';

export const GrayButton = styled.div`
  ${buttons}
  ${transition}
    top: 30px;

  ${({ left }) => (left ? `left: 100px;` : `right: 100px;`)}

  &:hover {
    background-color: ${({ green, red, theme }) => {
      if (red) return theme.red;
      if (green) return theme.green;
      return theme.gray;
    }};
  }

  @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.medium}) {
    ${({ left }) => (left ? `left: 10px;` : `right: 10px;`)}
    top: 20px;
  }
`;

export const LargeButton = styled.div`
  ${buttons}
  ${transition}
    border: 1px solid ${({ theme: { gray } }) => gray};
  font-size: 25px;
  top: 85px;
  right: 10px;
  position: absolute;

  &:hover {
    background-color: ${({ green, theme }) => {
      if (green) return theme.green;
      return theme.blue;
    }};
    border: 1px solid transparent;
  }

  @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.medium}) {
    top: 85px;
    right: 10px;
  }
`;

export const StickyButton = styled.div`
  cursor: pointer;
  position: fixed;
  bottom: 15px;
  right: 75px;
  padding: 10px 20px;
  border-radius: 7px;
  z-index: 0;
  background-color: ${({ theme: { gray } }) => gray};
  ${transition}

  &:hover {
    background-color: ${({ theme: { blue } }) => blue};
  }

  ${({ transparent, theme }) => {
    return (
      transparent &&
      `
            background-color: transparent;
            &:hover {
                background-color: transparent;
                color: ${theme.gray}
            }
        `
    );
  }}

  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.medium}) {
    ${({ show }) => !show && `display: none;`}
  }

  @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.medium}) {
    right: -7px;
  }
`;
