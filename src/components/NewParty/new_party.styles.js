import styled from 'styled-components';

import { colors } from '../../Styles/colors'
import { spacing } from '../../Styles/spacing'


export const PanelGroup = styled.div`
  > *:not(:first-child) {
    padding-top: 20px;
  }
`;

export const StyledInput = styled.input`
  border: 1px solid ${ colors.grey }
  width: 100%
  height: 24px;
  border-radius: 4px;
  font-size: 14px;
`;

export const StyledForm = styled.div`
  padding-top: ${ spacing.medium };
  padding-bottom: ${ spacing.medium };
`;

export const StyledElement = styled.div`
  padding-top: ${ spacing.medium };
`;

export const StyledLabel = styled.label`
  display: block;
  padding-bottom: ${ spacing.small };
`;

export const SubmitButton = styled.button`
  margin-top: ${ spacing.large };
  float: right;
  padding: ${ spacing.small };
  width: 100px;
  border: 1px solid ${ colors.grey }
  border-radius: 4px;
  background-color: ${ colors.lightLightGrey }
`;
