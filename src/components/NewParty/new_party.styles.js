import styled from 'styled-components';

import { colors } from '../../Styles/colors'
import { padding } from '../../Styles/padding'

export const StyledInput = styled.input`
  border: 1px solid ${ colors.grey }
  width: 100%
  border-radius: 2px;
`;

export const StyledForm = styled.div`
  padding-bottom: ${ padding.medium };
`;
