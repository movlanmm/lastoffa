
import ProductCard from "../../components/ProductCard";
import { useAppSelector } from "../../redux/store";
import { productsSelector } from "../../redux/lib/productsSlice";

export default function Shop() {
  const products = useAppSelector(productsSelector).products;

  return (
    <main>
      <section className="full-width_padding">
        <div
          className="full-width_border border-2"
          style={{ borderColor: "#eeeeee" }}
        >
          <div className="shop-banner position-relative ">
            <div
              className="background-img"
              style={{ backgroundColor: "#eeeeee" }}
            >
              <img
                loading="lazy"
                src="../../../public/images/shop/shop_banner_character1.png"
                width={1759}
                height={420}
                alt="Pattern"
                className="slideshow-bg__img object-fit-cover"
              />
            </div>
            <div className="shop-banner__content container position-absolute start-50 top-50 translate-middle">
              <h2 className="stroke-text h1 smooth-16 text-uppercase fw-bold mb-3 mb-xl-4 mb-xl-5">
                Jackets &amp; Coats
              </h2>
              <ul className="d-flex flex-wrap list-unstyled text-uppercase h6">
                <li className="me-3 me-xl-4 pe-1">
                  <a
                    href="#"
                    className="menu-link menu-link_us-s menu-link_active"
                  >
                    StayHome
                  </a>
                </li>
                <li className="me-3 me-xl-4 pe-1">
                  <a href="#" className="menu-link menu-link_us-s">
                    New In
                  </a>
                </li>
                <li className="me-3 me-xl-4 pe-1">
                  <a href="#" className="menu-link menu-link_us-s">
                    Jackets
                  </a>
                </li>
                <li className="me-3 me-xl-4 pe-1">
                  <a href="#" className="menu-link menu-link_us-s">
                    Hoodies
                  </a>
                </li>
                <li className="me-3 me-xl-4 pe-1">
                  <a href="shop4.html" className="menu-link menu-link_us-s">
                    Men
                  </a>
                </li>
                <li className="me-3 me-xl-4 pe-1">
                  <a href="shop5.html" className="menu-link menu-link_us-s">
                    Women
                  </a>
                </li>
                <li className="me-3 me-xl-4 pe-1">
                  <a href="#" className="menu-link menu-link_us-s">
                    Trousers
                  </a>
                </li>
                <li className="me-3 me-xl-4 pe-1">
                  <a href="shop3.html" className="menu-link menu-link_us-s">
                    Accessories
                  </a>
                </li>
                <li className="me-3 me-xl-4 pe-1">
                  <a href="#" className="menu-link menu-link_us-s">
                    Shoes
                  </a>
                </li>
              </ul>
            </div>
            {/* /.shop-banner__content */}
          </div>
          {/* /.shop-banner position-relative */}
        </div>
        {/* /.full-width_border */}
      </section>
      {/* /.full-width_padding*/}
      <div className="mb-4 pb-lg-3" />
      <section className="shop-main container">
        <div className="d-flex justify-content-between mb-4 pb-md-2">
          <div className="breadcrumb mb-0 d-none d-md-block flex-grow-1">
            <a
              href="#"
              className="menu-link menu-link_us-s text-uppercase fw-medium"
            >
              Home
            </a>
            <span className="breadcrumb-separator menu-link fw-medium ps-1 pe-1">
              /
            </span>
            <a
              href="#"
              className="menu-link menu-link_us-s text-uppercase fw-medium"
            >
              The Shop
            </a>
          </div>
          {/* /.breadcrumb */}
          <div className="shop-acs d-flex align-items-center justify-content-between justify-content-md-end flex-grow-1">
            <select
              className="shop-acs__select form-select w-auto border-0 py-0 order-1 order-md-0"
              aria-label="Sort Items"
              name="total-number"
            >
              <option>Default Sorting</option>
              <option value={1}>Featured</option>
              <option value={2}>Best selling</option>
              <option value={3}>Alphabetically, A-Z</option>
              <option value={3}>Alphabetically, Z-A</option>
              <option value={3}>Price, low to high</option>
              <option value={3}>Price, high to low</option>
              <option value={3}>Date, old to new</option>
              <option value={3}>Date, new to old</option>
            </select>
            <div className="shop-asc__seprator mx-3 bg-light d-none d-md-block order-md-0" />
            <div className="col-size align-items-center order-1 d-none d-lg-flex">
              <span className="text-uppercase fw-medium me-2">View</span>
              <button
                className="btn-link fw-medium me-2 js-cols-size"
                data-target="products-grid"
                data-cols={2}
              >
                2
              </button>
              <button
                className="btn-link fw-medium me-2 js-cols-size"
                data-target="products-grid"
                data-cols={3}
              >
                3
              </button>
              <button
                className="btn-link fw-medium js-cols-size"
                data-target="products-grid"
                data-cols={4}
              >
                4
              </button>
            </div>
            {/* /.col-size */}
            <div className="shop-asc__seprator mx-3 bg-light d-none d-lg-block order-md-1" />
            <div className="shop-filter d-flex align-items-center order-0 order-md-3">
              <button
                className="btn-link btn-link_f d-flex align-items-center ps-0 js-open-aside"
                data-aside="shopFilter"
              >
                <svg
                  className="d-inline-block align-middle me-2"
                  width={14}
                  height={10}
                  viewBox="0 0 14 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <use href="#icon_filter" />
                </svg>
                <span className="text-uppercase fw-medium d-inline-block align-middle">
                  Filter
                </span>
              </button>
            </div>
            {/* /.col-size d-flex align-items-center ms-auto ms-md-3 */}
          </div>
          {/* /.shop-acs */}
        </div>
        {/* /.d-flex justify-content-between */}
        <div
          className="products-grid row row-cols-2 row-cols-md-3 row-cols-lg-4"
          id="products-grid"
        >
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        {/* /.products-grid row */}
        <div className="text-center mb-5">
          <a className="btn-link btn-link_lg text-uppercase fw-medium" href="#">
            Show More
          </a>
        </div>
      </section>
      {/* /.shop-main container */}
    </main>
  );
}
