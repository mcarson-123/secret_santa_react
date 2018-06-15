import React, { PureComponent } from 'react';
import { StyledHeading } from './heading.styles';

class Heading extends PureComponent {

  render() {
    const { children } = this.props;

    return(
      <StyledHeading>
        { children }
      </StyledHeading>
    );
  }
}

export default Heading;
