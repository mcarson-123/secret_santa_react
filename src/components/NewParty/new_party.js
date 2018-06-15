import React, { Component } from 'react';
// import { Field, reduxForm } from 'redux-form'

import Panel from '../Base/Panel'
import Heading from '../Base/Text/Heading'
import SubHeading from '../Base/Text/SubHeading'
import Label from '../Base/Text/Label'

import { StyledInput, StyledForm } from './new_party.styles';

class NewParty extends Component {

  render() {

    return(
      <Panel>
        <Heading>
          Let's Get Started
        </Heading>
        <SubHeading>
          Enter your party details to share with your guests.
        </SubHeading>
        <StyledForm>
          <form onSubmit={() => {}}>
            <label>
              <Label>Party Name</Label>
            </label>
            <StyledInput name='partyName' type='text' />
          </form>
        </StyledForm>
      </Panel>
    );
  }
}

export default NewParty;
