import { useFormik } from "formik";
import { auth, db } from "../../utils/firebase.ts";
import { toast } from "react-toastify";
import { signInWithEmailAndPassword } from "firebase/auth";
import { collection, getDocs, query, where } from "firebase/firestore";
import { userLogged } from "../../redux/lib/userInfo.ts";
import { useNavigate } from "react-router";
import { getUserCart } from "../../redux/lib/cartSlice.ts";
import { getUserWishlist } from "../../redux/lib/wishlistSlice.ts";
import * as Yup from "yup";
import { getUserOrders } from "../../redux/lib/orderList.ts";
import { useAppDispatch } from "../../redux/store";
import { User } from "../../types/index.ts";

export default function LoginForm() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const schema = Yup.object({
    email: Yup.string().required(),
    password: Yup.string().min(6).max(32).required(),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: schema,
    onSubmit: () => {
      onLogin();
      navigate("/");
    },
  });

  const onLogin = () => {
    signInWithEmailAndPassword(
      auth,
      formik.values.email,
      formik.values.password
    )
      .then((userCredential) => {
        const uid = userCredential.user.uid;
        getUserFromFireStore(uid);
        toast.success("Logged");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  const getUserFromFireStore = async (uid: string) => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", uid));
      const docRef = await getDocs(q);
      docRef.forEach((doc) => {
        dispatch(userLogged({ ...doc.data(), id: doc.id } as User));
        dispatch(getUserCart(doc.data().cart));
        dispatch(getUserWishlist(doc.data().wishlist));
        dispatch(getUserOrders(doc.data().orders))
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="login-form">
      <form name="login-form" onSubmit={formik.handleSubmit}>
        <div className="form-floating mb-3">
          <input
            name="email"
            type="email"
            id="email"
            onChange={formik.handleChange}
            style={{ border: formik.errors.email && "1px solid red" }}
            value={formik.values.email}
            className="form-control form-control_gray"
            placeholder="Email address *"
            required
          />
          <label htmlFor="customerNameEmailInput1">Email address *</label>
        </div>
        <div className="pb-3" />
        <div className="form-floating mb-3">
          <input
            name="password"
            id="password"
            type="password"
            className="form-control form-control_gray"
            style={{ border: formik.errors.password && "1px solid red" }}
            value={formik.values.password}
            onChange={formik.handleChange}
            placeholder="Password *"
            required
          />
          <label htmlFor="customerPasswodInput">Password *</label>
        </div>
        <div className="d-flex align-items-center mb-3 pb-2">
          <div className="form-check mb-0">
            <input
              name="remember"
              className="form-check-input form-check-input_fill"
              type="checkbox"
              id="flexCheckDefault1"
            />
            <label
              className="form-check-label text-secondary"
              htmlFor="flexCheckDefault1"
            >
              Remember me
            </label>
          </div>
          <a href="reset_password.html" className="btn-text ms-auto">
            Lost password?
          </a>
        </div>
        <button className="btn btn-primary w-100 text-uppercase" type="submit">
          Log In
        </button>
        <div className="customer-option mt-4 text-center">
          <span className="text-secondary">No account yet?</span>
          <a className="btn-text js-show-register">Create Account</a>
        </div>
      </form>
    </div>
  );
}
