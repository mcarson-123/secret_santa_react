import React, { Component } from 'react';
// import { Field, reduxForm } from 'redux-form'

import Panel from '../Base/Panel'
import Heading from '../Base/Text/Heading'
import SubHeading from '../Base/Text/SubHeading'
import Label from '../Base/Text/Label'
import Body from '../Base/Text/Body'

import {
  StyledInput,
  StyledForm,
  StyledElement,
  StyledLabel,
  RadioInput,
  RadioContents,
  StyledRadioInputs,
  RadioLabel,
} from './new_party.styles';

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
            <StyledElement>
              <StyledLabel>
                <Label>Party Name</Label>
              </StyledLabel>
              <StyledInput name='partyName' type='text' />
            </StyledElement>
            <StyledElement>
              <StyledLabel>
                <Label>Party Theme</Label>
              </StyledLabel>
              <StyledInput name='partyTheme' type='text' />
            </StyledElement>
            <StyledElement>
              <StyledLabel>
                <Label>Spending Limit</Label>
              </StyledLabel>
              <StyledRadioInputs>
                <RadioLabel>
                  <RadioInput type='radio' id='10' name='spending_limit' value='10' />
                  <RadioContents>
                    <Body>$10</Body>
                  </RadioContents>
                </RadioLabel>
                <RadioLabel>
                  <RadioInput type='radio' id='20' name='spending_limit' value='20' />
                  <RadioContents>
                    <Body>$20</Body>
                  </RadioContents>
                </RadioLabel>
                <RadioLabel>
                  <RadioInput type='radio' id='30' name='spending_limit' value='30' />
                  <RadioContents>
                    <Body>$30</Body>
                  </RadioContents>
                </RadioLabel>
                <RadioLabel>
                  <RadioInput type='radio' id='50' name='spending_limit' value='50' />
                  <RadioContents>
                    <Body>$50</Body>
                  </RadioContents>
                </RadioLabel>
                <RadioLabel>
                  <RadioInput type='radio' id='100' name='spending_limit' value='100' />
                  <RadioContents>
                    <Body>$100</Body>
                  </RadioContents>
                </RadioLabel>
              </StyledRadioInputs>
            </StyledElement>
          </form>
        </StyledForm>
      </Panel>
    );
  }
}

export default NewParty;
