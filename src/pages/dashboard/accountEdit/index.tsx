import { useFormik } from "formik";
import { auth, db } from "../../../utils/firebase.ts";
import { toast } from "react-toastify";
import * as Yup from "yup";
import {  updatePassword } from "firebase/auth";
import { doc, updateDoc } from "firebase/firestore";
import { useAppSelector } from "../../../redux/store.ts";
import { userSelector } from "../../../redux/lib/userInfo.ts";

export default function AccountEdit() {
  const user = auth.currentUser;
  const userId = useAppSelector(userSelector).userDetails.id;

  const schema = Yup.object({
    newPass: Yup.string().required(),
    confirmNewPass: Yup.string().required(),
  });

  const formik = useFormik({
    initialValues: {
      newPass: "",
      confirmNewPass: "",
    },
    validationSchema: schema,
    onSubmit: () => {
      changePassword();
      updateUser()
    },
  });

  const updateUser = async () => {
    try {
      await updateDoc(doc(db, "users", userId), {
        password: formik.values.newPass,
      });
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const changePassword = () => {
    if (formik.values.newPass === formik.values.confirmNewPass) {
      if(user){
        updatePassword(user, formik.values.newPass)
          .then(() => {
            toast.success("Password Changed Successfully!");
          })
          .catch((error) => {
            console.log(error);
          });
      }
    } else {
      toast.error("Confirm Password Correctly");
    }
  };

  return (
    <>
      <div className="col-lg-9">
        <div className="page-content my-account__edit">
          <div className="my-account__edit-form">
            <form
              name="account_edit_form"
              className="needs-validation"
              onSubmit={formik.handleSubmit}
            >
              <div className="row">
                {/* <div className="col-md-6">
                  <div className="form-floating my-3">
                    <input
                      type="text"
                      className="form-control"
                      id="account_first_name"
                      placeholder="First Name"
                      required=""
                    />
                    <label htmlFor="account_first_name">First Name</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating my-3">
                    <input
                      type="text"
                      className="form-control"
                      id="account_last_name"
                      placeholder="Last Name"
                      required=""
                    />
                    <label htmlFor="account_last_name">Last Name</label>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-floating my-3">
                    <input
                      type="text"
                      className="form-control"
                      id="account_display_name"
                      placeholder="Display Name"
                      required=""
                    />
                    <label htmlFor="account_display_name">Display Name</label>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-floating my-3">
                    <input
                      type="email"
                      className="form-control"
                      id="account_email"
                      placeholder="Email Address"
                      required=""
                    />
                    <label htmlFor="account_email">Email Address</label>
                  </div>
                </div> */}
                <div className="col-md-12">
                  <div className="my-3">
                    <h5 className="text-uppercase mb-0">Password Change</h5>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-floating my-3">
                    <input
                      type="password"
                      className="form-control"
                      id="newPass"
                      name="newPass"
                      placeholder="New password"
                      value={formik.values.newPass}
                      onChange={formik.handleChange}
                    />
                    <label htmlFor="account_new_password">New password</label>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-floating my-3">
                    <input
                      type="password"
                      className="form-control"
                      data-cf-pwd="#account_new_password"
                      id="confirmNewPass"
                      name="confirmNewPass"
                      value={formik.values.confirmNewPass}
                      onChange={formik.handleChange}
                      placeholder="Confirm new password"
                    />
                    <label htmlFor="account_confirm_password">
                      Confirm new password
                    </label>
                    <div className="invalid-feedback">
                      Passwords did not match!
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="my-3">
                    <button className="btn btn-primary">Save Changes</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
