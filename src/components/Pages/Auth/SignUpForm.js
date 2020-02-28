import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";

export default function SignUpForm() {
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
        passwordConfirm: "",
        isAdmin: false,
        orgName: ""
      }}
    ></Formik>
  );
}
