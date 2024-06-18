import React from "react";

export default function AdminFooter() {
  return (
    <div className="footer pb-4 d-flex flex-lg-column" id="kt_footer">
      {/*begin::Container*/}
      <div className="container-xxl d-flex flex-column flex-md-row align-items-center justify-content-between">
        {/*begin::Copyright*/}
        <div className="text-dark order-2 order-md-1">
          <span className="text-muted fw-semibold me-1">2023©</span>
          <a
            href="https://keenthemes.com"
            target="_blank"
            className="text-gray-800 text-hover-primary"
          >
            Keenthemes
          </a>
        </div>
        {/*end::Copyright*/}
        {/*begin::Menu*/}
        <ul className="menu menu-gray-600 menu-hover-primary fw-semibold order-1">
          <li className="menu-item">
            <a
              href="https://keenthemes.com"
              target="_blank"
              className="menu-link px-2"
            >
              About
            </a>
          </li>
          <li className="menu-item">
            <a
              href="https://devs.keenthemes.com"
              target="_blank"
              className="menu-link px-2"
            >
              Support
            </a>
          </li>
          <li className="menu-item">
            <a
              href="https://1.envato.market/EA4JP"
              target="_blank"
              className="menu-link px-2"
            >
              Purchase
            </a>
          </li>
        </ul>
        {/*end::Menu*/}
      </div>
      {/*end::Container*/}
    </div>
  );
}
