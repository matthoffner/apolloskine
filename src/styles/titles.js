import styled from 'styled-components';
import { grayBottomLine, grayLeftLine, transition } from './mixins';

export const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 50px;
  ${grayBottomLine}
`;

export const SubTitle = styled.h2`
  font-size: 24px;
  font-weight: 400;
  line-height: 120%;
  margin-bottom: 40px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  ${grayLeftLine}
  ${transition}

    &:hover {
    border-left: 7px solid ${(props) => props.theme.blue};
  }
`;
