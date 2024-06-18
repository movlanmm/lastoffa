import { CiFacebook, CiInstagram, CiTwitter, CiYoutube } from "react-icons/ci";

export default function Footer() {
  return (
    <footer className="footer footer_type_1">
      <div className="footer-middle container">
        <div className="row row-cols-lg-5 row-cols-2">
          <div className="footer-column footer-store-info col-12 mb-4 mb-lg-0">
            <div className="logo">
              <a
                style={{
                  fontSize: "20px",
                  color: "rgb(255 147 102)",
                }}
                href="#"
              >
                ꪶꪖᦓꪻꪮᠻᠻꪖ
              </a>
            </div>
            {/* /.logo */}
            <p className="footer-address">
              1418 River Drive, Suite 35 Cottonhall, CA 9622 United States
            </p>
            <p className="m-0">
              <strong className="fw-medium">sale@lastoffa.com</strong>
            </p>
            <p>
              <strong className="fw-medium">+1 246-345-0695</strong>
            </p>
            <ul className="social-links list-unstyled d-flex flex-wrap mb-0">
              <li>
                <a
                  href="https://facebook.com/"
                  className="footer__social-link d-block"
                >
                  <CiFacebook />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/"
                  className="footer__social-link d-block"
                >
                  <CiTwitter />
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/"
                  className="footer__social-link d-block"
                >
                  <CiInstagram />
                </a>
              </li>
              <li>
                <a
                  href="https://youtube.com/"
                  className="footer__social-link d-block"
                >
                  <CiYoutube />
                </a>
              </li>
            </ul>
          </div>
          {/* /.footer-column */}
          <div className="footer-column footer-menu mb-4 mb-lg-0">
            <h5 className="sub-menu__title text-uppercase">Company</h5>
            <ul className="sub-menu__list list-unstyled">
              <li className="sub-menu__item">
                <a className="menu-link menu-link_us-s">About Us</a>
              </li>
              <li className="sub-menu__item">
                <a className="menu-link menu-link_us-s">Careers</a>
              </li>
              <li className="sub-menu__item">
                <a className="menu-link menu-link_us-s">Affiliates</a>
              </li>
              <li className="sub-menu__item">
                <a className="menu-link menu-link_us-s">Blog</a>
              </li>
              <li className="sub-menu__item">
                <a className="menu-link menu-link_us-s">Contact Us</a>
              </li>
            </ul>
          </div>
          {/* /.footer-column */}
          <div className="footer-column footer-menu mb-4 mb-lg-0">
            <h5 className="sub-menu__title text-uppercase">Shop</h5>
            <ul className="sub-menu__list list-unstyled">
              <li className="sub-menu__item">
                <a className="menu-link menu-link_us-s">New Arrivals</a>
              </li>
              <li className="sub-menu__item">
                <a className="menu-link menu-link_us-s">Accessories</a>
              </li>
              <li className="sub-menu__item">
                <a className="menu-link menu-link_us-s">Men</a>
              </li>
              <li className="sub-menu__item">
                <a className="menu-link menu-link_us-s">Women</a>
              </li>
              <li className="sub-menu__item">
                <a className="menu-link menu-link_us-s">Shop All</a>
              </li>
            </ul>
          </div>
          {/* /.footer-column */}
          <div className="footer-column footer-menu mb-4 mb-lg-0">
            <h5 className="sub-menu__title text-uppercase">Help</h5>
            <ul className="sub-menu__list list-unstyled">
              <li className="sub-menu__item">
                <a className="menu-link menu-link_us-s">Customer Service</a>
              </li>
              <li className="sub-menu__item">
                <a className="menu-link menu-link_us-s">My Account</a>
              </li>
              <li className="sub-menu__item">
                <a className="menu-link menu-link_us-s">Find a Store</a>
              </li>
              <li className="sub-menu__item">
                <a className="menu-link menu-link_us-s">Legal &amp; Privacy</a>
              </li>
              <li className="sub-menu__item">
                <a className="menu-link menu-link_us-s">Contact</a>
              </li>
              <li className="sub-menu__item">
                <a className="menu-link menu-link_us-s">Gift Card</a>
              </li>
            </ul>
          </div>
          {/* /.footer-column */}
          <div className="footer-column footer-newsletter col-12 mb-4 mb-lg-0">
            <h5 className="sub-menu__title text-uppercase">Subscribe</h5>
            <p>
              Be the first to get the latest news about trends, promotions, and
              much more!
            </p>
            <form
              action="https://uomo-html.flexkitux.com/Demo1/index.html"
              className="footer-newsletter__form position-relative bg-body"
            >
              <input
                className="form-control border-white"
                type="email"
                name="email"
                placeholder="Your email address"
              />
              <input
                className="btn-link fw-medium bg-white position-absolute top-0 end-0 h-100"
                type="submit"
              />
            </form>
            <div className="mt-4 pt-3">
              <strong className="fw-medium">Secure payments</strong>
              <p className="mt-2">
                <img
                  loading="lazy"
                  src="../images/payment-options.png"
                  alt="Acceptable payment gateways"
                  className="mw-100"
                />
              </p>
            </div>
          </div>
          {/* /.footer-column */}
        </div>
        {/* /.row-cols-5 */}
      </div>
      {/* /.footer-middle container */}
      <div className="footer-bottom container">
        <div className="d-block d-md-flex align-items-center">
          <span className="footer-copyright me-auto">©2023 LaStoffa</span>
          <div className="footer-settings d-block d-md-flex align-items-center">
            <div className="d-flex align-items-center">
              <label
                htmlFor="footerSettingsLanguage"
                className="me-2 text-secondary"
              >
                Language
              </label>
              <select
                id="footerSettingsLanguage"
                className="form-select form-select-sm bg-transparent"
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
            <div className="d-flex align-items-center">
              <label
                htmlFor="footerSettingsCurrency"
                className="ms-md-3 me-2 text-secondary"
              >
                Currency
              </label>
              <select
                id="footerSettingsCurrency"
                className="form-select form-select-sm bg-transparent"
                aria-label="Default select example"
                name="store-language"
              >
                <option>$ USD</option>
                <option value={1}>£ GBP</option>
                <option value={2}>€ EURO</option>
              </select>
            </div>
          </div>
          {/* /.footer-settings */}
        </div>
        {/* /.d-flex */}
      </div>
      {/* /.footer-bottom container */}
    </footer>
  );
}
