import { Link, useNavigate } from "react-router-dom";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { CiHeart, CiUser } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { showcart } from "../../redux/lib/showCartMenu.ts";
import AsideLoginForm from "../AsideLoginForm";
import { useAppSelector } from "../../redux/store";
import { userSelector } from "../../redux/lib/userInfo";
import { cartSelector } from "../../redux/lib/cartSlice";
import { wishlistSelector } from "../../redux/lib/wishlistSlice";

export default function Header() {
  const user = useAppSelector(userSelector)
  const [show, setShow] = useState(false);
  const cart = useAppSelector(cartSelector).cart;
  const wishlist = useAppSelector(wishlistSelector).wishlist;
  const [showLog, setShowLog] = useState<boolean>(false);
  const dispatch = useDispatch();

  const navigate = useNavigate();


  return (
    <>
      <header id="header" className="header header_sticky">
        <div className="container">
          <div className="header-desk header-desk_type_1">
            <div className="logo" role="button" onClick={() => navigate("/")}>
              <a
                style={{
                  fontSize: "20px",
                  color: "rgb(255 147 102)",
                }}
              >
                ꪶꪖᦓꪻꪮᠻᠻꪖ
              </a>
            </div>
            {/* /.logo */}
            <nav className="navigation">
              <ul className="navigation__list list-unstyled d-flex">
                <li className="navigation__item" onClick={() => navigate("/")}>
                  <a className="navigation__link">Home</a>
                  {/* /.box-menu */}
                </li>
                <li
                  className="navigation__item"
                  onClick={() => navigate("/shop")}
                >
                  <a className="navigation__link">Shop</a>
                </li>
                <li className="navigation__item">
                  <a className="navigation__link">Blog</a>
                  {/* /.box-menu */}
                </li>
                <li className="navigation__item">
                  <a className="navigation__link">Pages</a>
                  <ul className="default-menu list-unstyled">
                    <li className="sub-menu__item">
                      <Link
                        to={"/dashboard"}
                        className="menu-link menu-link_us-s"
                      >
                        My Account
                      </Link>
                    </li>
                    <li className="sub-menu__item">
                      {!user.logged && (
                        <Link
                          to={"/login"}
                          className="menu-link menu-link_us-s"
                        >
                          Login / Register
                        </Link>
                      )}
                    </li>
                    <li className="sub-menu__item">
                      <a className="menu-link menu-link_us-s">Store Locator</a>
                    </li>
                    <li className="sub-menu__item">
                      <a className="menu-link menu-link_us-s">Lookbook</a>
                    </li>
                    <li className="sub-menu__item">
                      <a className="menu-link menu-link_us-s">Faq</a>
                    </li>
                    <li className="sub-menu__item">
                      <a className="menu-link menu-link_us-s">Terms</a>
                    </li>
                    <li className="sub-menu__item">
                      <a className="menu-link menu-link_us-s">404 Error</a>
                    </li>
                    <li className="sub-menu__item">
                      <a className="menu-link menu-link_us-s">Coming Soon</a>
                    </li>
                  </ul>
                  {/* /.box-menu */}
                </li>
                <li className="navigation__item">
                  <a className="navigation__link">About</a>
                </li>
                <li className="navigation__item">
                  <a className="navigation__link">Contact</a>
                </li>
              </ul>
              {/* /.navigation__list */}
            </nav>
            {/* /.navigation */}
            <div className="header-tools d-flex align-items-center">
              <div className="header-tools__item hover-container">
                <div className="js-hover__open position-relative">
                  <a className="js-search-popup search-field__actor" href="#">
                    <HiMagnifyingGlass
                      fontSize={20}
                      onClick={() => setShow(true)}
                      style={{ display: show ? "none" : "block" }}
                    />
                    <IoMdClose
                      style={{
                        position: "absolute",
                        top: 0,
                        right: 0,
                        transform: "translate(0%,-50%)",
                        fontSize: 20,
                        visibility: show ? "visible" : "hidden",
                      }}
                      onClick={() => setShow(false)}
                    />
                  </a>
                </div>
                <div
                  className="search-popup js-hidden-content"
                  style={{
                    visibility: show ? "visible" : "hidden",
                    opacity: show ? 1 : 0,
                  }}
                >
                  <form
                    action="https://uomo-html.flexkitux.com/Demo1/search_result.html"
                    method="GET"
                    className="search-field container"
                  >
                    <p className="text-uppercase text-secondary fw-medium mb-4">
                      What are you looking for?
                    </p>
                    <div className="position-relative">
                      <input
                        className="search-field__input search-popup__input w-100 fw-medium"
                        type="text"
                        name="search-keyword"
                        placeholder="Search products"
                      />
                      <button
                        className="btn-icon search-popup__submit"
                        type="submit"
                      >
                        <svg
                          className="d-block"
                          width={20}
                          height={20}
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <use href="#icon_search" />
                        </svg>
                      </button>
                      <button
                        className="btn-icon btn-close-lg search-popup__reset"
                        type="reset"
                      />
                    </div>
                    <div className="search-popup__results">
                      <div className="sub-menu search-suggestion">
                        <h6 className="sub-menu__title fs-base">Quicklinks</h6>
                        <ul className="sub-menu__list list-unstyled">
                          <li className="sub-menu__item">
                            <a className="menu-link menu-link_us-s">
                              New Arrivals
                            </a>
                          </li>
                          <li className="sub-menu__item">
                            <a className="menu-link menu-link_us-s">Dresses</a>
                          </li>
                          <li className="sub-menu__item">
                            <a className="menu-link menu-link_us-s">
                              Accessories
                            </a>
                          </li>
                          <li className="sub-menu__item">
                            <a className="menu-link menu-link_us-s">Footwear</a>
                          </li>
                          <li className="sub-menu__item">
                            <a className="menu-link menu-link_us-s">
                              Sweatshirt
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="search-result row row-cols-5" />
                    </div>
                  </form>
                  {/* /.header-search */}
                </div>
                {/* /.search-popup */}
              </div>
              {/* /.header-tools__item hover-container */}
              <div
                className="header-tools__item hover-container"
                onClick={() => setShowLog(!showLog)}
              >
                <a
                  className="header-tools__item js-open-aside"
                  href="#"
                  data-aside="customerForms"
                >
                  <CiUser fontSize={20} />
                </a>
              </div>
              <a
                className="header-tools__item header-tools__cart"
                onClick={() => navigate("/dashboard/wishlist")}
              >
                <CiHeart fontSize={22} />
                {wishlist.length > 0 &&
                  <span
                    className="cart-amount d-block position-absolute js-cart-items-count"

                  >
                    {wishlist.length}
                  </span>
                }

              </a>
              <a
                className="header-tools__item header-tools__cart js-open-aside"
                onClick={() => dispatch(showcart())}
                data-aside="cartDrawer"
              >
                <IoBagOutline fontSize={20} />
                {cart.length > 0 &&
                  <span
                    className="cart-amount d-block position-absolute js-cart-items-count"
                  >
                    {cart.length}
                  </span>}

              </a>
              <a
                className="header-tools__item"
                href="#"
                data-bs-toggle="modal"
                data-bs-target="#siteMap"
              >
                <RxHamburgerMenu fontSize={25} />
              </a>
            </div>
            {/* /.header__tools */}
          </div>
          {/* /.header-desk header-desk_type_1 */}
        </div>
        {/* /.container */}
      </header>

      <AsideLoginForm showLog={showLog} setShowLog={setShowLog} />
      {/* /.aside aside_right */}
    </>
  );
}
