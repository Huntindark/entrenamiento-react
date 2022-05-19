import React, { useContext } from "react";
import { Formik, Form, useField } from "formik";
import * as Yup from "yup";
import PropTypes from "prop-types";
import { APIContext } from "../../../../../contexts/APIStore";
import { postApi } from "../../../../../api";
import {
  StyledCreateMember,
  StyledInput,
  StyledLabel,
  StyledSelect,
  StyledError,
} from "./style";
import FormButton from "../../../../Generic/FormButton";

const MyTextInput = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input>. We can use field meta to show an error
  // message if the field is invalid and it has been touched (i.e. visited)
  const [field, meta] = useField(props);
  return (
    <div>
      <StyledLabel htmlFor={props.id || props.name}>{label}</StyledLabel>
      <StyledInput
        className="text-input"
        error={meta.touched && meta.error}
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <StyledError className="error">{meta.error}</StyledError>
      ) : null}
    </div>
  );
};

const MySelect = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div>
      <StyledLabel htmlFor={props.id || props.name}>{label}</StyledLabel>
      <StyledSelect {...field} {...props} error={meta.touched && meta.error} />
      {meta.touched && meta.error ? (
        <StyledError className="error">{meta.error}</StyledError>
      ) : null}
    </div>
  );
};

const CreateMember = ({ updateStatus, updateSent }) => {
  const { state } = useContext(APIContext);

  const handleResponse = (status) => {
    console.log(status);
    updateSent();
    updateStatus(status);
  };

  const rolesList = () => {
    return state.roles.map((rol, index) => (
      <option value={parseInt(rol.id)} key={index}>
        {rol.label}
      </option>
    ));
  };

  const rolesValidationList = () => {
    return state.roles.map((rol) => rol.id.toString());
  };

  if (!state.roles)
    return (
      <>
        <p>Holis, awanta</p>
      </>
    );
  return (
    <StyledCreateMember>
      <Formik
        initialValues={{
          firstname: "",
          lastname: "",
          role: "", // added for our select
        }}
        validationSchema={Yup.object({
          firstname: Yup.string()
            .max(15, "Dale, de donde sos, mexico?")
            .required("Required"),
          lastname: Yup.string()
            .max(20, "Dale...en serio?")
            .required("Required"),
          role: Yup.string()
            .oneOf(rolesValidationList(), "Rol no valido")
            .required("Required"),
        })}
        onSubmit={async (values) => {
          let status = await postApi({
            path: "members",
            body: JSON.stringify({
              firstname: values.firstname,
              lastname: values.lastname,
              role_id: parseInt(values.role),
            }),
          });
          handleResponse(status);
        }}
      >
        <Form>
          <MyTextInput
            label="Nombre"
            name="firstname"
            type="text"
            placeholder="John"
          />

          <MyTextInput
            label="Apellido"
            name="lastname"
            type="text"
            placeholder="Doe"
          />

          <MySelect label="Rol" name="role">
            <option value="">Seleccionar un rol</option>
            {rolesList()}
          </MySelect>
          <FormButton type="submit">Submit</FormButton>
        </Form>
      </Formik>
    </StyledCreateMember>
  );
};

MyTextInput.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
};

MySelect.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
};

CreateMember.propTypes = {
  close: PropTypes.func,
  updateStatus: PropTypes.func,
  updateSent: PropTypes.func,
};

export default CreateMember;
