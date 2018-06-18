import React, { PureComponent } from 'react';
import { StyledBody } from './body.styles';

class Body extends PureComponent {

  render() {
    const { children } = this.props;

    return(
      <StyledBody>
        { children }
      </StyledBody>
    );
  }
}

export default Body;
