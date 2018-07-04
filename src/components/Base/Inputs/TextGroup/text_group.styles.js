import styled from 'styled-components';

import { colors } from '../../../../Styles/colors'
import { spacing } from '../../../../Styles/spacing'

export const SingleTextInput = styled.div`
  flex: 1 1 auto;
`;

export const StyledTextGroupInput = styled.input`
  border: 1px solid ${ colors.grey }
  width: 100%
  height: 22px;
  border-radius: 4px;
`;

export const StyledTextGroup = styled.div`
  display: flex;

  > *:first-child ${StyledTextGroupInput} {
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  > *:last-child ${StyledTextGroupInput} {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }
`;

