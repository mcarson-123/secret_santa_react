import React from 'react';

import { Wrapper, StyledPanel } from './panel.styles';

const Panel = ({ children }) => {

  return(
    <Wrapper>
      <StyledPanel large>
        {children}
      </StyledPanel>
    </Wrapper>
  );
}

export default Panel
