import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createParty } from '../../actions/index';
// import { Field, reduxForm } from 'redux-form'

import Panel from '../Base/Panel';
import Heading from '../Base/Text/Heading';
import SubHeading from '../Base/Text/SubHeading';
import Label from '../Base/Text/Label';
import Body from '../Base/Text/Body';
import RadioGroup from '../Base/Inputs/RadioGroup';
import TextGroup from '../Base/Inputs/TextGroup';

import {
  PanelGroup,
  StyledInput,
  StyledForm,
  StyledElement,
  StyledLabel,
  SubmitButton,
} from './new_party.styles';

class NewParty extends Component {
  constructor(props) {
    super(props)

    this.onGetStartedFormSubmit = this.onGetStartedFormSubmit.bind(this);
  }

  onGetStartedFormSubmit(event) {
    event.preventDefault();

    this.props.createParty();

    const element = document.getElementById('your-info')
    const elementTop = element.getBoundingClientRect().top;
    const windowOffset = window.pageYOffset;
    window.scrollTo({top: elementTop + windowOffset, behavior: "smooth"})
  }

  onEnterInfoFormSubmit(event) {
    event.preventDefault();

    // update party

    const element = document.getElementById('guests')
    const elementTop = element.getBoundingClientRect().top;
    const windowOffset = window.pageYOffset;
    window.scrollTo({top: elementTop + windowOffset, behavior: "smooth"})
  }

  render() {

    return(
      <PanelGroup>
        <Panel>
          <Heading>
            Let's Get Started
          </Heading>
          <SubHeading>
            Enter your party details to share with your guests.
          </SubHeading>
          <StyledForm>
            <form onSubmit={this.onGetStartedFormSubmit}>
              <StyledElement>
                <StyledLabel><Label>Party Name</Label></StyledLabel>
                <StyledInput name='partyName' type='text' />
              </StyledElement>
              <StyledElement>
                <StyledLabel><Label>Party Theme</Label></StyledLabel>
                <StyledInput name='partyTheme' type='text' />
              </StyledElement>
              <StyledElement>
                <StyledLabel><Label>Spending Limit</Label></StyledLabel>
                <RadioGroup
                  radioGroupName='spending_limit'
                  inputs={[
                    { label: '$10', value: '10' },
                    { label: '$20', value: '20' },
                    { label: '$30', value: '30' },
                    { label: '$50', value: '50' },
                    { label: '$100', value: '100' },
                  ]}
                />
              </StyledElement>
              <SubmitButton type='submit'><Body>Next</Body></SubmitButton>
            </form>
          </StyledForm>
        </Panel>
        <div id='your-info'>
          <Panel>
            <Heading>
              Enter Your Information
            </Heading>
            <SubHeading>
              You'll be added as a guest and the party host.
              Once the guest list is made and submitted, you will
              be able to view the pairings if you wish.
            </SubHeading>
            <StyledForm>
              <form onSubmit={this.onEnterInfoFormSubmit}>
                <StyledElement>
                  <TextGroup
                    inputs={[
                      { label: 'name', name: 'name' },
                      { label: 'email', name: 'email' },
                    ]}
                  />
                </StyledElement>
                <SubmitButton type='submit'><Body>Next</Body></SubmitButton>
              </form>
            </StyledForm>
          </Panel>
        </div>
        <Panel>
          <div id='guests'>
            <Heading>
              Who's Invited?
            </Heading>
            <SubHeading>
              Guests will receive an email letting them know who to buy for.
            </SubHeading>
            <StyledForm>
              <form onSubmit={() => {}}>
                <StyledElement>
                  <TextGroup
                    inputs={[
                      { label: 'name', name: 'name' },
                      { label: 'email', name: 'email' },
                    ]}
                  />
                </StyledElement>
                <StyledElement>
                  <TextGroup
                    inputs={[
                      { name: 'name' },
                      { name: 'email' },
                    ]}
                  />
                </StyledElement>
                <StyledElement>
                  <TextGroup
                    inputs={[
                      { name: 'name' },
                      { name: 'email' },
                    ]}
                  />
                </StyledElement>
                <SubmitButton type='submit'><Body>Next</Body></SubmitButton>
              </form>
            </StyledForm>
          </div>
        </Panel>
      </PanelGroup>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ createParty }, dispatch);
}

export default connect(null, mapDispatchToProps)(NewParty);
