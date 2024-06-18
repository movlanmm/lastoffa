import { useRef, useState } from "react";
import { useNavigate } from "react-router";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { adminLogout, adminSelector } from "../../redux/lib/adminSlice";

export default function AdminHeader() {
  const [menu, setMenu] = useState<boolean>(false)
  const [acc, setAcc] = useState<boolean>(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const navigate = useNavigate()

  const dispatch = useAppDispatch()
  const admin = useAppSelector(adminSelector).userDetails

  const closeMenu = (e: any) => {
    if (menu && !menuRef.current?.contains(e.target as Node)) {
      setMenu(false);
    }
  }

  window.addEventListener('mousedown', closeMenu)


  const navigatePages = (path: string) => {
    navigate(`/admin/${path}`)
    setMenu(false)
  }

  return (
    <>
      <div
        id="kt_header"
        className="header"
        data-kt-sticky="true"
        data-kt-sticky-name="header"
        data-kt-sticky-animation="false"
        data-kt-sticky-offset="{default: '200px', lg: '300px'}"
      >
        {/*begin::Container*/}
        <div className="container-xxl d-flex align-items-center flex-lg-stack">
          {/*begin::Brand*/}
          <div className="d-flex align-items-center flex-grow-1 flex-lg-grow-0 me-2 me-lg-5">
            {/*begin::Wrapper*/}
            <div className="flex-grow-1">
              {/*begin::Aside toggle*/}
              <button
                className="btn btn-icon btn-color-gray-800 btn-active-color-primary ms-n4 me-lg-12"
                id="kt_aside_toggle"
                onClick={() => setMenu(!menu)}
              >
                <i className="ki-duotone ki-abstract-14 fs-1">
                  <span className="path1" />
                  <span className="path2" />
                </i>
              </button>
              {/*end::Aside toggle*/}
              {/*begin::Header Logo*/}
              <a
                style={{
                  fontSize: "20px",
                  color: "#009ef7",
                }}
              >
                ꪶꪖᦓꪻꪮᠻᠻꪖ
              </a>
              {/*end::Header Logo*/}
            </div>
            {/*end::Wrapper*/}
            {/*begin:Search*/}
            <div className="ms-5 ms-md-17 d-flex align-items-center">
              {/*begin::Search*/}
              <div
                id="kt_header_search"
                className="header-search d-flex align-items-center w-lg-400px"
                data-kt-search-keypress="true"
                data-kt-search-min-length={2}
                data-kt-search-enter="enter"
                data-kt-search-layout="menu"
                data-kt-search-responsive="lg"
                data-kt-menu-trigger="auto"
                data-kt-menu-permanent="true"
                data-kt-menu-placement="{default: 'bottom-end', lg: 'bottom-start'}"
              >
                {/*begin::Tablet and mobile search toggle*/}
                <div
                  data-kt-search-element="toggle"
                  className="search-toggle-mobile d-flex d-lg-none align-items-center"
                >
                  <div className="d-flex btn btn-icon btn-color-gray-800 btn-active-light-primary w-30px h-30px w-md-40px h-md-40px">
                    <i className="ki-duotone ki-magnifier fs-1">
                      <span className="path1" />
                      <span className="path2" />
                    </i>
                  </div>
                </div>
                {/*end::Tablet and mobile search toggle*/}
                {/*begin::Form(use d-none d-lg-block classes for responsive search)*/}
                <form
                  data-kt-search-element="form"
                  className="d-none d-lg-block w-100 position-relative mb-5 mb-lg-0"
                  autoComplete="off"
                >
                  {/*begin::Hidden input(Added to disable form autocomplete)*/}
                  <input type="hidden" />
                  {/*end::Hidden input*/}
                  {/*begin::Icon*/}
                  <i className="ki-duotone ki-magnifier search-icon fs-2 text-gray-500 position-absolute top-50 translate-middle-y ms-5">
                    <span className="path1" />
                    <span className="path2" />
                  </i>
                  {/*end::Icon*/}
                  {/*begin::Input*/}
                  <input
                    type="text"
                    className="search-input form-control form-control-solid ps-13"
                    name="search"

                    placeholder="Search..."
                    data-kt-search-element="input"
                  />
                  {/*end::Input*/}
                  {/*begin::Spinner*/}
                  <span
                    className="search-spinner position-absolute top-50 end-0 translate-middle-y lh-0 d-none me-5"
                    data-kt-search-element="spinner"
                  >
                    <span className="spinner-border h-15px w-15px align-middle text-gray-400" />
                  </span>
                  {/*end::Spinner*/}
                  {/*begin::Reset*/}
                  <span
                    className="search-reset btn btn-flush btn-active-color-primary position-absolute top-50 end-0 translate-middle-y lh-0 d-none me-4"
                    data-kt-search-element="clear"
                  >
                    <i className="ki-duotone ki-cross fs-2 fs-lg-1 me-0">
                      <span className="path1" />
                      <span className="path2" />
                    </i>
                  </span>
                  {/*end::Reset*/}
                </form>
                {/*end::Form*/}
                {/*begin::Menu*/}
                <div
                  data-kt-search-element="content"
                  className="menu menu-sub menu-sub-dropdown py-7 px-7 overflow-hidden w-300px w-md-350px"
                >
                  {/*begin::Wrapper*/}
                  <div data-kt-search-element="wrapper">
                    {/*begin::Recently viewed*/}
                    <div data-kt-search-element="results" className="d-none">
                      {/*begin::Items*/}
                      <div className="scroll-y mh-200px mh-lg-350px">
                        {/*begin::Category title*/}
                        <h3
                          className="fs-5 text-muted m-0 pb-5"
                          data-kt-search-element="category-title"
                        >
                          Users
                        </h3>
                        {/*end::Category title*/}
                        {/*begin::Item*/}
                        <a
                          href="#"
                          className="d-flex text-dark text-hover-primary align-items-center mb-5"
                        >
                          {/*begin::Symbol*/}
                          <div className="symbol symbol-40px me-4">
                            <img src="assets/media/avatars/300-6.jpg" alt="" />
                          </div>
                          {/*end::Symbol*/}
                          {/*begin::Title*/}
                          <div className="d-flex flex-column justify-content-start fw-semibold">
                            <span className="fs-6 fw-semibold">
                              Karina Clark
                            </span>
                            <span className="fs-7 fw-semibold text-muted">
                              Marketing Manager
                            </span>
                          </div>
                          {/*end::Title*/}
                        </a>
                        {/*end::Item*/}
                        {/*begin::Item*/}
                        <a
                          href="#"
                          className="d-flex text-dark text-hover-primary align-items-center mb-5"
                        >
                          {/*begin::Symbol*/}
                          <div className="symbol symbol-40px me-4">
                            <img src="assets/media/avatars/300-2.jpg" alt="" />
                          </div>
                          {/*end::Symbol*/}
                          {/*begin::Title*/}
                          <div className="d-flex flex-column justify-content-start fw-semibold">
                            <span className="fs-6 fw-semibold">
                              Olivia Bold
                            </span>
                            <span className="fs-7 fw-semibold text-muted">
                              Software Engineer
                            </span>
                          </div>
                          {/*end::Title*/}
                        </a>
                        {/*end::Item*/}
                        {/*begin::Item*/}
                        <a
                          href="#"
                          className="d-flex text-dark text-hover-primary align-items-center mb-5"
                        >
                          {/*begin::Symbol*/}
                          <div className="symbol symbol-40px me-4">
                            <img src="assets/media/avatars/300-9.jpg" alt="" />
                          </div>
                          {/*end::Symbol*/}
                          {/*begin::Title*/}
                          <div className="d-flex flex-column justify-content-start fw-semibold">
                            <span className="fs-6 fw-semibold">Ana Clark</span>
                            <span className="fs-7 fw-semibold text-muted">
                              UI/UX Designer
                            </span>
                          </div>
                          {/*end::Title*/}
                        </a>
                        {/*end::Item*/}
                        {/*begin::Item*/}
                        <a
                          href="#"
                          className="d-flex text-dark text-hover-primary align-items-center mb-5"
                        >
                          {/*begin::Symbol*/}
                          <div className="symbol symbol-40px me-4">
                            <img src="assets/media/avatars/300-14.jpg" alt="" />
                          </div>
                          {/*end::Symbol*/}
                          {/*begin::Title*/}
                          <div className="d-flex flex-column justify-content-start fw-semibold">
                            <span className="fs-6 fw-semibold">
                              Nick Pitola
                            </span>
                            <span className="fs-7 fw-semibold text-muted">
                              Art Director
                            </span>
                          </div>
                          {/*end::Title*/}
                        </a>
                        {/*end::Item*/}
                        {/*begin::Item*/}
                        <a
                          href="#"
                          className="d-flex text-dark text-hover-primary align-items-center mb-5"
                        >
                          {/*begin::Symbol*/}
                          <div className="symbol symbol-40px me-4">
                            <img src="assets/media/avatars/300-11.jpg" alt="" />
                          </div>
                          {/*end::Symbol*/}
                          {/*begin::Title*/}
                          <div className="d-flex flex-column justify-content-start fw-semibold">
                            <span className="fs-6 fw-semibold">
                              Edward Kulnic
                            </span>
                            <span className="fs-7 fw-semibold text-muted">
                              System Administrator
                            </span>
                          </div>
                          {/*end::Title*/}
                        </a>
                        {/*end::Item*/}
                        {/*begin::Category title*/}
                        <h3
                          className="fs-5 text-muted m-0 pt-5 pb-5"
                          data-kt-search-element="category-title"
                        >
                          Customers
                        </h3>
                        {/*end::Category title*/}
                        {/*begin::Item*/}
                        <a
                          href="#"
                          className="d-flex text-dark text-hover-primary align-items-center mb-5"
                        >
                          {/*begin::Symbol*/}
                          <div className="symbol symbol-40px me-4">
                            <span className="symbol-label bg-light">
                              <img
                                className="w-20px h-20px"
                                src="assets/media/svg/brand-logos/volicity-9.svg"
                                alt=""
                              />
                            </span>
                          </div>
                          {/*end::Symbol*/}
                          {/*begin::Title*/}
                          <div className="d-flex flex-column justify-content-start fw-semibold">
                            <span className="fs-6 fw-semibold">
                              Company Rbranding
                            </span>
                            <span className="fs-7 fw-semibold text-muted">
                              UI Design
                            </span>
                          </div>
                          {/*end::Title*/}
                        </a>
                        {/*end::Item*/}
                        {/*begin::Item*/}
                        <a
                          href="#"
                          className="d-flex text-dark text-hover-primary align-items-center mb-5"
                        >
                          {/*begin::Symbol*/}
                          <div className="symbol symbol-40px me-4">
                            <span className="symbol-label bg-light">
                              <img
                                className="w-20px h-20px"
                                src="assets/media/svg/brand-logos/tvit.svg"
                                alt=""
                              />
                            </span>
                          </div>
                          {/*end::Symbol*/}
                          {/*begin::Title*/}
                          <div className="d-flex flex-column justify-content-start fw-semibold">
                            <span className="fs-6 fw-semibold">
                              Company Re-branding
                            </span>
                            <span className="fs-7 fw-semibold text-muted">
                              Web Development
                            </span>
                          </div>
                          {/*end::Title*/}
                        </a>
                        {/*end::Item*/}
                        {/*begin::Item*/}
                        <a
                          href="#"
                          className="d-flex text-dark text-hover-primary align-items-center mb-5"
                        >
                          {/*begin::Symbol*/}
                          <div className="symbol symbol-40px me-4">
                            <span className="symbol-label bg-light">
                              <img
                                className="w-20px h-20px"
                                src="assets/media/svg/misc/infography.svg"
                                alt=""
                              />
                            </span>
                          </div>
                          {/*end::Symbol*/}
                          {/*begin::Title*/}
                          <div className="d-flex flex-column justify-content-start fw-semibold">
                            <span className="fs-6 fw-semibold">
                              Business Analytics App
                            </span>
                            <span className="fs-7 fw-semibold text-muted">
                              Administration
                            </span>
                          </div>
                          {/*end::Title*/}
                        </a>
                        {/*end::Item*/}
                        {/*begin::Item*/}
                        <a
                          href="#"
                          className="d-flex text-dark text-hover-primary align-items-center mb-5"
                        >
                          {/*begin::Symbol*/}
                          <div className="symbol symbol-40px me-4">
                            <span className="symbol-label bg-light">
                              <img
                                className="w-20px h-20px"
                                src="assets/media/svg/brand-logos/leaf.svg"
                                alt=""
                              />
                            </span>
                          </div>
                          {/*end::Symbol*/}
                          {/*begin::Title*/}
                          <div className="d-flex flex-column justify-content-start fw-semibold">
                            <span className="fs-6 fw-semibold">
                              EcoLeaf App Launch
                            </span>
                            <span className="fs-7 fw-semibold text-muted">
                              Marketing
                            </span>
                          </div>
                          {/*end::Title*/}
                        </a>
                        {/*end::Item*/}
                        {/*begin::Item*/}
                        <a
                          href="#"
                          className="d-flex text-dark text-hover-primary align-items-center mb-5"
                        >
                          {/*begin::Symbol*/}
                          <div className="symbol symbol-40px me-4">
                            <span className="symbol-label bg-light">
                              <img
                                className="w-20px h-20px"
                                src="assets/media/svg/brand-logos/tower.svg"
                                alt=""
                              />
                            </span>
                          </div>
                          {/*end::Symbol*/}
                          {/*begin::Title*/}
                          <div className="d-flex flex-column justify-content-start fw-semibold">
                            <span className="fs-6 fw-semibold">
                              Tower Group Website
                            </span>
                            <span className="fs-7 fw-semibold text-muted">
                              Google Adwords
                            </span>
                          </div>
                          {/*end::Title*/}
                        </a>
                        {/*end::Item*/}
                        {/*begin::Category title*/}
                        <h3
                          className="fs-5 text-muted m-0 pt-5 pb-5"
                          data-kt-search-element="category-title"
                        >
                          Projects
                        </h3>
                        {/*end::Category title*/}
                        {/*begin::Item*/}
                        <a
                          href="#"
                          className="d-flex text-dark text-hover-primary align-items-center mb-5"
                        >
                          {/*begin::Symbol*/}
                          <div className="symbol symbol-40px me-4">
                            <span className="symbol-label bg-light">
                              <i className="ki-duotone ki-notepad fs-2 text-primary">
                                <span className="path1" />
                                <span className="path2" />
                                <span className="path3" />
                                <span className="path4" />
                                <span className="path5" />
                              </i>
                            </span>
                          </div>
                          {/*end::Symbol*/}
                          {/*begin::Title*/}
                          <div className="d-flex flex-column">
                            <span className="fs-6 fw-semibold">
                              Si-Fi Project by AU Themes
                            </span>
                            <span className="fs-7 fw-semibold text-muted">
                              #45670
                            </span>
                          </div>
                          {/*end::Title*/}
                        </a>
                        {/*end::Item*/}
                        {/*begin::Item*/}
                        <a
                          href="#"
                          className="d-flex text-dark text-hover-primary align-items-center mb-5"
                        >
                          {/*begin::Symbol*/}
                          <div className="symbol symbol-40px me-4">
                            <span className="symbol-label bg-light">
                              <i className="ki-duotone ki-frame fs-2 text-primary">
                                <span className="path1" />
                                <span className="path2" />
                                <span className="path3" />
                                <span className="path4" />
                              </i>
                            </span>
                          </div>
                          {/*end::Symbol*/}
                          {/*begin::Title*/}
                          <div className="d-flex flex-column">
                            <span className="fs-6 fw-semibold">
                              Shopix Mobile App Planning
                            </span>
                            <span className="fs-7 fw-semibold text-muted">
                              #45690
                            </span>
                          </div>
                          {/*end::Title*/}
                        </a>
                        {/*end::Item*/}
                        {/*begin::Item*/}
                        <a
                          href="#"
                          className="d-flex text-dark text-hover-primary align-items-center mb-5"
                        >
                          {/*begin::Symbol*/}
                          <div className="symbol symbol-40px me-4">
                            <span className="symbol-label bg-light">
                              <i className="ki-duotone ki-message-text-2 fs-2 text-primary">
                                <span className="path1" />
                                <span className="path2" />
                                <span className="path3" />
                              </i>
                            </span>
                          </div>
                          {/*end::Symbol*/}
                          {/*begin::Title*/}
                          <div className="d-flex flex-column">
                            <span className="fs-6 fw-semibold">
                              Finance Monitoring SAAS Discussion
                            </span>
                            <span className="fs-7 fw-semibold text-muted">
                              #21090
                            </span>
                          </div>
                          {/*end::Title*/}
                        </a>
                        {/*end::Item*/}
                        {/*begin::Item*/}
                        <a
                          href="#"
                          className="d-flex text-dark text-hover-primary align-items-center mb-5"
                        >
                          {/*begin::Symbol*/}
                          <div className="symbol symbol-40px me-4">
                            <span className="symbol-label bg-light">
                              <i className="ki-duotone ki-profile-circle fs-2 text-primary">
                                <span className="path1" />
                                <span className="path2" />
                                <span className="path3" />
                              </i>
                            </span>
                          </div>
                          {/*end::Symbol*/}
                          {/*begin::Title*/}
                          <div className="d-flex flex-column">
                            <span className="fs-6 fw-semibold">
                              Dashboard Analitics Launch
                            </span>
                            <span className="fs-7 fw-semibold text-muted">
                              #34560
                            </span>
                          </div>
                          {/*end::Title*/}
                        </a>
                        {/*end::Item*/}
                      </div>
                      {/*end::Items*/}
                    </div>
                    {/*end::Recently viewed*/}
                    {/*begin::Recently viewed*/}
                    <div className="" data-kt-search-element="main">
                      {/*begin::Heading*/}
                      <div className="d-flex flex-stack fw-semibold mb-4">
                        {/*begin::Label*/}
                        <span className="text-muted fs-6 me-2">
                          Recently Searched:
                        </span>
                        {/*end::Label*/}
                        {/*begin::Toolbar*/}
                        <div
                          className="d-flex"
                          data-kt-search-element="toolbar"
                        >
                          {/*begin::Preferences toggle*/}
                          <div
                            data-kt-search-element="preferences-show"
                            className="btn btn-icon w-20px btn-sm btn-active-color-primary me-2 data-bs-toggle="
                            title="Show search preferences"
                          >
                            <i className="ki-duotone ki-setting-2 fs-2">
                              <span className="path1" />
                              <span className="path2" />
                            </i>
                          </div>
                          {/*end::Preferences toggle*/}
                          {/*begin::Advanced search toggle*/}
                          <div
                            data-kt-search-element="advanced-options-form-show"
                            className="btn btn-icon w-20px btn-sm btn-active-color-primary me-n1"
                            data-bs-toggle="tooltip"
                            title="Show more search options"
                          >
                            <i className="ki-duotone ki-down fs-2" />
                          </div>
                          {/*end::Advanced search toggle*/}
                        </div>
                        {/*end::Toolbar*/}
                      </div>
                      {/*end::Heading*/}
                      {/*begin::Items*/}
                      <div className="scroll-y mh-200px mh-lg-325px">
                        {/*begin::Item*/}
                        <div className="d-flex align-items-center mb-5">
                          {/*begin::Symbol*/}
                          <div className="symbol symbol-40px me-4">
                            <span className="symbol-label bg-light">
                              <i className="ki-duotone ki-laptop fs-2 text-primary">
                                <span className="path1" />
                                <span className="path2" />
                              </i>
                            </span>
                          </div>
                          {/*end::Symbol*/}
                          {/*begin::Title*/}
                          <div className="d-flex flex-column">
                            <a
                              href="#"
                              className="fs-6 text-gray-800 text-hover-primary fw-semibold"
                            >
                              BoomApp by Keenthemes
                            </a>
                            <span className="fs-7 text-muted fw-semibold">
                              #45789
                            </span>
                          </div>
                          {/*end::Title*/}
                        </div>
                        {/*end::Item*/}
                        {/*begin::Item*/}
                        <div className="d-flex align-items-center mb-5">
                          {/*begin::Symbol*/}
                          <div className="symbol symbol-40px me-4">
                            <span className="symbol-label bg-light">
                              <i className="ki-duotone ki-chart-simple fs-2 text-primary">
                                <span className="path1" />
                                <span className="path2" />
                                <span className="path3" />
                                <span className="path4" />
                              </i>
                            </span>
                          </div>
                          {/*end::Symbol*/}
                          {/*begin::Title*/}
                          <div className="d-flex flex-column">
                            <a
                              href="#"
                              className="fs-6 text-gray-800 text-hover-primary fw-semibold"
                            >
                              "Kept API Project Meeting
                            </a>
                            <span className="fs-7 text-muted fw-semibold">
                              #84050
                            </span>
                          </div>
                          {/*end::Title*/}
                        </div>
                        {/*end::Item*/}
                        {/*begin::Item*/}
                        <div className="d-flex align-items-center mb-5">
                          {/*begin::Symbol*/}
                          <div className="symbol symbol-40px me-4">
                            <span className="symbol-label bg-light">
                              <i className="ki-duotone ki-chart fs-2 text-primary">
                                <span className="path1" />
                                <span className="path2" />
                              </i>
                            </span>
                          </div>
                          {/*end::Symbol*/}
                          {/*begin::Title*/}
                          <div className="d-flex flex-column">
                            <a
                              href="#"
                              className="fs-6 text-gray-800 text-hover-primary fw-semibold"
                            >
                              "KPI Monitoring App Launch
                            </a>
                            <span className="fs-7 text-muted fw-semibold">
                              #84250
                            </span>
                          </div>
                          {/*end::Title*/}
                        </div>
                        {/*end::Item*/}
                        {/*begin::Item*/}
                        <div className="d-flex align-items-center mb-5">
                          {/*begin::Symbol*/}
                          <div className="symbol symbol-40px me-4">
                            <span className="symbol-label bg-light">
                              <i className="ki-duotone ki-chart-line-down fs-2 text-primary">
                                <span className="path1" />
                                <span className="path2" />
                              </i>
                            </span>
                          </div>
                          {/*end::Symbol*/}
                          {/*begin::Title*/}
                          <div className="d-flex flex-column">
                            <a
                              href="#"
                              className="fs-6 text-gray-800 text-hover-primary fw-semibold"
                            >
                              Project Reference FAQ
                            </a>
                            <span className="fs-7 text-muted fw-semibold">
                              #67945
                            </span>
                          </div>
                          {/*end::Title*/}
                        </div>
                        {/*end::Item*/}
                        {/*begin::Item*/}
                        <div className="d-flex align-items-center mb-5">
                          {/*begin::Symbol*/}
                          <div className="symbol symbol-40px me-4">
                            <span className="symbol-label bg-light">
                              <i className="ki-duotone ki-sms fs-2 text-primary">
                                <span className="path1" />
                                <span className="path2" />
                              </i>
                            </span>
                          </div>
                          {/*end::Symbol*/}
                          {/*begin::Title*/}
                          <div className="d-flex flex-column">
                            <a
                              href="#"
                              className="fs-6 text-gray-800 text-hover-primary fw-semibold"
                            >
                              "FitPro App Development
                            </a>
                            <span className="fs-7 text-muted fw-semibold">
                              #84250
                            </span>
                          </div>
                          {/*end::Title*/}
                        </div>
                        {/*end::Item*/}
                        {/*begin::Item*/}
                        <div className="d-flex align-items-center mb-5">
                          {/*begin::Symbol*/}
                          <div className="symbol symbol-40px me-4">
                            <span className="symbol-label bg-light">
                              <i className="ki-duotone ki-bank fs-2 text-primary">
                                <span className="path1" />
                                <span className="path2" />
                              </i>
                            </span>
                          </div>
                          {/*end::Symbol*/}
                          {/*begin::Title*/}
                          <div className="d-flex flex-column">
                            <a
                              href="#"
                              className="fs-6 text-gray-800 text-hover-primary fw-semibold"
                            >
                              Shopix Mobile App
                            </a>
                            <span className="fs-7 text-muted fw-semibold">
                              #45690
                            </span>
                          </div>
                          {/*end::Title*/}
                        </div>
                        {/*end::Item*/}
                        {/*begin::Item*/}
                        <div className="d-flex align-items-center mb-5">
                          {/*begin::Symbol*/}
                          <div className="symbol symbol-40px me-4">
                            <span className="symbol-label bg-light">
                              <i className="ki-duotone ki-chart-line-down fs-2 text-primary">
                                <span className="path1" />
                                <span className="path2" />
                              </i>
                            </span>
                          </div>
                          {/*end::Symbol*/}
                          {/*begin::Title*/}
                          <div className="d-flex flex-column">
                            <a
                              href="#"
                              className="fs-6 text-gray-800 text-hover-primary fw-semibold"
                            >
                              "Landing UI Design" Launch
                            </a>
                            <span className="fs-7 text-muted fw-semibold">
                              #24005
                            </span>
                          </div>
                          {/*end::Title*/}
                        </div>
                        {/*end::Item*/}
                      </div>
                      {/*end::Items*/}
                    </div>
                    {/*end::Recently viewed*/}
                    {/*begin::Empty*/}
                    <div
                      data-kt-search-element="empty"
                      className="text-center d-none"
                    >
                      {/*begin::Icon*/}
                      <div className="pt-10 pb-10">
                        <i className="ki-duotone ki-search-list fs-4x opacity-50">
                          <span className="path1" />
                          <span className="path2" />
                          <span className="path3" />
                        </i>
                      </div>
                      {/*end::Icon*/}
                      {/*begin::Message*/}
                      <div className="pb-15 fw-semibold">
                        <h3 className="text-gray-600 fs-5 mb-2">
                          No result found
                        </h3>
                        <div className="text-muted fs-7">
                          Please try again with a different query
                        </div>
                      </div>
                      {/*end::Message*/}
                    </div>
                    {/*end::Empty*/}
                  </div>
                  {/*end::Wrapper*/}
                  {/*begin::Preferences*/}
                  <form
                    data-kt-search-element="advanced-options-form"
                    className="pt-1 d-none"
                  >
                    {/*begin::Heading*/}
                    <h3 className="fw-semibold text-dark mb-7">
                      Advanced Search
                    </h3>
                    {/*end::Heading*/}
                    {/*begin::Input group*/}
                    <div className="mb-5">
                      <input
                        type="text"
                        className="form-control form-control-sm form-control-solid"
                        placeholder="Contains the word"
                        name="query"
                      />
                    </div>
                    {/*end::Input group*/}
                    {/*begin::Input group*/}
                    <div className="mb-5">
                      {/*begin::Radio group*/}
                      <div className="nav-group nav-group-fluid">
                        {/*begin::Option*/}
                        <label>
                          <input
                            type="radio"
                            className="btn-check"
                            name="type"

                            defaultChecked
                          />
                          <span className="btn btn-sm btn-color-muted btn-active btn-active-primary">
                            All
                          </span>
                        </label>
                        {/*end::Option*/}
                        {/*begin::Option*/}
                        <label>
                          <input
                            type="radio"
                            className="btn-check"
                            name="type"

                          />
                          <span className="btn btn-sm btn-color-muted btn-active btn-active-primary px-4">
                            Users
                          </span>
                        </label>
                        {/*end::Option*/}
                        {/*begin::Option*/}
                        <label>
                          <input
                            type="radio"
                            className="btn-check"
                            name="type"

                          />
                          <span className="btn btn-sm btn-color-muted btn-active btn-active-primary px-4">
                            Orders
                          </span>
                        </label>
                        {/*end::Option*/}
                        {/*begin::Option*/}
                        <label>
                          <input
                            type="radio"
                            className="btn-check"
                            name="type"

                          />
                          <span className="btn btn-sm btn-color-muted btn-active btn-active-primary px-4">
                            Projects
                          </span>
                        </label>
                        {/*end::Option*/}
                      </div>
                      {/*end::Radio group*/}
                    </div>
                    {/*end::Input group*/}
                    {/*begin::Input group*/}
                    <div className="mb-5">
                      <input
                        type="text"
                        name="assignedto"
                        className="form-control form-control-sm form-control-solid"
                        placeholder="Assigned to"

                      />
                    </div>
                    {/*end::Input group*/}
                    {/*begin::Input group*/}
                    <div className="mb-5">
                      <input
                        type="text"
                        name="collaborators"
                        className="form-control form-control-sm form-control-solid"
                        placeholder="Collaborators"

                      />
                    </div>
                    {/*end::Input group*/}
                    {/*begin::Input group*/}
                    <div className="mb-5">
                      {/*begin::Radio group*/}
                      <div className="nav-group nav-group-fluid">
                        {/*begin::Option*/}
                        <label>
                          <input
                            type="radio"
                            className="btn-check"
                            name="attachment"

                            defaultChecked
                          />
                          <span className="btn btn-sm btn-color-muted btn-active btn-active-primary">
                            Has attachment
                          </span>
                        </label>
                        {/*end::Option*/}
                        {/*begin::Option*/}
                        <label>
                          <input
                            type="radio"
                            className="btn-check"
                            name="attachment"

                          />
                          <span className="btn btn-sm btn-color-muted btn-active btn-active-primary px-4">
                            Any
                          </span>
                        </label>
                        {/*end::Option*/}
                      </div>
                      {/*end::Radio group*/}
                    </div>
                    {/*end::Input group*/}
                    {/*begin::Input group*/}
                    <div className="mb-5">
                      <select
                        name="timezone"
                        aria-label="Select a Timezone"
                        data-control="select2"
                        data-dropdown-parent="#kt_header_search"
                        data-placeholder="date_period"
                        className="form-select form-select-sm form-select-solid"
                      >
                        <option value="next">Within the next</option>
                        <option value="last">Within the last</option>
                        <option value="between">Between</option>
                        <option value="on">On</option>
                      </select>
                    </div>
                    {/*end::Input group*/}
                    {/*begin::Input group*/}
                    <div className="row mb-8">
                      {/*begin::Col*/}
                      <div className="col-6">
                        <input
                          type="number"
                          name="date_number"
                          className="form-control form-control-sm form-control-solid"
                          placeholder="Lenght"

                        />
                      </div>
                      {/*end::Col*/}
                      {/*begin::Col*/}
                      <div className="col-6">
                        <select
                          name="date_typer"
                          aria-label="Select a Timezone"
                          data-control="select2"
                          data-dropdown-parent="#kt_header_search"
                          data-placeholder="Period"
                          className="form-select form-select-sm form-select-solid"
                        >
                          <option value="days">Days</option>
                          <option value="weeks">Weeks</option>
                          <option value="months">Months</option>
                          <option value="years">Years</option>
                        </select>
                      </div>
                      {/*end::Col*/}
                    </div>
                    {/*end::Input group*/}
                    {/*begin::Actions*/}
                    <div className="d-flex justify-content-end">
                      <button
                        type="reset"
                        className="btn btn-sm btn-light fw-bold btn-active-light-primary me-2"
                        data-kt-search-element="advanced-options-form-cancel"
                      >
                        Cancel
                      </button>
                      <a
                        href="../../demo18/dist/pages/search/horizontal.html"
                        className="btn btn-sm fw-bold btn-primary"
                        data-kt-search-element="advanced-options-form-search"
                      >
                        Search
                      </a>
                    </div>
                    {/*end::Actions*/}
                  </form>
                  {/*end::Preferences*/}
                  {/*begin::Preferences*/}
                  <form
                    data-kt-search-element="preferences"
                    className="pt-1 d-none"
                  >
                    {/*begin::Heading*/}
                    <h3 className="fw-semibold text-dark mb-7">
                      Search Preferences
                    </h3>
                    {/*end::Heading*/}
                    {/*begin::Input group*/}
                    <div className="pb-4 border-bottom">
                      <label className="form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack">
                        <span className="form-check-label text-gray-700 fs-6 fw-semibold ms-0 me-2">
                          Projects
                        </span>
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultChecked
                        />
                      </label>
                    </div>
                    {/*end::Input group*/}
                    {/*begin::Input group*/}
                    <div className="py-4 border-bottom">
                      <label className="form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack">
                        <span className="form-check-label text-gray-700 fs-6 fw-semibold ms-0 me-2">
                          Targets
                        </span>
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultChecked
                        />
                      </label>
                    </div>
                    {/*end::Input group*/}
                    {/*begin::Input group*/}
                    <div className="py-4 border-bottom">
                      <label className="form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack">
                        <span className="form-check-label text-gray-700 fs-6 fw-semibold ms-0 me-2">
                          Affiliate Programs
                        </span>
                        <input
                          className="form-check-input"
                          type="checkbox"
                        />
                      </label>
                    </div>
                    {/*end::Input group*/}
                    {/*begin::Input group*/}
                    <div className="py-4 border-bottom">
                      <label className="form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack">
                        <span className="form-check-label text-gray-700 fs-6 fw-semibold ms-0 me-2">
                          Referrals
                        </span>
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultChecked
                        />
                      </label>
                    </div>
                    {/*end::Input group*/}
                    {/*begin::Input group*/}
                    <div className="py-4 border-bottom">
                      <label className="form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack">
                        <span className="form-check-label text-gray-700 fs-6 fw-semibold ms-0 me-2">
                          Users
                        </span>
                        <input
                          className="form-check-input"
                          type="checkbox"
                        />
                      </label>
                    </div>
                    {/*end::Input group*/}
                    {/*begin::Actions*/}
                    <div className="d-flex justify-content-end pt-7">
                      <button
                        type="reset"
                        className="btn btn-sm btn-light fw-bold btn-active-light-primary me-2"
                        data-kt-search-element="preferences-dismiss"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="btn btn-sm fw-bold btn-primary"
                      >
                        Save Changes
                      </button>
                    </div>
                    {/*end::Actions*/}
                  </form>
                  {/*end::Preferences*/}
                </div>
                {/*end::Menu*/}
              </div>
              {/*end::Search*/}
            </div>
            {/*end:Search*/}
          </div>
          {/*end::Brand*/}
          {/*begin::Toolbar wrapper*/}
          <div className="d-flex align-items-stretch flex-shrink-0">
            {/*begin::Button*/}
            <a
              href="#"
              className="btn btn-light-success me-1"
              data-bs-toggle="modal"
              data-bs-target="#kt_modal_create_project"
            >
              Create
            </a>
            {/*end::Button*/}
            {/*begin::Activities*/}
            <div className="d-flex align-items-center ms-1 ms-lg-3">
              {/*begin::drawer toggle*/}
              <div
                className="position-relative btn btn-color-gray-800 btn-icon btn-active-light-primary w-30px h-30px w-md-40px h-md-40px"
                id="kt_drawer_chat_toggle"
              >
                <i className="ki-duotone ki-notification-status fs-1">
                  <span className="path1" />
                  <span className="path2" />
                  <span className="path3" />
                  <span className="path4" />
                </i>
                <span className="bullet bullet-dot bg-danger h-6px w-6px position-absolute translate-middle top-0 start-50 animation-blink" />
              </div>
              {/*end::drawer toggle*/}
            </div>
            {/*end::Activities*/}
            {/*begin::Theme mode*/}
            <div className="d-flex align-items-center ms-1 ms-lg-3">
              {/*begin::Menu toggle*/}
              <a
                href="#"
                className="btn btn-color-gray-800 btn-icon btn-active-light-primary w-30px h-30px w-md-40px h-md-40px"
                data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                data-kt-menu-attach="parent"
                data-kt-menu-placement="bottom-end"
              >
                <i className="ki-duotone ki-night-day theme-light-show fs-1">
                  <span className="path1" />
                  <span className="path2" />
                  <span className="path3" />
                  <span className="path4" />
                  <span className="path5" />
                  <span className="path6" />
                  <span className="path7" />
                  <span className="path8" />
                  <span className="path9" />
                  <span className="path10" />
                </i>
                <i className="ki-duotone ki-moon theme-dark-show fs-1">
                  <span className="path1" />
                  <span className="path2" />
                </i>
              </a>
              {/*begin::Menu toggle*/}
              {/*begin::Menu*/}
              <div
                className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-title-gray-700 menu-icon-gray-500 menu-active-bg menu-state-color fw-semibold py-4 fs-base w-150px"
                data-kt-menu="true"
                data-kt-element="theme-mode-menu"
              >
                {/*begin::Menu item*/}
                <div className="menu-item px-3 my-0">
                  <a
                    href="#"
                    className="menu-link px-3 py-2"
                    data-kt-element="mode"
                    data-kt-value="light"
                  >
                    <span className="menu-icon" data-kt-element="icon">
                      <i className="ki-duotone ki-night-day fs-2">
                        <span className="path1" />
                        <span className="path2" />
                        <span className="path3" />
                        <span className="path4" />
                        <span className="path5" />
                        <span className="path6" />
                        <span className="path7" />
                        <span className="path8" />
                        <span className="path9" />
                        <span className="path10" />
                      </i>
                    </span>
                    <span className="menu-title">Light</span>
                  </a>
                </div>
                {/*end::Menu item*/}
                {/*begin::Menu item*/}
                <div className="menu-item px-3 my-0">
                  <a
                    href="#"
                    className="menu-link px-3 py-2"
                    data-kt-element="mode"
                    data-kt-value="dark"
                  >
                    <span className="menu-icon" data-kt-element="icon">
                      <i className="ki-duotone ki-moon fs-2">
                        <span className="path1" />
                        <span className="path2" />
                      </i>
                    </span>
                    <span className="menu-title">Dark</span>
                  </a>
                </div>
                {/*end::Menu item*/}
                {/*begin::Menu item*/}
                <div className="menu-item px-3 my-0">
                  <a
                    href="#"
                    className="menu-link px-3 py-2"
                    data-kt-element="mode"
                    data-kt-value="system"
                  >
                    <span className="menu-icon" data-kt-element="icon">
                      <i className="ki-duotone ki-screen fs-2">
                        <span className="path1" />
                        <span className="path2" />
                        <span className="path3" />
                        <span className="path4" />
                      </i>
                    </span>
                    <span className="menu-title">System</span>
                  </a>
                </div>
                {/*end::Menu item*/}
              </div>
              {/*end::Menu*/}
            </div>
            {/*end::Theme mode*/}
            {/*begin::User menu*/}
            <div className="d-flex align-items-center position-relative ms-1 ms-lg-3">
              <div
                className="btn btn-color-gray-800 btn-icon btn-active-light-primary w-30px h-30px w-md-40px h-md-40px  btn btn-color-gray-800 btn-icon btn-active-light-primary w-30px h-30px w-md-40px h-md-40px"
                onClick={() => setAcc(!acc)}
              >
                <i className="ki-duotone ki-user fs-1">
                  <span className="path1" />
                  <span className="path2" />
                </i>
              </div>
              {/*begin::User account menu*/}
              <div
                className={`menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg menu-state-color fw-semibold py-4 fs-6 w-275px ${acc && ' position-absolute bg-white top-100 left-50 d-flex shadow-lg'}`}
                data-kt-menu="true"
              >
                {/*begin::Menu item*/}
                <div className="menu-item px-3">
                  <div className="menu-content d-flex align-items-center px-3">
                    {/*begin::Username*/}
                    <div className="d-flex flex-column">
                      <div className="fw-bold d-flex align-items-center fs-5 text-capitalize">
                        {admin.username}
                        <span className="badge badge-light-success fw-bold fs-8 px-2 py-1 ms-2">
                          Pro
                        </span>
                      </div>
                      <a
                        href="#"
                        className="fw-semibold text-muted text-hover-primary fs-7"
                      >
                        {admin.email}
                      </a>
                    </div>
                    {/*end::Username*/}
                  </div>
                </div>
                {/*end::Menu item*/}
                {/*begin::Menu separator*/}
                <div className="separator my-2" />
                {/*end::Menu separator*/}
                {/*begin::Menu item*/}
                <div className="menu-item px-5">
                  <a
                    className="menu-link px-5"
                  >
                    My Profile
                  </a>
                </div>
                {/*end::Menu item*/}
                {/*begin::Menu item*/}
                <div className="menu-item px-5">
                  <a
                    className="menu-link px-5"
                  >
                    <span className="menu-text">My Projects</span>
                    <span className="menu-badge">
                      <span className="badge badge-light-danger badge-circle fw-bold fs-7">
                        3
                      </span>
                    </span>
                  </a>
                </div>
                {/*end::Menu item*/}
                {/*begin::Menu item*/}
                <div
                  className="menu-item px-5"
                  data-kt-menu-trigger="{default: 'click', lg: 'hover'}"
                  data-kt-menu-placement="right-start"
                  data-kt-menu-offset="-15px, 0"
                >
                  <a href="#" className="menu-link px-5">
                    <span className="menu-title">My Subscription</span>
                    <span className="menu-arrow" />
                  </a>
                  {/*begin::Menu sub*/}
                  <div className="menu-sub menu-sub-dropdown w-175px py-4">
                    {/*begin::Menu item*/}
                    <div className="menu-item px-3">
                      <a
                        className="menu-link px-5"
                      >
                        Referrals
                      </a>
                    </div>
                    {/*end::Menu item*/}
                    {/*begin::Menu item*/}
                    <div className="menu-item px-3">
                      <a
                        className="menu-link px-5"
                      >
                        Billing
                      </a>
                    </div>
                    {/*end::Menu item*/}
                    {/*begin::Menu item*/}
                    <div className="menu-item px-3">
                      <a
                        className="menu-link px-5"
                      >
                        Payments
                      </a>
                    </div>
                    {/*end::Menu item*/}
                    {/*begin::Menu item*/}
                    <div className="menu-item px-3">
                      <a
                        className="menu-link d-flex flex-stack px-5"
                      >
                        Statements
                        <span
                          className="ms-2 lh-0"
                          data-bs-toggle="tooltip"
                          title="View your statements"
                        >
                          <i className="ki-duotone ki-information-5 fs-5">
                            <span className="path1" />
                            <span className="path2" />
                            <span className="path3" />
                          </i>
                        </span>
                      </a>
                    </div>
                    {/*end::Menu item*/}
                    {/*begin::Menu separator*/}
                    <div className="separator my-2" />
                    {/*end::Menu separator*/}
                    {/*begin::Menu item*/}
                    <div className="menu-item px-3">
                      <div className="menu-content px-3">
                        <label className="form-check form-switch form-check-custom form-check-solid">
                          <input
                            className="form-check-input w-30px h-20px"
                            type="checkbox"
                            defaultChecked
                            name="notifications"
                          />
                          <span className="form-check-label text-muted fs-7">
                            Notifications
                          </span>
                        </label>
                      </div>
                    </div>
                    {/*end::Menu item*/}
                  </div>
                  {/*end::Menu sub*/}
                </div>
                {/*end::Menu item*/}
                {/*begin::Menu item*/}
                <div className="menu-item px-5">
                  <a
                    className="menu-link px-5"
                  >
                    My Statements
                  </a>
                </div>
                {/*end::Menu item*/}
                {/*begin::Menu separator*/}
                <div className="separator my-2" />

                {/*end::Menu separator*/}
                <div className="menu-item px-5 my-1">
                  <a
                    className="menu-link px-5"
                  >
                    Account Settings
                  </a>
                </div>

                <div className="menu-item px-5" onClick={() => {
                  dispatch(adminLogout())
                }}>
                  <a
                    className="menu-link px-5"
                  >
                    Sign Out
                  </a>
                </div>
              </div>
            </div>

            <div className="d-flex align-items-center ms-1 ms-lg-3">
              <div
                className="btn btn-icon btn-danger position-relative w-30px h-30px w-md-40px h-md-40px"
                id="kt_drawer_chat_toggle"
              >
                3
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="kt_aside"
        className="aside px-2 d-block"
        style={menu ? { backgroundColor: 'white', opacity: 1, overflowY: 'scroll', transform: 'translateX(0)' } : { transform: 'translateX(-100%)' }}
        data-kt-drawer="true"
        ref={menuRef}
        data-kt-drawer-name="aside"
        data-kt-drawer-activate="true"
        data-kt-drawer-overlay="true"
        data-kt-drawer-width="{default:'200px', '300px': '285px'}"
        data-kt-drawer-direction="start"
        data-kt-drawer-toggle="#kt_aside_toggle"
      >
        {/*begin::Aside menu*/}
        <div className="aside-menu flex-column-fluid">
          {/*begin::Aside Menu*/}
          <div
            className="hover-scroll-overlay-y my-5 mx-2"
            id="kt_aside_menu_wrapper"
            data-kt-scroll="true"
            data-kt-scroll-activate="true"
            data-kt-scroll-height="auto"
            data-kt-scroll-dependencies="#kt_aside_footer"
            data-kt-scroll-wrappers="#kt_aside, #kt_aside_menu"
            data-kt-scroll-offset="2px"
          >
            {/*begin::Menu*/}
            <div
              className="menu menu-column menu-sub-indention menu-active-bg menu-state-primary menu-title-gray-700 fs-6 menu-rounded w-100 fw-semibold"
              id="#kt_aside_menu"
              data-kt-menu="true"
            >
              {/*begin:Menu item*/}
              <div
                data-kt-menu-trigger="click"
                className="menu-item here show menu-accordion"
              >
                {/*begin:Menu link*/}
                <span className="menu-link">
                  <span className="menu-icon">
                    <i className="ki-duotone ki-element-11 fs-2">
                      <span className="path1" />
                      <span className="path2" />
                      <span className="path3" />
                      <span className="path4" />
                    </i>
                  </span>
                  <span className="menu-title">Dashboards</span>
                  <span className="menu-arrow" />
                </span>
              </div>
              {/*end:Menu item*/}
              {/*begin:Menu item*/}
              <div className="menu-item pt-5">
                {/*begin:Menu content*/}
                <div className="menu-content">
                  <span className="menu-heading fw-bold text-uppercase fs-7">
                    Pages
                  </span>
                </div>
                {/*end:Menu content*/}
              </div>
              {/*end:Menu item*/}
              {/*begin:Menu item*/}
              <div
                data-kt-menu-trigger="click"
                className="menu-item menu-accordion"
              >
                {/*begin:Menu link*/}
                <span className="menu-link">
                  <span className="menu-icon">
                    <i className="ki-duotone ki-address-book fs-2">
                      <span className="path1" />
                      <span className="path2" />
                      <span className="path3" />
                    </i>
                  </span>
                  <span className="menu-title" onClick={() => navigatePages('users')}>Users</span>

                </span>
                {/*end:Menu link*/}
              </div>
              {/*end:Menu item*/}
              {/*begin:Menu item*/}
              <div
                data-kt-menu-trigger="click"
                className="menu-item menu-accordion"
              >
                {/*begin:Menu link*/}
                <span className="menu-link">
                  <span className="menu-icon">
                    <i className="ki-duotone ki-element-plus fs-2">
                      <span className="path1" />
                      <span className="path2" />
                      <span className="path3" />
                      <span className="path4" />
                      <span className="path5" />
                    </i>
                  </span>
                  <span className="menu-title" onClick={() => navigatePages('products')}>Products</span>
                </span>
                {/*end:Menu link*/}
              </div>
              {/*end:Menu item*/}
              {/*begin:Menu item*/}
              <div
                data-kt-menu-trigger="click"
                className="menu-item menu-accordion"
              >
                {/*begin:Menu link*/}
                <span className="menu-link">
                  <span className="menu-icon">
                    <i className="ki-duotone ki-user fs-2">
                      <span className="path1" />
                      <span className="path2" />
                    </i>
                  </span>
                  <span className="menu-title" onClick={() => navigatePages('add-product')}>Add Product</span>

                </span>
                {/*end:Menu link*/}
              </div>
              {/*end:Menu item*/}
              {/*begin:Menu item*/}
              <div
                data-kt-menu-trigger="{default: 'click', lg: 'hover'}"
                data-kt-menu-placement="right-start"
                className="menu-item menu-lg-down-accordion menu-sub-lg-down-indention"
              >
                {/*begin:Menu link*/}
                <span className="menu-link">
                  <span className="menu-icon">
                    <i className="ki-duotone ki-file fs-2">
                      <span className="path1" />
                      <span className="path2" />
                    </i>
                  </span>
                  <span className="menu-title" onClick={() => navigatePages('categories')}>Categories</span>
                </span>
                {/*end:Menu link*/}
              </div>
              {/*end:Menu item*/}
              {/*begin:Menu item*/}
              <div
                data-kt-menu-trigger="click"
                className="menu-item menu-accordion"
              >
                {/*begin:Menu link*/}
                <span className="menu-link">
                  <span className="menu-icon">
                    <i className="ki-duotone ki-abstract-39 fs-2">
                      <span className="path1" />
                      <span className="path2" />
                    </i>
                  </span>
                  <span className="menu-title" onClick={() => navigatePages('add-category')}>Add Category</span>
                </span>
                {/*end:Menu link*/}
              </div>
              {/*end:Menu item*/}
              {/*begin:Menu item*/}
              <div
                data-kt-menu-trigger="click"
                className="menu-item menu-accordion"
              >
                {/*begin:Menu link*/}
                <span className="menu-link">
                  <span className="menu-icon">
                    <i className="ki-duotone ki-bank fs-2">
                      <span className="path1" />
                      <span className="path2" />
                    </i>
                  </span>
                  <span className="menu-title" onClick={() => navigatePages('orders')}>Orders</span>

                </span>
                {/*end:Menu link*/}
                {/*begin:Menu sub*/}
                <div className="menu-sub menu-sub-accordion menu-active-bg">
                  {/*begin:Menu item*/}
                  <div className="menu-item">
                    {/*begin:Menu link*/}
                    <a
                      className="menu-link"
                      href="../../demo18/dist/pages/blog/home.html"
                    >
                      <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                      </span>
                      <span className="menu-title">Blog Home</span>
                    </a>
                    {/*end:Menu link*/}
                  </div>
                  {/*end:Menu item*/}
                  {/*begin:Menu item*/}
                  <div className="menu-item">
                    {/*begin:Menu link*/}
                    <a
                      className="menu-link"
                      href="../../demo18/dist/pages/blog/post.html"
                    >
                      <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                      </span>
                      <span className="menu-title">Blog Post</span>
                    </a>
                    {/*end:Menu link*/}
                  </div>
                  {/*end:Menu item*/}
                </div>
                {/*end:Menu sub*/}
              </div>
              {/*end:Menu item*/}
              {/*begin:Menu item*/}
              <div
                data-kt-menu-trigger="click"
                className="menu-item menu-accordion"
              >
                {/*begin:Menu link*/}
                <span className="menu-link">
                  <span className="menu-icon">
                    <i className="ki-duotone ki-chart-pie-3 fs-2">
                      <span className="path1" />
                      <span className="path2" />
                      <span className="path3" />
                    </i>
                  </span>
                  <span className="menu-title">FAQ</span>
                  <span className="menu-arrow" />
                </span>
                {/*end:Menu link*/}
                {/*begin:Menu sub*/}
                <div className="menu-sub menu-sub-accordion menu-active-bg">
                  {/*begin:Menu item*/}
                  <div className="menu-item">
                    {/*begin:Menu link*/}
                    <a
                      className="menu-link"
                      href="../../demo18/dist/pages/faq/classic.html"
                    >
                      <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                      </span>
                      <span className="menu-title">FAQ Classic</span>
                    </a>
                    {/*end:Menu link*/}
                  </div>
                  {/*end:Menu item*/}
                  {/*begin:Menu item*/}
                  <div className="menu-item">
                    {/*begin:Menu link*/}
                    <a
                      className="menu-link"
                      href="../../demo18/dist/pages/faq/extended.html"
                    >
                      <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                      </span>
                      <span className="menu-title">FAQ Extended</span>
                    </a>
                    {/*end:Menu link*/}
                  </div>
                  {/*end:Menu item*/}
                </div>
                {/*end:Menu sub*/}
              </div>
              {/*end:Menu item*/}
              {/*begin:Menu item*/}
              <div
                data-kt-menu-trigger="click"
                className="menu-item menu-accordion"
              >
                {/*begin:Menu link*/}
                <span className="menu-link">
                  <span className="menu-icon">
                    <i className="ki-duotone ki-bucket fs-2">
                      <span className="path1" />
                      <span className="path2" />
                      <span className="path3" />
                      <span className="path4" />
                    </i>
                  </span>
                  <span className="menu-title">Pricing</span>
                  <span className="menu-arrow" />
                </span>
                {/*end:Menu link*/}
                {/*begin:Menu sub*/}
                <div className="menu-sub menu-sub-accordion menu-active-bg">
                  {/*begin:Menu item*/}
                  <div className="menu-item">
                    {/*begin:Menu link*/}
                    <a
                      className="menu-link"
                      href="../../demo18/dist/pages/pricing.html"
                    >
                      <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                      </span>
                      <span className="menu-title">Column Pricing</span>
                    </a>
                    {/*end:Menu link*/}
                  </div>
                  {/*end:Menu item*/}
                  {/*begin:Menu item*/}
                  <div className="menu-item">
                    {/*begin:Menu link*/}
                    <a
                      className="menu-link"
                      href="../../demo18/dist/pages/pricing/table.html"
                    >
                      <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                      </span>
                      <span className="menu-title">Table Pricing</span>
                    </a>
                    {/*end:Menu link*/}
                  </div>
                  {/*end:Menu item*/}
                </div>
                {/*end:Menu sub*/}
              </div>
              {/*end:Menu item*/}
              {/*begin:Menu item*/}
              <div
                data-kt-menu-trigger="click"
                className="menu-item menu-accordion"
              >
                {/*begin:Menu link*/}
                <span className="menu-link">
                  <span className="menu-icon">
                    <i className="ki-duotone ki-call fs-2">
                      <span className="path1" />
                      <span className="path2" />
                      <span className="path3" />
                      <span className="path4" />
                      <span className="path5" />
                      <span className="path6" />
                      <span className="path7" />
                      <span className="path8" />
                    </i>
                  </span>
                  <span className="menu-title">Careers</span>
                  <span className="menu-arrow" />
                </span>
                {/*end:Menu link*/}
                {/*begin:Menu sub*/}
                <div className="menu-sub menu-sub-accordion">
                  {/*begin:Menu item*/}
                  <div className="menu-item">
                    {/*begin:Menu link*/}
                    <a
                      className="menu-link"
                      href="../../demo18/dist/pages/careers/list.html"
                    >
                      <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                      </span>
                      <span className="menu-title">Careers List</span>
                    </a>
                    {/*end:Menu link*/}
                  </div>
                  {/*end:Menu item*/}
                  {/*begin:Menu item*/}
                  <div className="menu-item">
                    {/*begin:Menu link*/}
                    <a
                      className="menu-link"
                      href="../../demo18/dist/pages/careers/apply.html"
                    >
                      <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                      </span>
                      <span className="menu-title">Careers Apply</span>
                    </a>
                    {/*end:Menu link*/}
                  </div>
                  {/*end:Menu item*/}
                </div>
                {/*end:Menu sub*/}
              </div>
              {/*end:Menu item*/}
              {/*begin:Menu item*/}
              <div
                data-kt-menu-trigger="click"
                className="menu-item menu-accordion"
              >
                {/*begin:Menu link*/}
                <span className="menu-link">
                  <span className="menu-icon">
                    <i className="ki-duotone ki-color-swatch fs-2">
                      <span className="path1" />
                      <span className="path2" />
                      <span className="path3" />
                      <span className="path4" />
                      <span className="path5" />
                      <span className="path6" />
                      <span className="path7" />
                      <span className="path8" />
                      <span className="path9" />
                      <span className="path10" />
                      <span className="path11" />
                      <span className="path12" />
                      <span className="path13" />
                      <span className="path14" />
                      <span className="path15" />
                      <span className="path16" />
                      <span className="path17" />
                      <span className="path18" />
                      <span className="path19" />
                      <span className="path20" />
                      <span className="path21" />
                    </i>
                  </span>
                  <span className="menu-title">Utilities</span>
                  <span className="menu-arrow" />
                </span>
                {/*end:Menu link*/}
                {/*begin:Menu sub*/}
                <div className="menu-sub menu-sub-accordion">
                  {/*begin:Menu item*/}
                  <div
                    data-kt-menu-trigger="click"
                    className="menu-item menu-accordion"
                  >
                    {/*begin:Menu link*/}
                    <span className="menu-link">
                      <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                      </span>
                      <span className="menu-title">Modals</span>
                      <span className="menu-arrow" />
                    </span>
                    {/*end:Menu link*/}
                    {/*begin:Menu sub*/}
                    <div className="menu-sub menu-sub-accordion">
                      {/*begin:Menu item*/}
                      <div
                        data-kt-menu-trigger="click"
                        className="menu-item menu-accordion"
                      >
                        {/*begin:Menu link*/}
                        <span className="menu-link">
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">General</span>
                          <span className="menu-arrow" />
                        </span>
                        {/*end:Menu link*/}
                        {/*begin:Menu sub*/}
                        <div className="menu-sub menu-sub-accordion menu-active-bg">
                          {/*begin:Menu item*/}
                          <div className="menu-item">
                            {/*begin:Menu link*/}
                            <a
                              className="menu-link"
                              href="../../demo18/dist/utilities/modals/general/invite-friends.html"
                            >
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                              </span>
                              <span className="menu-title">Invite Friends</span>
                            </a>
                            {/*end:Menu link*/}
                          </div>
                          {/*end:Menu item*/}
                          {/*begin:Menu item*/}
                          <div className="menu-item">
                            {/*begin:Menu link*/}
                            <a
                              className="menu-link"
                              href="../../demo18/dist/utilities/modals/general/view-users.html"
                            >
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                              </span>
                              <span className="menu-title">View Users</span>
                            </a>
                            {/*end:Menu link*/}
                          </div>
                          {/*end:Menu item*/}
                          {/*begin:Menu item*/}
                          <div className="menu-item">
                            {/*begin:Menu link*/}
                            <a
                              className="menu-link"
                              href="../../demo18/dist/utilities/modals/general/select-users.html"
                            >
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                              </span>
                              <span className="menu-title">Select Users</span>
                            </a>
                            {/*end:Menu link*/}
                          </div>
                          {/*end:Menu item*/}
                          {/*begin:Menu item*/}
                          <div className="menu-item">
                            {/*begin:Menu link*/}
                            <a
                              className="menu-link"
                              href="../../demo18/dist/utilities/modals/general/upgrade-plan.html"
                            >
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                              </span>
                              <span className="menu-title">Upgrade Plan</span>
                            </a>
                            {/*end:Menu link*/}
                          </div>
                          {/*end:Menu item*/}
                          {/*begin:Menu item*/}
                          <div className="menu-item">
                            {/*begin:Menu link*/}
                            <a
                              className="menu-link"
                              href="../../demo18/dist/utilities/modals/general/share-earn.html"
                            >
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                              </span>
                              <span className="menu-title">
                                Share &amp; Earn
                              </span>
                            </a>
                            {/*end:Menu link*/}
                          </div>
                          {/*end:Menu item*/}
                        </div>
                        {/*end:Menu sub*/}
                      </div>
                      {/*end:Menu item*/}
                      {/*begin:Menu item*/}
                      <div
                        data-kt-menu-trigger="click"
                        className="menu-item menu-accordion"
                      >
                        {/*begin:Menu link*/}
                        <span className="menu-link">
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Forms</span>
                          <span className="menu-arrow" />
                        </span>
                        {/*end:Menu link*/}
                        {/*begin:Menu sub*/}
                        <div className="menu-sub menu-sub-accordion menu-active-bg">
                          {/*begin:Menu item*/}
                          <div className="menu-item">
                            {/*begin:Menu link*/}
                            <a
                              className="menu-link"
                              href="../../demo18/dist/utilities/modals/forms/new-target.html"
                            >
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                              </span>
                              <span className="menu-title">New Target</span>
                            </a>
                            {/*end:Menu link*/}
                          </div>
                          {/*end:Menu item*/}
                          {/*begin:Menu item*/}
                          <div className="menu-item">
                            {/*begin:Menu link*/}
                            <a
                              className="menu-link"
                              href="../../demo18/dist/utilities/modals/forms/new-card.html"
                            >
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                              </span>
                              <span className="menu-title">New Card</span>
                            </a>
                            {/*end:Menu link*/}
                          </div>
                          {/*end:Menu item*/}
                          {/*begin:Menu item*/}
                          <div className="menu-item">
                            {/*begin:Menu link*/}
                            <a
                              className="menu-link"
                              href="../../demo18/dist/utilities/modals/forms/new-address.html"
                            >
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                              </span>
                              <span className="menu-title">New Address</span>
                            </a>
                            {/*end:Menu link*/}
                          </div>
                          {/*end:Menu item*/}
                          {/*begin:Menu item*/}
                          <div className="menu-item">
                            {/*begin:Menu link*/}
                            <a
                              className="menu-link"
                              href="../../demo18/dist/utilities/modals/forms/create-api-key.html"
                            >
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                              </span>
                              <span className="menu-title">Create API Key</span>
                            </a>
                            {/*end:Menu link*/}
                          </div>
                          {/*end:Menu item*/}
                          {/*begin:Menu item*/}
                          <div className="menu-item">
                            {/*begin:Menu link*/}
                            <a
                              className="menu-link"
                              href="../../demo18/dist/utilities/modals/forms/bidding.html"
                            >
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                              </span>
                              <span className="menu-title">Bidding</span>
                            </a>
                            {/*end:Menu link*/}
                          </div>
                          {/*end:Menu item*/}
                        </div>
                        {/*end:Menu sub*/}
                      </div>
                      {/*end:Menu item*/}
                      {/*begin:Menu item*/}
                      <div
                        data-kt-menu-trigger="click"
                        className="menu-item menu-accordion"
                      >
                        {/*begin:Menu link*/}
                        <span className="menu-link">
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Wizards</span>
                          <span className="menu-arrow" />
                        </span>
                        {/*end:Menu link*/}
                        {/*begin:Menu sub*/}
                        <div className="menu-sub menu-sub-accordion menu-active-bg">
                          {/*begin:Menu item*/}
                          <div className="menu-item">
                            {/*begin:Menu link*/}
                            <a
                              className="menu-link"
                              href="../../demo18/dist/utilities/modals/wizards/create-app.html"
                            >
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                              </span>
                              <span className="menu-title">Create App</span>
                            </a>
                            {/*end:Menu link*/}
                          </div>
                          {/*end:Menu item*/}
                          {/*begin:Menu item*/}
                          <div className="menu-item">
                            {/*begin:Menu link*/}
                            <a
                              className="menu-link"
                              href="../../demo18/dist/utilities/modals/wizards/create-campaign.html"
                            >
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                              </span>
                              <span className="menu-title">
                                Create Campaign
                              </span>
                            </a>
                            {/*end:Menu link*/}
                          </div>
                          {/*end:Menu item*/}
                          {/*begin:Menu item*/}
                          <div className="menu-item">
                            {/*begin:Menu link*/}
                            <a
                              className="menu-link"
                              href="../../demo18/dist/utilities/modals/wizards/create-account.html"
                            >
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                              </span>
                              <span className="menu-title">
                                Create Business Acc
                              </span>
                            </a>
                            {/*end:Menu link*/}
                          </div>
                          {/*end:Menu item*/}
                          {/*begin:Menu item*/}
                          <div className="menu-item">
                            {/*begin:Menu link*/}
                            <a
                              className="menu-link"
                              href="../../demo18/dist/utilities/modals/wizards/create-project.html"
                            >
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                              </span>
                              <span className="menu-title">Create Project</span>
                            </a>
                            {/*end:Menu link*/}
                          </div>
                          {/*end:Menu item*/}
                          {/*begin:Menu item*/}
                          <div className="menu-item">
                            {/*begin:Menu link*/}
                            <a
                              className="menu-link"
                              href="../../demo18/dist/utilities/modals/wizards/top-up-wallet.html"
                            >
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                              </span>
                              <span className="menu-title">Top Up Wallet</span>
                            </a>
                            {/*end:Menu link*/}
                          </div>
                          {/*end:Menu item*/}
                          {/*begin:Menu item*/}
                          <div className="menu-item">
                            {/*begin:Menu link*/}
                            <a
                              className="menu-link"
                              href="../../demo18/dist/utilities/modals/wizards/offer-a-deal.html"
                            >
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                              </span>
                              <span className="menu-title">Offer a Deal</span>
                            </a>
                            {/*end:Menu link*/}
                          </div>
                          {/*end:Menu item*/}
                          {/*begin:Menu item*/}
                          <div className="menu-item">
                            {/*begin:Menu link*/}
                            <a
                              className="menu-link"
                              href="../../demo18/dist/utilities/modals/wizards/two-factor-authentication.html"
                            >
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                              </span>
                              <span className="menu-title">
                                Two Factor Auth
                              </span>
                            </a>
                            {/*end:Menu link*/}
                          </div>
                          {/*end:Menu item*/}
                        </div>
                        {/*end:Menu sub*/}
                      </div>
                      {/*end:Menu item*/}
                      {/*begin:Menu item*/}
                      <div
                        data-kt-menu-trigger="click"
                        className="menu-item menu-accordion"
                      >
                        {/*begin:Menu link*/}
                        <span className="menu-link">
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Search</span>
                          <span className="menu-arrow" />
                        </span>
                        {/*end:Menu link*/}
                        {/*begin:Menu sub*/}
                        <div className="menu-sub menu-sub-accordion menu-active-bg">
                          {/*begin:Menu item*/}
                          <div className="menu-item">
                            {/*begin:Menu link*/}
                            <a
                              className="menu-link"
                              href="../../demo18/dist/utilities/modals/search/users.html"
                            >
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                              </span>
                              <span className="menu-title">Users</span>
                            </a>
                            {/*end:Menu link*/}
                          </div>
                          {/*end:Menu item*/}
                          {/*begin:Menu item*/}
                          <div className="menu-item">
                            {/*begin:Menu link*/}
                            <a
                              className="menu-link"
                              href="../../demo18/dist/utilities/modals/search/select-location.html"
                            >
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                              </span>
                              <span className="menu-title">
                                Select Location
                              </span>
                            </a>
                            {/*end:Menu link*/}
                          </div>
                          {/*end:Menu item*/}
                        </div>
                        {/*end:Menu sub*/}
                      </div>
                      {/*end:Menu item*/}
                    </div>
                    {/*end:Menu sub*/}
                  </div>
                  {/*end:Menu item*/}
                  {/*begin:Menu item*/}
                  <div
                    data-kt-menu-trigger="click"
                    className="menu-item menu-accordion"
                  >
                    {/*begin:Menu link*/}
                    <span className="menu-link">
                      <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                      </span>
                      <span className="menu-title">Search</span>
                      <span className="menu-arrow" />
                    </span>
                    {/*end:Menu link*/}
                    {/*begin:Menu sub*/}
                    <div className="menu-sub menu-sub-accordion">
                      {/*begin:Menu item*/}
                      <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a
                          className="menu-link"
                          href="../../demo18/dist/utilities/search/horizontal.html"
                        >
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Horizontal</span>
                        </a>
                        {/*end:Menu link*/}
                      </div>
                      {/*end:Menu item*/}
                      {/*begin:Menu item*/}
                      <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a
                          className="menu-link"
                          href="../../demo18/dist/utilities/search/vertical.html"
                        >
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Vertical</span>
                        </a>
                        {/*end:Menu link*/}
                      </div>
                      {/*end:Menu item*/}
                      {/*begin:Menu item*/}
                      <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a
                          className="menu-link"
                          href="../../demo18/dist/utilities/search/users.html"
                        >
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Users</span>
                        </a>
                        {/*end:Menu link*/}
                      </div>
                      {/*end:Menu item*/}
                      {/*begin:Menu item*/}
                      <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a
                          className="menu-link"
                          href="../../demo18/dist/utilities/search/select-location.html"
                        >
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Location</span>
                        </a>
                        {/*end:Menu link*/}
                      </div>
                      {/*end:Menu item*/}
                    </div>
                    {/*end:Menu sub*/}
                  </div>
                  {/*end:Menu item*/}
                  {/*begin:Menu item*/}
                  <div
                    data-kt-menu-trigger="click"
                    className="menu-item menu-accordion"
                  >
                    {/*begin:Menu link*/}
                    <span className="menu-link">
                      <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                      </span>
                      <span className="menu-title">Wizards</span>
                      <span className="menu-arrow" />
                    </span>
                    {/*end:Menu link*/}
                    {/*begin:Menu sub*/}
                    <div className="menu-sub menu-sub-accordion">
                      {/*begin:Menu item*/}
                      <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a
                          className="menu-link"
                          href="../../demo18/dist/utilities/wizards/horizontal.html"
                        >
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Horizontal</span>
                        </a>
                        {/*end:Menu link*/}
                      </div>
                      {/*end:Menu item*/}
                      {/*begin:Menu item*/}
                      <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a
                          className="menu-link"
                          href="../../demo18/dist/utilities/wizards/vertical.html"
                        >
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Vertical</span>
                        </a>
                        {/*end:Menu link*/}
                      </div>
                      {/*end:Menu item*/}
                      {/*begin:Menu item*/}
                      <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a
                          className="menu-link"
                          href="../../demo18/dist/utilities/wizards/two-factor-authentication.html"
                        >
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Two Factor Auth</span>
                        </a>
                        {/*end:Menu link*/}
                      </div>
                      {/*end:Menu item*/}
                      {/*begin:Menu item*/}
                      <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a
                          className="menu-link"
                          href="../../demo18/dist/utilities/wizards/create-app.html"
                        >
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Create App</span>
                        </a>
                        {/*end:Menu link*/}
                      </div>
                      {/*end:Menu item*/}
                      {/*begin:Menu item*/}
                      <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a
                          className="menu-link"
                          href="../../demo18/dist/utilities/wizards/create-campaign.html"
                        >
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Create Campaign</span>
                        </a>
                        {/*end:Menu link*/}
                      </div>
                      {/*end:Menu item*/}
                      {/*begin:Menu item*/}
                      <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a
                          className="menu-link"
                          href="../../demo18/dist/utilities/wizards/create-account.html"
                        >
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Create Account</span>
                        </a>
                        {/*end:Menu link*/}
                      </div>
                      {/*end:Menu item*/}
                      {/*begin:Menu item*/}
                      <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a
                          className="menu-link"
                          href="../../demo18/dist/utilities/wizards/create-project.html"
                        >
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Create Project</span>
                        </a>
                        {/*end:Menu link*/}
                      </div>
                      {/*end:Menu item*/}
                      {/*begin:Menu item*/}
                      <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a
                          className="menu-link"
                          href="../../demo18/dist/utilities/modals/wizards/top-up-wallet.html"
                        >
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Top Up Wallet</span>
                        </a>
                        {/*end:Menu link*/}
                      </div>
                      {/*end:Menu item*/}
                      {/*begin:Menu item*/}
                      <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a
                          className="menu-link"
                          href="../../demo18/dist/utilities/wizards/offer-a-deal.html"
                        >
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Offer a Deal</span>
                        </a>
                        {/*end:Menu link*/}
                      </div>
                      {/*end:Menu item*/}
                    </div>
                    {/*end:Menu sub*/}
                  </div>
                  {/*end:Menu item*/}
                </div>
                {/*end:Menu sub*/}
              </div>
              {/*end:Menu item*/}
              {/*begin:Menu item*/}
              <div
                data-kt-menu-trigger="click"
                className="menu-item menu-accordion"
              >
                {/*begin:Menu link*/}
                <span className="menu-link">
                  <span className="menu-icon">
                    <i className="ki-duotone ki-element-7 fs-2">
                      <span className="path1" />
                      <span className="path2" />
                    </i>
                  </span>
                  <span className="menu-title">Widgets</span>
                  <span className="menu-arrow" />
                </span>
                {/*end:Menu link*/}
                {/*begin:Menu sub*/}
                <div className="menu-sub menu-sub-accordion">
                  {/*begin:Menu item*/}
                  <div className="menu-item">
                    {/*begin:Menu link*/}
                    <a
                      className="menu-link"
                      href="../../demo18/dist/widgets/lists.html"
                    >
                      <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                      </span>
                      <span className="menu-title">Lists</span>
                    </a>
                    {/*end:Menu link*/}
                  </div>
                  {/*end:Menu item*/}
                  {/*begin:Menu item*/}
                  <div className="menu-item">
                    {/*begin:Menu link*/}
                    <a
                      className="menu-link"
                      href="../../demo18/dist/widgets/statistics.html"
                    >
                      <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                      </span>
                      <span className="menu-title">Statistics</span>
                    </a>
                    {/*end:Menu link*/}
                  </div>
                  {/*end:Menu item*/}
                  {/*begin:Menu item*/}
                  <div className="menu-item">
                    {/*begin:Menu link*/}
                    <a
                      className="menu-link"
                      href="../../demo18/dist/widgets/charts.html"
                    >
                      <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                      </span>
                      <span className="menu-title">Charts</span>
                    </a>
                    {/*end:Menu link*/}
                  </div>
                  {/*end:Menu item*/}
                  {/*begin:Menu item*/}
                  <div className="menu-item">
                    {/*begin:Menu link*/}
                    <a
                      className="menu-link"
                      href="../../demo18/dist/widgets/mixed.html"
                    >
                      <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                      </span>
                      <span className="menu-title">Mixed</span>
                    </a>
                    {/*end:Menu link*/}
                  </div>
                  {/*end:Menu item*/}
                  {/*begin:Menu item*/}
                  <div className="menu-item">
                    {/*begin:Menu link*/}
                    <a
                      className="menu-link"
                      href="../../demo18/dist/widgets/tables.html"
                    >
                      <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                      </span>
                      <span className="menu-title">Tables</span>
                    </a>
                    {/*end:Menu link*/}
                  </div>
                  {/*end:Menu item*/}
                  {/*begin:Menu item*/}
                  <div className="menu-item">
                    {/*begin:Menu link*/}
                    <a
                      className="menu-link"
                      href="../../demo18/dist/widgets/feeds.html"
                    >
                      <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                      </span>
                      <span className="menu-title">Feeds</span>
                    </a>
                    {/*end:Menu link*/}
                  </div>
                  {/*end:Menu item*/}
                </div>
                {/*end:Menu sub*/}
              </div>
              {/*end:Menu item*/}
              {/*begin:Menu item*/}
              <div className="menu-item pt-5">
                {/*begin:Menu content*/}
                <div className="menu-content">
                  <span className="menu-heading fw-bold text-uppercase fs-7">
                    Apps
                  </span>
                </div>
                {/*end:Menu content*/}
              </div>
              {/*end:Menu item*/}
              {/*begin:Menu item*/}
              {/*end:Menu item*/}
              {/*begin:Menu item*/}
              <div
                data-kt-menu-trigger="click"
                className="menu-item menu-accordion"
              >
                {/*begin:Menu link*/}
                <span className="menu-link">
                  <span className="menu-icon">
                    <i className="ki-duotone ki-basket fs-2">
                      <span className="path1" />
                      <span className="path2" />
                      <span className="path3" />
                      <span className="path4" />
                    </i>
                  </span>
                  <span className="menu-title">eCommerce</span>
                  <span className="menu-arrow" />
                </span>
                {/*end:Menu link*/}
                {/*begin:Menu sub*/}
                <div className="menu-sub menu-sub-accordion">
                  {/*begin:Menu item*/}
                  <div
                    data-kt-menu-trigger="click"
                    className="menu-item menu-accordion"
                  >
                    {/*begin:Menu link*/}
                    <span className="menu-link">
                      <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                      </span>
                      <span className="menu-title">Catalog</span>
                      <span className="menu-arrow" />
                    </span>
                    {/*end:Menu link*/}
                    {/*begin:Menu sub*/}
                    <div className="menu-sub menu-sub-accordion">
                      {/*begin:Menu item*/}
                      <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a
                          className="menu-link"
                          href="../../demo18/dist/apps/ecommerce/catalog/products.html"
                        >
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Products</span>
                        </a>
                        {/*end:Menu link*/}
                      </div>
                      {/*end:Menu item*/}
                      {/*begin:Menu item*/}
                      <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a
                          className="menu-link"
                          href="../../demo18/dist/apps/ecommerce/catalog/categories.html"
                        >
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Categories</span>
                        </a>
                        {/*end:Menu link*/}
                      </div>
                      {/*end:Menu item*/}
                      {/*begin:Menu item*/}
                      <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a
                          className="menu-link"
                          href="../../demo18/dist/apps/ecommerce/catalog/add-product.html"
                        >
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Add Product</span>
                        </a>
                        {/*end:Menu link*/}
                      </div>
                      {/*end:Menu item*/}
                      {/*begin:Menu item*/}
                      <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a
                          className="menu-link"
                          href="../../demo18/dist/apps/ecommerce/catalog/edit-product.html"
                        >
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Edit Product</span>
                        </a>
                        {/*end:Menu link*/}
                      </div>
                      {/*end:Menu item*/}
                      {/*begin:Menu item*/}
                      <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a
                          className="menu-link"
                          href="../../demo18/dist/apps/ecommerce/catalog/add-category.html"
                        >
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Add Category</span>
                        </a>
                        {/*end:Menu link*/}
                      </div>
                      {/*end:Menu item*/}
                      {/*begin:Menu item*/}
                      <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a
                          className="menu-link"
                          href="../../demo18/dist/apps/ecommerce/catalog/edit-category.html"
                        >
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Edit Category</span>
                        </a>
                        {/*end:Menu link*/}
                      </div>
                      {/*end:Menu item*/}
                    </div>
                    {/*end:Menu sub*/}
                  </div>
                  {/*end:Menu item*/}
                  {/*begin:Menu item*/}
                  <div
                    data-kt-menu-trigger="click"
                    className="menu-item menu-accordion"
                  >
                    {/*begin:Menu link*/}
                    <span className="menu-link">
                      <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                      </span>
                      <span className="menu-title">Sales</span>
                      <span className="menu-arrow" />
                    </span>
                    {/*end:Menu link*/}
                    {/*begin:Menu sub*/}
                    <div className="menu-sub menu-sub-accordion">
                      {/*begin:Menu item*/}
                      <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a
                          className="menu-link"
                          href="../../demo18/dist/apps/ecommerce/sales/listing.html"
                        >
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Orders Listing</span>
                        </a>
                        {/*end:Menu link*/}
                      </div>
                      {/*end:Menu item*/}
                      {/*begin:Menu item*/}
                      <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a
                          className="menu-link"
                          href="../../demo18/dist/apps/ecommerce/sales/details.html"
                        >
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Order Details</span>
                        </a>
                        {/*end:Menu link*/}
                      </div>
                      {/*end:Menu item*/}
                      {/*begin:Menu item*/}
                      <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a
                          className="menu-link"
                          href="../../demo18/dist/apps/ecommerce/sales/add-order.html"
                        >
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Add Order</span>
                        </a>
                        {/*end:Menu link*/}
                      </div>
                      {/*end:Menu item*/}
                      {/*begin:Menu item*/}
                      <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a
                          className="menu-link"
                          href="../../demo18/dist/apps/ecommerce/sales/edit-order.html"
                        >
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Edit Order</span>
                        </a>
                        {/*end:Menu link*/}
                      </div>
                      {/*end:Menu item*/}
                    </div>
                    {/*end:Menu sub*/}
                  </div>
                  {/*end:Menu item*/}
                  {/*begin:Menu item*/}
                  <div
                    data-kt-menu-trigger="click"
                    className="menu-item menu-accordion"
                  >
                    {/*begin:Menu link*/}
                    <span className="menu-link">
                      <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                      </span>
                      <span className="menu-title">Customers</span>
                      <span className="menu-arrow" />
                    </span>
                    {/*end:Menu link*/}
                    {/*begin:Menu sub*/}
                    <div className="menu-sub menu-sub-accordion">
                      {/*begin:Menu item*/}
                      <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a
                          className="menu-link"
                          href="../../demo18/dist/apps/ecommerce/customers/listing.html"
                        >
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Customer Listing</span>
                        </a>
                        {/*end:Menu link*/}
                      </div>
                      {/*end:Menu item*/}
                      {/*begin:Menu item*/}
                      <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a
                          className="menu-link"
                          href="../../demo18/dist/apps/ecommerce/customers/details.html"
                        >
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Customer Details</span>
                        </a>
                        {/*end:Menu link*/}
                      </div>
                      {/*end:Menu item*/}
                    </div>
                    {/*end:Menu sub*/}
                  </div>
                  {/*end:Menu item*/}
                  {/*begin:Menu item*/}
                  <div
                    data-kt-menu-trigger="click"
                    className="menu-item menu-accordion"
                  >
                    {/*begin:Menu link*/}
                    <span className="menu-link">
                      <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                      </span>
                      <span className="menu-title">Reports</span>
                      <span className="menu-arrow" />
                    </span>
                    {/*end:Menu link*/}
                    {/*begin:Menu sub*/}
                    <div className="menu-sub menu-sub-accordion">
                      {/*begin:Menu item*/}
                      <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a
                          className="menu-link"
                          href="../../demo18/dist/apps/ecommerce/reports/view.html"
                        >
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Products Viewed</span>
                        </a>
                        {/*end:Menu link*/}
                      </div>
                      {/*end:Menu item*/}
                      {/*begin:Menu item*/}
                      <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a
                          className="menu-link"
                          href="../../demo18/dist/apps/ecommerce/reports/sales.html"
                        >
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Sales</span>
                        </a>
                        {/*end:Menu link*/}
                      </div>
                      {/*end:Menu item*/}
                      {/*begin:Menu item*/}
                      <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a
                          className="menu-link"
                          href="../../demo18/dist/apps/ecommerce/reports/returns.html"
                        >
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Returns</span>
                        </a>
                        {/*end:Menu link*/}
                      </div>
                      {/*end:Menu item*/}
                      {/*begin:Menu item*/}
                      <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a
                          className="menu-link"
                          href="../../demo18/dist/apps/ecommerce/reports/customer-orders.html"
                        >
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Customer Orders</span>
                        </a>
                        {/*end:Menu link*/}
                      </div>
                      {/*end:Menu item*/}
                      {/*begin:Menu item*/}
                      <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a
                          className="menu-link"
                          href="../../demo18/dist/apps/ecommerce/reports/shipping.html"
                        >
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Shipping</span>
                        </a>
                        {/*end:Menu link*/}
                      </div>
                      {/*end:Menu item*/}
                    </div>
                    {/*end:Menu sub*/}
                  </div>
                  {/*end:Menu item*/}
                  {/*begin:Menu item*/}
                  <div className="menu-item">
                    {/*begin:Menu link*/}
                    <a
                      className="menu-link"
                      href="../../demo18/dist/apps/ecommerce/settings.html"
                    >
                      <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                      </span>
                      <span className="menu-title">Settings</span>
                    </a>
                    {/*end:Menu link*/}
                  </div>
                  {/*end:Menu item*/}
                </div>
                {/*end:Menu sub*/}
              </div>
              {/*end:Menu item*/}
              {/*begin:Menu item*/}
              <div
                data-kt-menu-trigger="click"
                className="menu-item menu-accordion"
              >
                {/*begin:Menu link*/}
                <span className="menu-link">
                  <span className="menu-icon">
                    <i className="ki-duotone ki-abstract-25 fs-2">
                      <span className="path1" />
                      <span className="path2" />
                    </i>
                  </span>
                  <span className="menu-title">Contacts</span>
                  <span className="menu-arrow" />
                </span>
                {/*end:Menu link*/}
                {/*begin:Menu sub*/}
                <div className="menu-sub menu-sub-accordion">
                  {/*begin:Menu item*/}
                  <div className="menu-item">
                    {/*begin:Menu link*/}
                    <a
                      className="menu-link"
                      href="../../demo18/dist/apps/contacts/getting-started.html"
                    >
                      <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                      </span>
                      <span className="menu-title">Getting Started</span>
                    </a>
                    {/*end:Menu link*/}
                  </div>
                  {/*end:Menu item*/}
                  {/*begin:Menu item*/}
                  <div className="menu-item">
                    {/*begin:Menu link*/}
                    <a
                      className="menu-link"
                      href="../../demo18/dist/apps/contacts/add-contact.html"
                    >
                      <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                      </span>
                      <span className="menu-title">Add Contact</span>
                    </a>
                    {/*end:Menu link*/}
                  </div>
                  {/*end:Menu item*/}
                  {/*begin:Menu item*/}
                  <div className="menu-item">
                    {/*begin:Menu link*/}
                    <a
                      className="menu-link"
                      href="../../demo18/dist/apps/contacts/edit-contact.html"
                    >
                      <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                      </span>
                      <span className="menu-title">Edit Contact</span>
                    </a>
                    {/*end:Menu link*/}
                  </div>
                  {/*end:Menu item*/}
                  {/*begin:Menu item*/}
                  <div className="menu-item">
                    {/*begin:Menu link*/}
                    <a
                      className="menu-link"
                      href="../../demo18/dist/apps/contacts/view-contact.html"
                    >
                      <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                      </span>
                      <span className="menu-title">View Contact</span>
                    </a>
                    {/*end:Menu link*/}
                  </div>
                  {/*end:Menu item*/}
                </div>
                {/*end:Menu sub*/}
              </div>
              {/*end:Menu item*/}
              {/*begin:Menu item*/}
              <div
                data-kt-menu-trigger="click"
                className="menu-item menu-accordion"
              >
                {/*begin:Menu link*/}
                <span className="menu-link">
                  <span className="menu-icon">
                    <i className="ki-duotone ki-chart fs-2">
                      <span className="path1" />
                      <span className="path2" />
                    </i>
                  </span>
                  <span className="menu-title">Support Center</span>
                  <span className="menu-arrow" />
                </span>
                {/*end:Menu link*/}
                {/*begin:Menu sub*/}
                <div className="menu-sub menu-sub-accordion">
                  {/*begin:Menu item*/}
                  <div className="menu-item">
                    {/*begin:Menu link*/}
                    <a
                      className="menu-link"
                      href="../../demo18/dist/apps/support-center/overview.html"
                    >
                      <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                      </span>
                      <span className="menu-title">Overview</span>
                    </a>
                    {/*end:Menu link*/}
                  </div>
                  {/*end:Menu item*/}
                  {/*begin:Menu item*/}
                  <div
                    data-kt-menu-trigger="click"
                    className="menu-item menu-accordion mb-1"
                  >
                    {/*begin:Menu link*/}
                    <span className="menu-link">
                      <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                      </span>
                      <span className="menu-title">Tickets</span>
                      <span className="menu-arrow" />
                    </span>
                    {/*end:Menu link*/}
                    {/*begin:Menu sub*/}
                    <div className="menu-sub menu-sub-accordion">
                      {/*begin:Menu item*/}
                      <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a
                          className="menu-link"
                          href="../../demo18/dist/apps/support-center/tickets/list.html"
                        >
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Tickets List</span>
                        </a>
                        {/*end:Menu link*/}
                      </div>
                      {/*end:Menu item*/}
                      {/*begin:Menu item*/}
                      <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a
                          className="menu-link"
                          href="../../demo18/dist/apps/support-center/tickets/view.html"
                        >
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">View Ticket</span>
                        </a>
                        {/*end:Menu link*/}
                      </div>
                      {/*end:Menu item*/}
                    </div>
                    {/*end:Menu sub*/}
                  </div>
                  {/*end:Menu item*/}
                  {/*begin:Menu item*/}
                  <div
                    data-kt-menu-trigger="click"
                    className="menu-item menu-accordion mb-1"
                  >
                    {/*begin:Menu link*/}
                    <span className="menu-link">
                      <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                      </span>
                      <span className="menu-title">Tutorials</span>
                      <span className="menu-arrow" />
                    </span>
                    {/*end:Menu link*/}
                    {/*begin:Menu sub*/}
                    <div className="menu-sub menu-sub-accordion">
                      {/*begin:Menu item*/}
                      <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a
                          className="menu-link"
                          href="../../demo18/dist/apps/support-center/tutorials/list.html"
                        >
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Tutorials List</span>
                        </a>
                        {/*end:Menu link*/}
                      </div>
                      {/*end:Menu item*/}
                      {/*begin:Menu item*/}
                      <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a
                          className="menu-link"
                          href="../../demo18/dist/apps/support-center/tutorials/post.html"
                        >
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Tutorial Post</span>
                        </a>
                        {/*end:Menu link*/}
                      </div>
                      {/*end:Menu item*/}
                    </div>
                    {/*end:Menu sub*/}
                  </div>
                  {/*end:Menu item*/}
                  {/*begin:Menu item*/}
                  <div className="menu-item">
                    {/*begin:Menu link*/}
                    <a
                      className="menu-link"
                      href="../../demo18/dist/apps/support-center/faq.html"
                    >
                      <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                      </span>
                      <span className="menu-title">FAQ</span>
                    </a>
                    {/*end:Menu link*/}
                  </div>
                  {/*end:Menu item*/}
                  {/*begin:Menu item*/}
                  <div className="menu-item">
                    {/*begin:Menu link*/}
                    <a
                      className="menu-link"
                      href="../../demo18/dist/apps/support-center/licenses.html"
                    >
                      <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                      </span>
                      <span className="menu-title">Licenses</span>
                    </a>
                    {/*end:Menu link*/}
                  </div>
                  {/*end:Menu item*/}
                  {/*begin:Menu item*/}
                  <div className="menu-item">
                    {/*begin:Menu link*/}
                    <a
                      className="menu-link"
                      href="../../demo18/dist/apps/support-center/contact.html"
                    >
                      <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                      </span>
                      <span className="menu-title">Contact Us</span>
                    </a>
                    {/*end:Menu link*/}
                  </div>
                  {/*end:Menu item*/}
                </div>
                {/*end:Menu sub*/}
              </div>
              {/*end:Menu item*/}
              {/*begin:Menu item*/}
              <div
                data-kt-menu-trigger="click"
                className="menu-item menu-accordion"
              >
                {/*begin:Menu link*/}
                <span className="menu-link">
                  <span className="menu-icon">
                    <i className="ki-duotone ki-abstract-28 fs-2">
                      <span className="path1" />
                      <span className="path2" />
                    </i>
                  </span>
                  <span className="menu-title">User Management</span>
                  <span className="menu-arrow" />
                </span>
                {/*end:Menu link*/}
                {/*begin:Menu sub*/}
                <div className="menu-sub menu-sub-accordion">
                  {/*begin:Menu item*/}
                  <div
                    data-kt-menu-trigger="click"
                    className="menu-item menu-accordion mb-1"
                  >
                    {/*begin:Menu link*/}
                    <span className="menu-link">
                      <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                      </span>
                      <span className="menu-title">Users</span>
                      <span className="menu-arrow" />
                    </span>
                    {/*end:Menu link*/}
                    {/*begin:Menu sub*/}
                    <div className="menu-sub menu-sub-accordion">
                      {/*begin:Menu item*/}
                      <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a
                          className="menu-link"
                          href="../../demo18/dist/apps/user-management/users/list.html"
                        >
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Users List</span>
                        </a>
                        {/*end:Menu link*/}
                      </div>
                      {/*end:Menu item*/}
                      {/*begin:Menu item*/}
                      <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a
                          className="menu-link"
                          href="../../demo18/dist/apps/user-management/users/view.html"
                        >
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">View User</span>
                        </a>
                        {/*end:Menu link*/}
                      </div>
                      {/*end:Menu item*/}
                    </div>
                    {/*end:Menu sub*/}
                  </div>
                  {/*end:Menu item*/}
                  {/*begin:Menu item*/}
                  <div
                    data-kt-menu-trigger="click"
                    className="menu-item menu-accordion"
                  >
                    {/*begin:Menu link*/}
                    <span className="menu-link">
                      <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                      </span>
                      <span className="menu-title">Roles</span>
                      <span className="menu-arrow" />
                    </span>
                    {/*end:Menu link*/}
                    {/*begin:Menu sub*/}
                    <div className="menu-sub menu-sub-accordion">
                      {/*begin:Menu item*/}
                      <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a
                          className="menu-link"
                          href="../../demo18/dist/apps/user-management/roles/list.html"
                        >
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Roles List</span>
                        </a>
                        {/*end:Menu link*/}
                      </div>
                      {/*end:Menu item*/}
                      {/*begin:Menu item*/}
                      <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a
                          className="menu-link"
                          href="../../demo18/dist/apps/user-management/roles/view.html"
                        >
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">View Role</span>
                        </a>
                        {/*end:Menu link*/}
                      </div>
                      {/*end:Menu item*/}
                    </div>
                    {/*end:Menu sub*/}
                  </div>
                  {/*end:Menu item*/}
                  {/*begin:Menu item*/}
                  <div className="menu-item">
                    {/*begin:Menu link*/}
                    <a
                      className="menu-link"
                      href="../../demo18/dist/apps/user-management/permissions.html"
                    >
                      <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                      </span>
                      <span className="menu-title">Permissions</span>
                    </a>
                    {/*end:Menu link*/}
                  </div>
                  {/*end:Menu item*/}
                </div>
                {/*end:Menu sub*/}
              </div>
              {/*end:Menu item*/}
              {/*begin:Menu item*/}
              <div
                data-kt-menu-trigger="click"
                className="menu-item menu-accordion"
              >
                {/*begin:Menu link*/}
                <span className="menu-link">
                  <span className="menu-icon">
                    <i className="ki-duotone ki-abstract-38 fs-2">
                      <span className="path1" />
                      <span className="path2" />
                    </i>
                  </span>
                  <span className="menu-title">Customers</span>
                  <span className="menu-arrow" />
                </span>
                {/*end:Menu link*/}
                {/*begin:Menu sub*/}
                <div className="menu-sub menu-sub-accordion">
                  {/*begin:Menu item*/}
                  <div className="menu-item">
                    {/*begin:Menu link*/}
                    <a
                      className="menu-link"
                      href="../../demo18/dist/apps/customers/getting-started.html"
                    >
                      <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                      </span>
                      <span className="menu-title">Getting Started</span>
                    </a>
                    {/*end:Menu link*/}
                  </div>
                  {/*end:Menu item*/}
                  {/*begin:Menu item*/}
                  <div className="menu-item">
                    {/*begin:Menu link*/}
                    <a
                      className="menu-link"
                      href="../../demo18/dist/apps/customers/list.html"
                    >
                      <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                      </span>
                      <span className="menu-title">Customer Listing</span>
                    </a>
                    {/*end:Menu link*/}
                  </div>
                  {/*end:Menu item*/}
                  {/*begin:Menu item*/}
                  <div className="menu-item">
                    {/*begin:Menu link*/}
                    <a
                      className="menu-link"
                      href="../../demo18/dist/apps/customers/view.html"
                    >
                      <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                      </span>
                      <span className="menu-title">Customer Details</span>
                    </a>
                    {/*end:Menu link*/}
                  </div>
                  {/*end:Menu item*/}
                </div>
                {/*end:Menu sub*/}
              </div>
              {/*end:Menu item*/}
              {/*begin:Menu item*/}
              <div
                data-kt-menu-trigger="click"
                className="menu-item menu-accordion"
              >
                {/*begin:Menu link*/}
                <span className="menu-link">
                  <span className="menu-icon">
                    <i className="ki-duotone ki-map fs-2">
                      <span className="path1" />
                      <span className="path2" />
                      <span className="path3" />
                    </i>
                  </span>
                  <span className="menu-title">Subscription</span>
                  <span className="menu-arrow" />
                </span>
                {/*end:Menu link*/}
                {/*begin:Menu sub*/}
                <div className="menu-sub menu-sub-accordion">
                  {/*begin:Menu item*/}
                  <div className="menu-item">
                    {/*begin:Menu link*/}
                    <a
                      className="menu-link"
                      href="../../demo18/dist/apps/subscriptions/getting-started.html"
                    >
                      <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                      </span>
                      <span className="menu-title">Getting Started</span>
                    </a>
                    {/*end:Menu link*/}
                  </div>
                  {/*end:Menu item*/}
                  {/*begin:Menu item*/}
                  <div className="menu-item">
                    {/*begin:Menu link*/}
                    <a
                      className="menu-link"
                      href="../../demo18/dist/apps/subscriptions/list.html"
                    >
                      <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                      </span>
                      <span className="menu-title">Subscription List</span>
                    </a>
                    {/*end:Menu link*/}
                  </div>
                  {/*end:Menu item*/}
                  {/*begin:Menu item*/}
                  <div className="menu-item">
                    {/*begin:Menu link*/}
                    <a
                      className="menu-link"
                      href="../../demo18/dist/apps/subscriptions/add.html"
                    >
                      <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                      </span>
                      <span className="menu-title">Add Subscription</span>
                    </a>
                    {/*end:Menu link*/}
                  </div>
                  {/*end:Menu item*/}
                  {/*begin:Menu item*/}
                  <div className="menu-item">
                    {/*begin:Menu link*/}
                    <a
                      className="menu-link"
                      href="../../demo18/dist/apps/subscriptions/view.html"
                    >
                      <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                      </span>
                      <span className="menu-title">View Subscription</span>
                    </a>
                    {/*end:Menu link*/}
                  </div>
                  {/*end:Menu item*/}
                </div>
                {/*end:Menu sub*/}
              </div>
              {/*end:Menu item*/}
              {/*begin:Menu item*/}
              <div
                data-kt-menu-trigger="click"
                className="menu-item menu-accordion"
              >
                {/*begin:Menu link*/}
                <span className="menu-link">
                  <span className="menu-icon">
                    <i className="ki-duotone ki-credit-cart fs-2">
                      <span className="path1" />
                      <span className="path2" />
                    </i>
                  </span>
                  <span className="menu-title">Invoice Manager</span>
                  <span className="menu-arrow" />
                </span>
                {/*end:Menu link*/}
                {/*begin:Menu sub*/}
                <div className="menu-sub menu-sub-accordion">
                  {/*begin:Menu item*/}
                  <div
                    data-kt-menu-trigger="click"
                    className="menu-item menu-accordion"
                  >
                    {/*begin:Menu link*/}
                    <span className="menu-link">
                      <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                      </span>
                      <span className="menu-title">View Invoices</span>
                      <span className="menu-arrow" />
                    </span>
                    {/*end:Menu link*/}
                    {/*begin:Menu sub*/}
                    <div className="menu-sub menu-sub-accordion menu-active-bg">
                      {/*begin:Menu item*/}
                      <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a
                          className="menu-link"
                          href="../../demo18/dist/apps/invoices/view/invoice-1.html"
                        >
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Invoice 1</span>
                        </a>
                        {/*end:Menu link*/}
                      </div>
                      {/*end:Menu item*/}
                      {/*begin:Menu item*/}
                      <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a
                          className="menu-link"
                          href="../../demo18/dist/apps/invoices/view/invoice-2.html"
                        >
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Invoice 2</span>
                        </a>
                        {/*end:Menu link*/}
                      </div>
                      {/*end:Menu item*/}
                      {/*begin:Menu item*/}
                      <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a
                          className="menu-link"
                          href="../../demo18/dist/apps/invoices/view/invoice-3.html"
                        >
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Invoice 3</span>
                        </a>
                        {/*end:Menu link*/}
                      </div>
                      {/*end:Menu item*/}
                    </div>
                    {/*end:Menu sub*/}
                  </div>
                  {/*end:Menu item*/}
                  {/*begin:Menu item*/}
                  <div className="menu-item">
                    {/*begin:Menu link*/}
                    <a
                      className="menu-link"
                      href="../../demo18/dist/apps/invoices/create.html"
                    >
                      <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                      </span>
                      <span className="menu-title">Create Invoice</span>
                    </a>
                    {/*end:Menu link*/}
                  </div>
                  {/*end:Menu item*/}
                </div>
                {/*end:Menu sub*/}
              </div>
              {/*end:Menu item*/}
              {/*begin:Menu item*/}
              <div
                data-kt-menu-trigger="click"
                className="menu-item menu-accordion"
              >
                {/*begin:Menu link*/}
                <span className="menu-link">
                  <span className="menu-icon">
                    <i className="ki-duotone ki-switch fs-2">
                      <span className="path1" />
                      <span className="path2" />
                    </i>
                  </span>
                  <span className="menu-title">File Manager</span>
                  <span className="menu-arrow" />
                </span>
                {/*end:Menu link*/}
                {/*begin:Menu sub*/}
                <div className="menu-sub menu-sub-accordion">
                  {/*begin:Menu item*/}
                  <div className="menu-item">
                    {/*begin:Menu link*/}
                    <a
                      className="menu-link"
                      href="../../demo18/dist/apps/file-manager/folders.html"
                    >
                      <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                      </span>
                      <span className="menu-title">Folders</span>
                    </a>
                    {/*end:Menu link*/}
                  </div>
                  {/*end:Menu item*/}
                  {/*begin:Menu item*/}
                  <div className="menu-item">
                    {/*begin:Menu link*/}
                    <a
                      className="menu-link"
                      href="../../demo18/dist/apps/file-manager/files.html"
                    >
                      <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                      </span>
                      <span className="menu-title">Files</span>
                    </a>
                    {/*end:Menu link*/}
                  </div>
                  {/*end:Menu item*/}
                  {/*begin:Menu item*/}
                  <div className="menu-item">
                    {/*begin:Menu link*/}
                    <a
                      className="menu-link"
                      href="../../demo18/dist/apps/file-manager/blank.html"
                    >
                      <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                      </span>
                      <span className="menu-title">Blank Directory</span>
                    </a>
                    {/*end:Menu link*/}
                  </div>
                  {/*end:Menu item*/}
                  {/*begin:Menu item*/}
                  <div className="menu-item">
                    {/*begin:Menu link*/}
                    <a
                      className="menu-link"
                      href="../../demo18/dist/apps/file-manager/settings.html"
                    >
                      <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                      </span>
                      <span className="menu-title">Settings</span>
                    </a>
                    {/*end:Menu link*/}
                  </div>
                  {/*end:Menu item*/}
                </div>
                {/*end:Menu sub*/}
              </div>
              {/*end:Menu item*/}
              {/*begin:Menu item*/}
              <div
                data-kt-menu-trigger="click"
                className="menu-item menu-accordion"
              >
                {/*begin:Menu link*/}
                <span className="menu-link">
                  <span className="menu-icon">
                    <i className="ki-duotone ki-sms fs-2">
                      <span className="path1" />
                      <span className="path2" />
                    </i>
                  </span>
                  <span className="menu-title">Inbox</span>
                  <span className="menu-arrow" />
                </span>
                {/*end:Menu link*/}
                {/*begin:Menu sub*/}
                <div className="menu-sub menu-sub-accordion">
                  {/*begin:Menu item*/}
                  <div className="menu-item">
                    {/*begin:Menu link*/}
                    <a
                      className="menu-link"
                      href="../../demo18/dist/apps/inbox/listing.html"
                    >
                      <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                      </span>
                      <span className="menu-title">Messages</span>
                      <span className="menu-badge">
                        <span className="badge badge-success">3</span>
                      </span>
                    </a>
                    {/*end:Menu link*/}
                  </div>
                  {/*end:Menu item*/}
                  {/*begin:Menu item*/}
                  <div className="menu-item">
                    {/*begin:Menu link*/}
                    <a
                      className="menu-link"
                      href="../../demo18/dist/apps/inbox/compose.html"
                    >
                      <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                      </span>
                      <span className="menu-title">Compose</span>
                    </a>
                    {/*end:Menu link*/}
                  </div>
                  {/*end:Menu item*/}
                  {/*begin:Menu item*/}
                  <div className="menu-item">
                    {/*begin:Menu link*/}
                    <a
                      className="menu-link"
                      href="../../demo18/dist/apps/inbox/reply.html"
                    >
                      <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                      </span>
                      <span className="menu-title">View &amp; Reply</span>
                    </a>
                    {/*end:Menu link*/}
                  </div>
                  {/*end:Menu item*/}
                </div>
                {/*end:Menu sub*/}
              </div>
              {/*end:Menu item*/}
              {/*begin:Menu item*/}
              <div
                data-kt-menu-trigger="click"
                className="menu-item menu-accordion"
              >
                {/*begin:Menu link*/}
                <span className="menu-link">
                  <span className="menu-icon">
                    <i className="ki-duotone ki-message-text-2 fs-2">
                      <span className="path1" />
                      <span className="path2" />
                      <span className="path3" />
                    </i>
                  </span>
                  <span className="menu-title">Chat</span>
                  <span className="menu-arrow" />
                </span>
                {/*end:Menu link*/}
                {/*begin:Menu sub*/}
                <div className="menu-sub menu-sub-accordion">
                  {/*begin:Menu item*/}
                  <div className="menu-item">
                    {/*begin:Menu link*/}
                    <a
                      className="menu-link"
                      href="../../demo18/dist/apps/chat/private.html"
                    >
                      <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                      </span>
                      <span className="menu-title">Private Chat</span>
                    </a>
                    {/*end:Menu link*/}
                  </div>
                  {/*end:Menu item*/}
                  {/*begin:Menu item*/}
                  <div className="menu-item">
                    {/*begin:Menu link*/}
                    <a
                      className="menu-link"
                      href="../../demo18/dist/apps/chat/group.html"
                    >
                      <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                      </span>
                      <span className="menu-title">Group Chat</span>
                    </a>
                    {/*end:Menu link*/}
                  </div>
                  {/*end:Menu item*/}
                  {/*begin:Menu item*/}
                  <div className="menu-item">
                    {/*begin:Menu link*/}
                    <a
                      className="menu-link"
                      href="../../demo18/dist/apps/chat/drawer.html"
                    >
                      <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                      </span>
                      <span className="menu-title">Drawer Chat</span>
                    </a>
                    {/*end:Menu link*/}
                  </div>
                  {/*end:Menu item*/}
                </div>
                {/*end:Menu sub*/}
              </div>
              {/*end:Menu item*/}
              {/*begin:Menu item*/}
              <div className="menu-item">
                {/*begin:Menu link*/}
                <a
                  className="menu-link"
                  href="../../demo18/dist/apps/calendar.html"
                >
                  <span className="menu-icon">
                    <i className="ki-duotone ki-calendar-8 fs-2">
                      <span className="path1" />
                      <span className="path2" />
                      <span className="path3" />
                      <span className="path4" />
                      <span className="path5" />
                      <span className="path6" />
                    </i>
                  </span>
                  <span className="menu-title">Calendar</span>
                </a>
                {/*end:Menu link*/}
              </div>
              {/*end:Menu item*/}
              {/*begin:Menu item*/}
              <div className="menu-item pt-5">
                {/*begin:Menu content*/}
                <div className="menu-content">
                  <span className="menu-heading fw-bold text-uppercase fs-7">
                    Help
                  </span>
                </div>
                {/*end:Menu content*/}
              </div>
              {/*end:Menu item*/}
              {/*begin:Menu item*/}
              <div className="menu-item">
                {/*begin:Menu link*/}
                <a
                  className="menu-link"
                  href="https://preview.keenthemes.com/html/metronic/docs/base/utilities"
                  target="_blank"
                >
                  <span className="menu-icon">
                    <i className="ki-duotone ki-rocket fs-2">
                      <span className="path1" />
                      <span className="path2" />
                    </i>
                  </span>
                  <span className="menu-title">Components</span>
                </a>
                {/*end:Menu link*/}
              </div>
              {/*end:Menu item*/}
              {/*begin:Menu item*/}
              <div className="menu-item">
                {/*begin:Menu link*/}
                <a
                  className="menu-link"
                  href="https://preview.keenthemes.com/metronic8/demo18/layout-builder.html"
                >
                  <span className="menu-icon">
                    <i className="ki-duotone ki-abstract-13 fs-2">
                      <span className="path1" />
                      <span className="path2" />
                    </i>
                  </span>
                  <span className="menu-title">Layout Builder</span>
                </a>
                {/*end:Menu link*/}
              </div>
              {/*end:Menu item*/}
              {/*begin:Menu item*/}
              <div className="menu-item">
                {/*begin:Menu link*/}
                <a
                  className="menu-link"
                  href="https://preview.keenthemes.com/html/metronic/docs"
                  target="_blank"
                >
                  <span className="menu-icon">
                    <i className="ki-duotone ki-abstract-26 fs-2">
                      <span className="path1" />
                      <span className="path2" />
                    </i>
                  </span>
                  <span className="menu-title">Documentation</span>
                </a>
                {/*end:Menu link*/}
              </div>
              {/*end:Menu item*/}
              {/*begin:Menu item*/}
              <div className="menu-item">
                {/*begin:Menu link*/}
                <a
                  className="menu-link"
                  href="https://preview.keenthemes.com/html/metronic/docs/getting-started/changelog"
                  target="_blank"
                >
                  <span className="menu-icon">
                    <i className="ki-duotone ki-code fs-2">
                      <span className="path1" />
                      <span className="path2" />
                      <span className="path3" />
                      <span className="path4" />
                    </i>
                  </span>
                  <span className="menu-title">Changelog v8.2.0</span>
                </a>
                {/*end:Menu link*/}
              </div>
              {/*end:Menu item*/}
            </div>
            {/*end::Menu*/}
          </div>
        </div>
        {/*end::Aside menu*/}
        {/*begin::Footer*/}
        <div
          className="aside-footer flex-column-auto px-4 pt-3 pb-7"
          id="kt_aside_footer"
        >
          <a
            href="https://preview.keenthemes.com/html/metronic/docs"
            className="btn btn-custom btn-primary w-100"
            data-bs-toggle="tooltip"
            data-bs-trigger="hover"
            data-bs-dismiss-="click"
            title="200+ in-house components and 3rd-party plugins"
          >
            <span className="btn-label">Docs &amp; Components</span>
            <i className="ki-duotone ki-document btn-icon fs-2">
              <span className="path1" />
              <span className="path2" />
            </i>
          </a>
        </div>
        {/*end::Footer*/}
      </div>
    </>
  );
}
