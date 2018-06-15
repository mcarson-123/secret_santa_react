import React from 'react'

import NewParty from "../NewParty"

const Welcome = () => {
  return(
    <div className="foo">
      Happy Holidays!
      <div>
        <NewParty />
      </div>
    </div>
  );
};

export default Welcome

// <Link to="/new_party">
//           Host a new party
//         </Link>
