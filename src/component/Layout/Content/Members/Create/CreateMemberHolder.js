import React from "react";
import { StyledCreateMemberHolder } from "./style";
import PropTypes from "prop-types";
import CreateMember from ".";

const CreateMemberHolder = ({ modal, close }) => {
  return (
    <StyledCreateMemberHolder modal={modal}>
      <button onClick={() => close()}>X</button>
      <CreateMember />
    </StyledCreateMemberHolder>
  );
};

CreateMemberHolder.propTypes = {
  modal: PropTypes.boolean,
  close: PropTypes.func,
};

export default CreateMemberHolder;
