import React, { useState } from "react";

const InvitedContractsList = props => {
  const [show, setShow] = useState(false);
  const { contracts, roleId } = props;
  const filteredContracts = contracts.filter(c => {
    if (c.roleId === roleId) return c;
  });

  if (show) {
    return (
      <React.Fragment>
        {filteredContracts.map(c => {
          return <p key={c.id}>{c.candidateName}</p>;
        })}
        <button onClick={() => setShow(false)}>Hide</button>
      </React.Fragment>
    );
  }
  return <button onClick={() => setShow(true)}>Invited Candidates</button>;
};

export default InvitedContractsList;
