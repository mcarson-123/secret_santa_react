import React, { PureComponent } from 'react';
import { map } from 'lodash';

import Body from '../../../Base/Text/Body';

import {
  StyledRadioGroup,
  RadioInputLabel,
  RadioInput,
  RadioContents,
} from './radio_group.styles';

class RadioGroup extends PureComponent {

  generateRadioButtons(inputs, groupName) {
    return(
      map(inputs, (input) => {
        const { label, value } = input;
        return(
          <RadioInputLabel>
            <RadioInput type='radio' id={label} name={groupName} value={value} />
            <RadioContents><Body>{label}</Body></RadioContents>
          </RadioInputLabel>
        );
      })
    );
  }

  render() {
    const { inputs, radioGroupName } = this.props;

    return(
      <StyledRadioGroup>
        { this.generateRadioButtons(inputs, radioGroupName) }
      </StyledRadioGroup>
    );
  }
}

export default RadioGroup;
