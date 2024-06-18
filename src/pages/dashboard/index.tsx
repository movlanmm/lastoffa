import { useDispatch } from "react-redux";
import { userLogout } from "../../redux/lib/userInfo.ts";
import { useAppSelector } from "../../redux/store";
import { userSelector } from "../../redux/lib/userInfo.ts";

export default function Dashboard() {
  const user = useAppSelector(userSelector)
  const dispatch = useDispatch();
  return (
    <>
      <div className="col-lg-9">
        <div className="page-content my-account__dashboard">
          {user.logged ? (
            <p>
              Hello <strong>{user.userDetails.username}</strong> (not{" "}
              <strong>{user.userDetails.username}</strong>{" "}
              <a onClick={() => dispatch(userLogout())}>Log out</a>)
            </p>
          ) : (
            <p>
              Hello <strong>Guest</strong>
            </p>
          )}

          <p>
            From your account dashboard you can view your{" "}
            <a className="unerline-link" href="account_orders.html">
              recent orders
            </a>
            , manage your{" "}
            <a className="unerline-link" href="account_edit_address.html">
              shipping and billing addresses
            </a>
            , and{" "}
            <a className="unerline-link" href="account_edit.html">
              edit your password and account details.
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
