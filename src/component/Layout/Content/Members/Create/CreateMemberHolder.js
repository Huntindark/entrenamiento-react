import React, { useState } from "react";
import { StyledCreateMemberHolder } from "./style";
import PropTypes from "prop-types";
import CreateMember from ".";
import { StyledP } from "../../../../Styles/StyledP";
import { StyledCreateMember } from "./style";

const StyledResponse = ({ status }) => {
  return (
    <StyledCreateMember>
      <StyledP>La operacion {status == "200" ? "" : "no"} fue exitosa </StyledP>
    </StyledCreateMember>
  );
};

const CreateMemberHolder = ({ modal, close }) => {
  const [sent, setSent] = useState(false);
  const [status, setStatus] = useState(null);

  const handleStatus = (response) => {
    setStatus(response);
  };

  const handleSent = () => {
    setSent(!sent);
  };

  const handleClosure = () => {
    close();
    setSent(false);
    setStatus(null);
  };

  return (
    <StyledCreateMemberHolder modal={modal}>
      <button onClick={() => handleClosure()}>X</button>
      {sent ? (
        <StyledResponse status={status} />
      ) : (
        <CreateMember
          updateStatus={(response) => handleStatus(response)}
          updateSent={() => handleSent()}
        />
      )}
    </StyledCreateMemberHolder>
  );
};

CreateMemberHolder.propTypes = {
  modal: PropTypes.boolean,
  close: PropTypes.func,
};

StyledResponse.propTypes = {
  status: PropTypes.number,
};

export default CreateMemberHolder;
