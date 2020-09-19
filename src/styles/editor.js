import TextareaAutosize from 'react-textarea-autosize';
import styled from 'styled-components';
import { grayLeftLine, transition } from '../styles/mixins';

export const EditorContainer = styled.div`
  max-width: ${({ theme: { breakpoints } }) => breakpoints.wide};
  margin: 0 auto;
`;

export const TitleInput = styled.input`
  ${grayLeftLine}
  ${transition}
    font-size: 24px;
  font-weight: 600;
  width: 100%;
  outline: none;
  padding-left: 20px;
  margin-bottom: 40px;
  display: inline;

  &::placeholder {
    font-weight: 600;
  }

  &:focus {
    border-left: 7px solid ${({ theme: { blue } }) => blue};
  }
`;

export const ContentContainer = styled.div`
  display: flex;

  @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.medium}) {
    display: block;
  }
`;

export const ContentInput = styled(TextareaAutosize)`
  width: 50%;
  font-size: 20px;
  overflow-y: hidden;

  @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.medium}) {
    width: 100%;
    ${({ show }) => (show ? `display: block;` : `display: none;`)};
  }
`;
