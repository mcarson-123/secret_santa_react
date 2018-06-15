import styled from 'styled-components';

import { colors } from '../../../Styles/colors'
import { padding } from '../../../Styles/padding'

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const StyledPanel = styled.div`
  border: 1px solid ${colors.grey};
  border-radius: 10px;
  width: 600px;

  padding: ${ props => props.large ? padding.large : padding.small }
`;
