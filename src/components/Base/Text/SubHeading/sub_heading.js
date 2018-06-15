import React, { PureComponent } from 'react';
import { StyledSubHeading } from './sub_heading.styles';

class SubHeading extends PureComponent {

  render() {
    const { children } = this.props;

    return(
      <StyledSubHeading>
        { children }
      </StyledSubHeading>
    );
  }
}

export default SubHeading;
