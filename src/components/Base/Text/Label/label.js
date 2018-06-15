import React, { PureComponent } from 'react';
import { StyledLabel } from './label.styles';

class Label extends PureComponent {

  render() {
    const { children } = this.props;

    return(
      <StyledLabel>
        { children }
      </StyledLabel>
    );
  }
}

export default Label;
