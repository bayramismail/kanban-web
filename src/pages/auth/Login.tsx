import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { LoginModel } from "./models/login.model";
import { LoginValidate } from "./validations/login.validate";
import { useNavigate } from "react-router-dom";

const Login = ({ login = (loginModel: LoginModel) => {} }) => {
  const navigate = useNavigate();
  return (
    <Formik
      initialValues={{} as LoginModel}
      validate={(values) => {
        const errors = {} as LoginValidate;
        if (!values.username) {
          errors.username = "Required";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        login(values);
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
              <button
                className="btn btn-outline-primary"
                type="submit"
                disabled={isSubmitting}
              >
                Submit
              </button>
              <button
                className="btn btn-outline-primary"
                type="button"
                onClick={() => {
                  navigate("/register");
                }}
              >
                Register
              </button>
            </Form>
          </div>
          <div className="col-1"></div>
        </div>
      )}
    </Formik>
  );
};

export default Login;
