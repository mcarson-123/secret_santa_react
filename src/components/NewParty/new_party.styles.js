import styled from 'styled-components';

import { colors } from '../../Styles/colors'
import { padding } from '../../Styles/padding'

export const StyledInput = styled.input`
  border: 1px solid ${ colors.grey }
  width: 100%
  border-radius: 4px;
`;

export const StyledForm = styled.div`
  padding-top: ${ padding.medium };
  padding-bottom: ${ padding.medium };
`;

export const StyledElement = styled.div`
  padding-top: ${ padding.medium };
`;

export const StyledLabel = styled.label`
  display: block;
  padding-bottom: ${ padding.small };
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
  padding: ${ padding.xsmall };

  ${RadioInput}:checked + & {
    background: ${ colors.grey };
  }
`;

export const StyledRadioInputs = styled.div`
  display: flex;
`;

export const RadioLabel = styled.label`
  width: 60px;

  & + & {
    padding-left: ${padding.medium};
  }
`;
