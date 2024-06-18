import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { userLogout } from "../../redux/lib/userInfo.ts";
import { hidecart } from "../../redux/lib/showCartMenu.ts";
import { deleteAllCart } from "../../redux/lib/cartSlice.ts";
import { deleteAllWishlist } from "../../redux/lib/wishlistSlice.ts";
import React from "react";
import { cleanOrder } from "../../redux/lib/orderList.ts";

export default function AccountLayout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const { pathname } = location;

  const dispatch = useDispatch();
  return (
    <div className="mb-5">
      <main>
        <div className="mb-4 pb-4" />
        <section className="my-account container">
          <h2 className="page-title">My Account</h2>
          <div className="row">
            <div className="col-lg-3">
              <ul className="account-nav">
                <li>
                  <Link
                    to={"/dashboard"}
                    tab="1"
                    className={`menu-link menu-link_us-s ${pathname === "/dashboard" && "menu-link_active"
                      }`}
                  >
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/dashboard/orders"}
                    className={`menu-link menu-link_us-s ${pathname === "/dashboard/orders" && "menu-link_active"
                      }`}
                  >
                    Orders
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/dashboard/editAddress"}
                    className={`menu-link menu-link_us-s ${pathname === "/dashboard/editAddress" &&
                      "menu-link_active"
                      }`}
                  >
                    ADDRESSES
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/dashboard/accountEdit"}
                    className={`menu-link menu-link_us-s ${pathname === "/dashboard/accountEdit" &&
                      "menu-link_active"
                      }`}
                  >
                    Account Details
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/dashboard/wishlist"}
                    className={`menu-link menu-link_us-s ${pathname === "/dashboard/wishlist" && "menu-link_active"
                      }`}
                  >
                    Wishlist
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() => {
                      dispatch(userLogout()),
                        dispatch(hidecart()),
                        dispatch(deleteAllCart()),
                        dispatch(deleteAllWishlist());
                      dispatch(cleanOrder())
                    }}
                  >
                    Logout
                  </Link>
                </li>
              </ul>
            </div>
            {children}
          </div>
        </section>
      </main>
    </div>
  );
}
