import { sendPasswordResetEmail } from "firebase/auth";
import React from "react";
import { useState } from "react";
import { auth } from "../../utils/firebase";
import { useFormik } from "formik";
import { toast } from "react-toastify";

export default function ResetPassword() {
  const validate = (values) => {
    const errors = {};

    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
      toast.error('Invalid email address')
    }
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validate,
    onSubmit: (values) => {
      sendPasswordEmail();
    },
  });

  const sendPasswordEmail = () => {
    sendPasswordResetEmail(auth, formik.values.email)
      .then(() => {
        toast.success("Message send this email address");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <main style={{ paddingTop: 90 }}>
      <div className="mb-4 pb-4" />
      <section className="login-register container">
        <h2 className="section-title text-center fs-3 mb-xl-5">
          Reset Your Password
        </h2>
        <p>We will send you an email to reset your password</p>
        <div className="reset-form">
          <form
            name="reset-form"
            className="needs-validation"
            onSubmit={formik.handleSubmit}
          >
            <div className="form-floating mb-3">
              <input
                name="email"
                type="email"
                className="form-control form-control_gray"
                id="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                placeholder="Email address *"
                required
              />
              <label htmlFor="customerNameEmailInput">Email address *</label>
            </div>
            <button
              className="btn btn-primary w-100 text-uppercase"
              type="submit"
            >
              Submit
            </button>
            <div className="customer-option mt-4 text-center">
              <span className="text-secondary">Back to</span>
              <a className="btn-text js-show-register">Login</a>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
