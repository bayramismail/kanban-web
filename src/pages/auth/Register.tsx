import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { AuthService } from "./services/auth-service";
import { RegisterModel } from "./models/register.model";
import { RegisterValidate } from "./validations/register.validate";

const Register = () => {
  return (
    <Formik
      initialValues={{} as RegisterModel}
      validate={(values) => {
        const errors = {} as RegisterValidate;
        if (!values.username) {
          errors.username = "Required";
        }

        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        console.error(values);
        AuthService.register(values)
          .then((response) => {
            console.error(response.data);
          })
          .catch((error) => {
            console.error(error);
          });
      }}
    >
      {({ isSubmitting }) => (
        <div className="row">
          <div className="col-1"></div>
          <div className="col-10">
            <Form>
              <Field type="text" className="form-control" name="username" />
              <ErrorMessage name="username" component="div" />
              <Field type="password" className="form-control" name="password" />
              <ErrorMessage name="password" component="div" />
              <Field
                type="password"
                className="form-control"
                name="passwordConfirm"
              />
              <ErrorMessage name="passwordConfirm" component="div" />
              <button
                className="btn btn-outline-primary"
                type="submit"
                disabled={isSubmitting}
              >
                Submit
              </button>
            </Form>
          </div>
          <div className="col-1"></div>
        </div>
      )}
    </Formik>
  );
};

export default Register;
