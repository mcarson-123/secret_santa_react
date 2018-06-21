import styled from 'styled-components';

import { colors } from '../../../../Styles/colors'
import { spacing } from '../../../../Styles/spacing'

export const StyledRadioGroup = styled.div`
  display: flex;
`;

export const RadioInputLabel = styled.label`
  width: 60px;

  & + & {
    padding-left: ${spacing.medium};
  }
`;

export const RadioInput = styled.input`
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0;
  display: none;
`;

export const RadioContents = styled.div`
  border: 1px solid ${ colors.grey }
  border-radius: 4px;

  text-align: center;
  padding: ${ spacing.xsmall };

  ${RadioInput}:checked + & {
    background: ${ colors.grey };
  }
`;
