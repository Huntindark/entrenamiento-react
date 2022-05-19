import React, { useContext } from "react";
import { Formik, Form, useField } from "formik";
import * as Yup from "yup";
import PropTypes from "prop-types";
import { APIContext } from "../../../../../contexts/APIStore";
import { postApi } from "../../../../../api";
import { StyledCreateMember } from "./style";

const MyTextInput = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input>. We can use field meta to show an error
  // message if the field is invalid and it has been touched (i.e. visited)
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

const MySelect = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div>
      <label htmlFor={props.id || props.name}>{label}</label>
      <select {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};

const CreateMember = () => {
  const { state } = useContext(APIContext);

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
          console.log(status);
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

          <MySelect label="role" name="role">
            <option value="">Seleccionar un rol</option>
            {rolesList()}
          </MySelect>

          <button type="submit">Submit</button>
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

export default CreateMember;
