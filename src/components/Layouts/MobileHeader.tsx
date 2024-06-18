import { useState } from "react";
import { IoBagOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { showcart } from "../../redux/lib/showCartMenu.ts";
import { IoIosArrowBack } from "react-icons/io";
import { useAppSelector } from "../../redux/store.ts";
import { cartSelector } from "../../redux/lib/cartSlice.ts";

export default function MobileHeader() {
  const [show, setShow] = useState(false);
  const [subMenu, setSubMenu] = useState(false);
  const cart = useAppSelector(cartSelector).cart;
  const navigate = useNavigate();

  const dispatch = useDispatch();

  return (
    <div className="header-mobile header_sticky">
      <div className="container d-flex align-items-center h-100">
        <a
          className="mobile-nav-activator d-block position-relative"
          onClick={() => setShow(!show)}
        >
          <RxHamburgerMenu fontSize={25} />
          <span className="btn-close-lg position-absolute top-0 start-0 w-100" />
        </a>
        <div className="logo" onClick={()=>navigate('/')}>
          <a
            href="#"
            style={{
              fontSize: "20px",
              color: "rgb(255 147 102)",
            }}
          >
            ꪶꪖᦓꪻꪮᠻᠻꪖ
          </a>
        </div>
        {/* /.logo */}
        <a
          className="header-tools__item header-tools__cart js-open-aside"
          data-aside="cartDrawer"
          onClick={() => dispatch(showcart())}
        >
          <IoBagOutline fontSize={20} />
          <span className="cart-amount d-block position-absolute js-cart-items-count">
            {cart.length}
          </span>
        </a>
      </div>
      {/* /.container */}
      <nav
        className="header-mobile__navigation navigation d-flex flex-column w-100 position-absolute top-100 bg-body overflow-auto"
        style={
          show
            ? { height: "100dvh", maxHeight: "100dvh" }
            : { height: 0, maxHeight: 0 }
        }
      >
        <div className="container">
          <form
            action="https://uomo-html.flexkitux.com/Demo1/search.html"
            method="GET"
            className="search-field position-relative mt-4 mb-3"
          >
            <div className="position-relative">
              <input
                className="search-field__input w-100 border rounded-1"
                type="text"
                name="search-keyword"
                placeholder="Search products"
              />
              <button
                className="btn-icon search-popup__submit pb-0 me-2"
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
                className="btn-icon btn-close-lg search-popup__reset pb-0 me-2"
                type="reset"
              />
            </div>
            <div className="position-absolute start-0 top-100 m-0 w-100">
              <div className="search-result" />
            </div>
          </form>
          {/* /.header-search */}
        </div>
        {/* /.container */}
        <div className="container">
          <div className="overflow-hidden">
            <ul
              className="navigation__list list-unstyled position-relative"
              style={{
                transform: subMenu ? "translateX(-100%)" : "translateX(0)",
                transition: "0.25s",
              }}
            >
              <li className="navigation__item">
                <Link
                  to="/"
                  onClick={() => setShow(false)}
                  className="navigation__link js-nav-right d-flex align-items-center"
                >
                  Home
                  <svg
                    className="ms-auto"
                    width={7}
                    height={11}
                    viewBox="0 0 7 11"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <use href="#icon_next_sm" />
                  </svg>
                </Link>
              </li>
              <li className="navigation__item">
                <Link
                  to="/shop"
                  onClick={() => setShow(false)}
                  className="navigation__link js-nav-right d-flex align-items-center"
                >
                  Shop
                  <svg
                    className="ms-auto"
                    width={7}
                    height={11}
                    viewBox="0 0 7 11"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <use href="#icon_next_sm" />
                  </svg>
                </Link>
                <div className="sub-menu position-absolute top-0 start-100 w-100 d-none">
                  <a
                    href="#"
                    className="navigation__link js-nav-left d-flex align-items-center border-bottom mb-3"
                  >
                    <svg
                      className="me-2"
                      width={7}
                      height={11}
                      viewBox="0 0 7 11"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <use href="#icon_prev_sm" />
                    </svg>
                    Shop
                  </a>
                  <div className="sub-menu__wrapper">
                    <a
                      href="#"
                      className="navigation__link js-nav-right d-flex align-items-center"
                    >
                      Shop List
                      <svg
                        className="ms-auto"
                        width={7}
                        height={11}
                        viewBox="0 0 7 11"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <use href="#icon_next_sm" />
                      </svg>
                    </a>
                    <div className="sub-menu__wrapper position-absolute top-0 start-100 w-100 d-none">
                      <a
                        href="#"
                        className="navigation__link js-nav-left d-flex align-items-center border-bottom mb-2"
                      >
                        <svg
                          className="me-2"
                          width={7}
                          height={11}
                          viewBox="0 0 7 11"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <use href="#icon_prev_sm" />
                        </svg>
                        Shop List
                      </a>
                    </div>
                    {/* /.sub-menu__wrapper */}
                    <a
                      href="#"
                      className="navigation__link js-nav-right d-flex align-items-center"
                    >
                      Shop Detail
                      <svg
                        className="ms-auto"
                        width={7}
                        height={11}
                        viewBox="0 0 7 11"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <use href="#icon_next_sm" />
                      </svg>
                    </a>
                    {/* /.sub-menu__wrapper */}
                    <a
                      href="#"
                      className="navigation__link js-nav-right d-flex align-items-center"
                    >
                      Other Pages
                      <svg
                        className="ms-auto"
                        width={7}
                        height={11}
                        viewBox="0 0 7 11"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <use href="#icon_next_sm" />
                      </svg>
                    </a>
                    {/* /.sub-menu__wrapper */}
                  </div>
                  {/* /.sub-menu__wrapper */}
                </div>
                {/* /.sub-menu */}
              </li>
              <li className="navigation__item">
                <a className="navigation__link js-nav-right d-flex align-items-center">
                  Blog
                  <svg
                    className="ms-auto"
                    width={7}
                    height={11}
                    viewBox="0 0 7 11"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <use href="#icon_next_sm" />
                  </svg>
                </a>
              </li>
              <li className="navigation__item" onClick={() => setSubMenu(true)}>
                <a className="navigation__link js-nav-right d-flex align-items-center">
                  Pages
                  <svg
                    className="ms-auto"
                    width={7}
                    height={11}
                    viewBox="0 0 7 11"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <use href="#icon_next_sm" />
                  </svg>
                </a>
                <div
                  className="sub-menu position-absolute top-0 start-100 w-100"
                  style={{ visibility: subMenu ? "visible" : "hidden" }}
                >
                  <a
                    className="navigation__link js-nav-left d-flex align-items-center border-bottom mb-2"
                    onClick={() => {
                      setTimeout(() => {
                        setSubMenu(false);
                      });
                    }}
                  >
                    <IoIosArrowBack />
                    Pages
                  </a>
                  <ul className="list-unstyled">
                    <li
                      className="sub-menu__item"
                      onClick={() => {
                        navigate("/dashboard");
                        setShow(false);
                      }}
                    >
                      <a className="menu-link menu-link_us-s">My Account</a>
                    </li>
                    <li
                      className="sub-menu__item"
                      onClick={() => {
                        navigate("/login"), setShow(false);
                      }}
                    >
                      <a className="menu-link menu-link_us-s">
                        Login / Register
                      </a>
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
                </div>
              </li>
              <li className="navigation__item">
                <a className="navigation__link">About</a>
              </li>
              <li className="navigation__item">
                <a className="navigation__link">Contact</a>
              </li>
            </ul>
            {/* /.navigation__list */}
          </div>
          {/* /.overflow-hidden */}
        </div>
        {/* /.container */}
        <div className="border-top mt-auto pb-2">
          <div className="customer-links container mt-4 mb-2 pb-1">
            <svg
              className="d-inline-block align-middle"
              width={20}
              height={20}
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <use href="#icon_user" />
            </svg>
            <span className="d-inline-block ms-2 text-uppercase align-middle fw-medium">
              My Account
            </span>
          </div>
          <div className="container d-flex align-items-center">
            <label
              htmlFor="footerSettingsLanguage_mobile"
              className="me-2 text-secondary"
            >
              Language
            </label>
            <select
              id="footerSettingsLanguage_mobile"
              className="form-select form-select-sm bg-transparent border-0"
              aria-label="Default select example"
              name="store-language"
            >
              <option className="footer-select__option">
                United Kingdom | English
              </option>
              <option className="footer-select__option" value={1}>
                United States | English
              </option>
              <option className="footer-select__option" value={2}>
                German
              </option>
              <option className="footer-select__option" value={3}>
                French
              </option>
              <option className="footer-select__option" value={4}>
                Swedish
              </option>
            </select>
          </div>
          <div className="container d-flex align-items-center">
            <label
              htmlFor="footerSettingsCurrency_mobile"
              className="me-2 text-secondary"
            >
              Currency
            </label>
            <select
              id="footerSettingsCurrency_mobile"
              className="form-select form-select-sm bg-transparent border-0"
              aria-label="Default select example"
              name="store-language"
            >
              <option>$ USD</option>
              <option value={1}>£ GBP</option>
              <option value={2}>€ EURO</option>
            </select>
          </div>
          <ul className="container social-links list-unstyled d-flex flex-wrap mb-0">
            <li>
              <a
                href="https://www.facebook.com/"
                className="footer__social-link d-block ps-0"
              >
                <svg
                  className="svg-icon svg-icon_facebook"
                  width={9}
                  height={15}
                  viewBox="0 0 9 15"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <use href="#icon_facebook" />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/"
                className="footer__social-link d-block"
              >
                <svg
                  className="svg-icon svg-icon_twitter"
                  width={14}
                  height={13}
                  viewBox="0 0 14 13"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <use href="#icon_twitter" />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/"
                className="footer__social-link d-block"
              >
                <svg
                  className="svg-icon svg-icon_instagram"
                  width={14}
                  height={13}
                  viewBox="0 0 14 13"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <use href="#icon_instagram" />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/"
                className="footer__social-link d-block"
              >
                <svg
                  className="svg-icon svg-icon_youtube"
                  width={16}
                  height={11}
                  viewBox="0 0 16 11"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M15.0117 1.8584C14.8477 1.20215 14.3281 0.682617 13.6992 0.518555C12.5234 0.19043 7.875 0.19043 7.875 0.19043C7.875 0.19043 3.19922 0.19043 2.02344 0.518555C1.39453 0.682617 0.875 1.20215 0.710938 1.8584C0.382812 3.00684 0.382812 5.46777 0.382812 5.46777C0.382812 5.46777 0.382812 7.90137 0.710938 9.07715C0.875 9.7334 1.39453 10.2256 2.02344 10.3896C3.19922 10.6904 7.875 10.6904 7.875 10.6904C7.875 10.6904 12.5234 10.6904 13.6992 10.3896C14.3281 10.2256 14.8477 9.7334 15.0117 9.07715C15.3398 7.90137 15.3398 5.46777 15.3398 5.46777C15.3398 5.46777 15.3398 3.00684 15.0117 1.8584ZM6.34375 7.68262V3.25293L10.2266 5.46777L6.34375 7.68262Z" />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="https://www.pinterest.com/"
                className="footer__social-link d-block"
              >
                <svg
                  className="svg-icon svg-icon_pinterest"
                  width={14}
                  height={15}
                  viewBox="0 0 14 15"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <use href="#icon_pinterest" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </nav>
      {/* /.navigation */}
    </div>
  );
}
