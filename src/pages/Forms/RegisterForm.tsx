import { useFormik } from "formik";
import { auth, db } from "../../utils/firebase.ts";
import { createUserWithEmailAndPassword } from "firebase/auth";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { addDoc, collection } from "firebase/firestore";
export default function RegisterForm() {

  interface Form{
    username:string,
    email:string,
    password: string
  }

  const schema = Yup.object({
    username: Yup.string().required(),
    email: Yup.string().required(),
    password: Yup.string().min(6).max(32).required(),
  });

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      registerUser(values);
    },
  });

  const registerUser = async (values:Form) => {
    await createUserWithEmailAndPassword(
      auth,
      formik.values.email,
      formik.values.password
    )
      .then((userCredential) => {
        const uid = userCredential.user.uid;
        addUserToFirestore(uid, values);
        toast.success("Registered");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  const addUserToFirestore = async (uid:string, values:Form) => {
    try {
      const docRef = await addDoc(collection(db, "users"), {
        uid,
        email:values.email,
        role:'Customer',
        cart: [],
        wishlist: [],
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <div className="register-form">
      <form name="register-form" onSubmit={formik.handleSubmit}>
        <div className="form-floating mb-3">
          <input
            name="username"
            type="text"
            style={{ border:formik.errors.username && "1px solid red" }}
            id="username"
            className="form-control form-control_gray"
            placeholder="Username"
            onChange={formik.handleChange}
            value={formik.values.username}
            required
          />
          <label htmlFor="customerNameRegisterInput">Username</label>
        </div>
        <div className="pb-3" />
        <div className="form-floating mb-3">
          <input
            name="email"
            id="email"
            type="email"
            style={{ border:formik.errors.email &&  "1px solid red" }}
            className="form-control form-control_gray"
            value={formik.values.email}
            onChange={formik.handleChange}
            placeholder="Email address *"
            required
          />
          <label htmlFor="customerEmailRegisterInput">Email address *</label>
        </div>
        <div className="pb-3" />
        <div className="form-floating mb-3">
          <input
            name="password"
            type="password"
            style={{ border:formik.errors.password &&  "1px solid red" }}
            id="password"
            className="form-control form-control_gray"
            value={formik.values.password}
            onChange={formik.handleChange}
            placeholder="Password *"
            required
          />
          <label htmlFor="customerPasswodRegisterInput">Password *</label>
        </div>
        <div className="d-flex align-items-center mb-3 pb-2">
          <p className="m-0">
            Your personal data will be used to support your experience
            throughout this website, to manage access to your account, and for
            other purposes described in our privacy policy.
          </p>
        </div>
        <button className="btn btn-primary w-100 text-uppercase" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}
