import React, { PureComponent } from 'react';
import { map } from 'lodash';

import Label from '../../../Base/Text/Label';

import {
  SingleTextInput,
  StyledTextGroup,
  StyledTextGroupInput,
} from './text_group.styles';

import {
  StyledLabel,
} from '../../../NewParty/new_party.styles.js'

class TextGroup extends PureComponent {

  generateInputs(inputs) {
    return(
      map(inputs, (input) => {
        const { label, name } = input;

        return(
          <SingleTextInput>
            { label && <StyledLabel><Label>{label}</Label></StyledLabel> }
            <StyledTextGroupInput name={name} type='text' />
          </SingleTextInput>
        );
      })
    );
  }

  render() {
    const { inputs } = this.props;

    return(
      <StyledTextGroup>
        { this.generateInputs(inputs) }
      </StyledTextGroup>
    );
  }
}

export default TextGroup;
