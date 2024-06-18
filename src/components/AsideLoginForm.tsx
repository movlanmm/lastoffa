import { userLogged, userLogout, userSelector } from "../redux/lib/userInfo.ts";
import { deleteAllCart, getUserCart } from "../redux/lib/cartSlice.ts";
import { deleteAllWishlist, getUserWishlist } from "../redux/lib/wishlistSlice.ts";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { signInWithEmailAndPassword } from "firebase/auth";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { auth, db } from "../utils/firebase.ts";
import { cleanOrder, getUserOrders } from "../redux/lib/orderList.ts";
import { Link } from 'react-router-dom';
import { useAppSelector } from "../redux/store.ts";
import { User } from "../types/index.ts";
import { useRef } from "react";

export default function AsideLoginForm({ showLog, setShowLog }: { showLog: boolean, setShowLog: (b: boolean) => void }) {
  const user = useAppSelector(userSelector);



  const asideRef = useRef<HTMLDivElement>(null)

  const closeLoginForm = (e: any) => {
    if (showLog && !asideRef.current?.contains(e.target as Node)) {
      setShowLog(false)
    }
  }

  window.addEventListener('mousedown', closeLoginForm)
  
  const dispatch = useDispatch();

  const schema = Yup.object({
    email: Yup.string().required(),
    password: Yup.string().min(6).max(32).required(),
  });

  const handleLogOut = () => {
    dispatch(userLogout()),
      dispatch(deleteAllCart()),
      dispatch(deleteAllWishlist());
    dispatch(cleanOrder())
    setShowLog(false);
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: schema,
    onSubmit: () => {
      onLogin();
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
    <div
      ref={asideRef}
      className="aside aside_right overflow-hidden customer-forms"
      id="customerForms"
      style={{ right: showLog ? 0 : "", opacity: showLog ? 1 : 0 }}
    >
      <div className="customer-forms__wrapper d-flex position-relative">
        <div className="customer__login">
          <div className="aside-header d-flex align-items-center">
            <h3 className="text-uppercase fs-6 mb-0">Login</h3>
            <button
              className="btn-close-lg js-close-aside ms-auto"
              onClick={() => setShowLog(false)}
            />
          </div>
          {/* /.aside-header */}
          {user.logged ? (
            <div className="text-center p-5">
              Welcome
              <strong className="fs-3 text-capitalize">
                {user.userDetails?.username}
              </strong>
              <p className="text-secondary">{user.userDetails?.email}</p>
              <button
                className="btn btn-primary w-100 text-uppercase mt-5"
                onClick={() => handleLogOut()}
              >
                Logout
              </button>
            </div>
          ) : (
            <form onSubmit={formik.handleSubmit} className="aside-content">
              <div className="form-floating mb-3">
                <input
                  name="email"
                  type="email"
                  id="email"
                  value={formik.values.email}
                  style={{ border: formik.errors.email && "1px solid red" }}
                  onChange={formik.handleChange}
                  className="form-control form-control_gray"
                  placeholder="name@example.com"
                />
                <label htmlFor="customerNameEmailInput">
                  Username or email address *
                </label>
              </div>
              <div className="pb-3" />
              <div className="form-label-fixed mb-3">
                <label htmlFor="customerPasswordInput" className="form-label">
                  Password *
                </label>
                <input
                  name="password"
                  id="password"
                  value={formik.values.password}
                  style={{ border: formik.errors.password && "1px solid red" }}
                  onChange={formik.handleChange}
                  className="form-control form-control_gray"
                  type="password"
                  placeholder="********"
                />
              </div>
              <div className="d-flex align-items-center mb-3 pb-2">
                <div className="form-check mb-0">
                  <input
                    name="remember"
                    className="form-check-input form-check-input_fill"
                    type="checkbox"
                    id="flexCheckDefault"
                  />
                  <label
                    className="form-check-label text-secondary"
                    htmlFor="flexCheckDefault"
                  >
                    Remember me
                  </label>
                </div>
                <Link className="btn-text ms-auto" to={'/reset-password'}>
                  Lost password?
                </Link>
              </div>
              <button
                className="btn btn-primary w-100 text-uppercase"
                type="submit"
              >
                Log In
              </button>
              <div className="customer-option mt-4 text-center">
                <span className="text-secondary">No account yet?</span>
                <Link
                  to={'/login'}
                  className="btn-text js-show-register"
                >
                  Create Account
                </Link>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
