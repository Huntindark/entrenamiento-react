import styled from "styled-components";
import { Form } from "formik";

export const StyledCreateMember = styled.div`
  margin-left: 37.5vw;
  margin-top: 15vh;
  width: 25vw;
  height: fit-content;
  max-height: 45vh;
  z-index: 2; /* Sit on top */
  border: 1px solid #fff;
  background-color: white;
  background: ${(props) => props.theme.background};
`;

export const StyledCreateMemberHolder = styled.div`
  display: ${(props) =>
    props.modal ? "block" : "none"}; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
`;

export const StyledFormik = styled(Form)``;

export const StyledInput = styled.input`
  width: 98%;
  max-width: 200px;
  display: block;
  margin: 1%;
  margin-left: 79px;
  border: 2px solid ${(props) => (props.error ? "red" : "grey")};
  border-radius: 4px;
  padding: 5px;
`;

export const StyledLabel = styled.label`
  margin-top: 5%;
  margin-left: 105px;
  width: 100%;
  display: block;
  color: ${(props) => props.theme.primary};
`;

export const StyledSelect = styled.select`
  width: 98%;
  max-width: 200px;
  display: block;
  margin: 1%;
  margin-left: 79px;
  border: 2px solid ${(props) => (props.error ? "red" : "grey")};
  border-radius: 4px;
  padding: 5px;
`;

export const StyledError = styled.div`
  margin-left: 79px;
  color: red;
`;
