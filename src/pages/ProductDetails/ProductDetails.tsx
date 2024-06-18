import {
  Nav,
  NavItem,
  NavLink,
  TabContainer,
  TabContent,
  TabPane,
} from "react-bootstrap";
import { CiHeart } from "react-icons/ci";
import { IoStarSharp } from "react-icons/io5";
import { IoShareSocialOutline } from "react-icons/io5";
import {
  A11y,
  Navigation,
  Thumbs,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { GrPrevious, GrNext } from "react-icons/gr";
import { useState, useEffect } from "react";
import { MdOutlineZoomOutMap } from "react-icons/md";
import { useDispatch } from "react-redux";
import { showcart } from "../../redux/lib/showCartMenu.ts";
import { useParams, Link } from "react-router-dom";
import { addCart, cartSelector, updateQuantity } from "../../redux/lib/cartSlice.ts";
import { FaHeart } from "react-icons/fa";
import { productsSelector, updateProduct } from "../../redux/lib/productsSlice.ts";
import { addWishlist, wishlistSelector } from "../../redux/lib/wishlistSlice.ts";
import LimitedProduct from "../../components/LimitedProduct";
import { useAppSelector } from "../../redux/store.ts";
import { Product } from "../../types/index.ts";


export default function ProductDetails() {
  const [product, setProduct] = useState<Product>({} as Product);
  const [qty, setQty] = useState(1);
  const products = useAppSelector(productsSelector).products;
  const cart = useAppSelector(cartSelector).cart;
  const wishlist = useAppSelector(wishlistSelector).wishlist;

  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    const found = wishlist.find((item) => item.id === product.id);
    if (found) {
      dispatch(updateProduct({ ...product, added: true }));
    } else {
      dispatch(updateProduct({ ...product, added: false }));
    }
  }, [wishlist]);

  const getProduct = () => {
    const find = products.find((product) => product.id === id);
    if (find) {
      setProduct(find);
    }
  };

  useEffect(() => {
    dispatch(updateQuantity({ ...product, quantity: qty }));
  }, [qty]);

  useEffect(() => {
    const pro = cart.find((item) => item.id === id);
    if (pro) {
      setQty(pro.quantity);
    } else {
      setQty(1);
    }
  }, [cart]);

  useEffect(() => {
    getProduct();
  }, [products]);

  return (
    <>
      <main>
        <div className="mb-md-1 pb-md-3" />
        <section className="product-single container">
          <div className="row">
            <div className="col-lg-7">
              <div
                className="product-single__media vertical-thumbnail product-media-initialized"
                data-media-type="vertical-thumbnail"
              >
                <div className="product-single__image">
                  <Swiper
                    navigation={{
                      nextEl: ".swiper-button-next",
                      prevEl: ".swiper-button-prev",
                    }}
                    modules={[A11y, Navigation, Thumbs]}
                  >
                    {product.images?.map((url, index) => {
                      return (
                        <SwiperSlide
                          key={index}
                          className="swiper-slide product-single__image-item swiper-slide-active"
                          role="group"
                          aria-label="1 / 4"
                          style={{ width: 534, marginRight: 32 }}
                        >
                          <img
                            loading="lazy"
                            className="h-auto"
                            src={url}
                            width={674}
                            height={674}
                            alt=""
                          />
                          <a
                            data-fancybox="gallery"
                            data-bs-toggle="tooltip"
                            data-bs-placement="left"
                            title=""
                            data-bs-original-title="Zoom"
                          >
                            <MdOutlineZoomOutMap fontSize={25} />
                          </a>
                        </SwiperSlide>
                      );
                    })}

                    <div className="swiper-button-prev" tabIndex={-1}>
                      <GrPrevious fontSize={20} />
                    </div>
                    <div className="swiper-button-next" tabIndex={0}>
                      <GrNext fontSize={20} />
                    </div>
                    <span
                      className="swiper-notification"
                      aria-live="assertive"
                      aria-atomic="true"
                    />
                  </Swiper>
                </div>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="d-flex justify-content-between mb-4 pb-md-2">
                <div className="breadcrumb mb-0 d-none d-md-block flex-grow-1">
                  <Link
                    to="/"
                    className="menu-link menu-link_us-s text-uppercase fw-medium"
                  >
                    Home
                  </Link>
                  <span className="breadcrumb-separator menu-link fw-medium ps-1 pe-1">
                    /
                  </span>
                  <Link
                    to="/shop"
                    className="menu-link menu-link_us-s text-uppercase fw-medium"
                  >
                    The Shop
                  </Link>
                </div>
                {/* /.breadcrumb */}
                <div className="product-single__prev-next d-flex align-items-center justify-content-between justify-content-md-end flex-grow-1">
                  <a href="#" className="text-uppercase fw-medium disabled">
                    <span className="menu-link menu-link_us-s">Prev</span>
                  </a>
                  <a className="text-uppercase fw-medium">
                    <span className="menu-link menu-link_us-s">Next</span>
                  </a>
                </div>
                {/* /.shop-acs */}
              </div>
              <h1 className="product-single__name">{product.name}</h1>
              <div className="product-single__rating">
                <div className="reviews-group d-flex">
                  <IoStarSharp />
                  <IoStarSharp />
                  <IoStarSharp />
                  <IoStarSharp />
                  <IoStarSharp />
                </div>
                <span className="reviews-note text-lowercase text-secondary ms-1">
                  8k+ reviews
                </span>
              </div>
              <div className="product-single__price">
                <span className="current-price">${product.price}</span>
              </div>
              <div className="product-single__short-desc">
                <p>{product.desc}</p>
              </div>
              <form>
                <div className="product-single__addtocart">
                  <div className="qty-control position-relative">
                    <input
                      type="number"
                      name="quantity"
                      value={qty}
                      onChange={(e) => setQty(Number(e.target.value))}
                      min={1}
                      className="qty-control__number text-center"
                    />
                    <div
                      className="qty-control__reduce"
                      onClick={() => setQty(qty - 1)}
                    >
                      -
                    </div>
                    <div
                      className="qty-control__increase"
                      onClick={() => setQty(qty + 1)}
                    >
                      +
                    </div>
                  </div>
                  {/* .qty-control */}
                  <button
                    className="btn btn-primary btn-addtocart"
                    onClick={(e) => {
                      e.preventDefault(),
                        dispatch(showcart()),
                        dispatch(addCart({ ...product, quantity: 1 }));
                    }}
                  >
                    Add to Cart
                  </button>
                </div>
              </form>
              <div className="product-single__addtolinks">
                <a
                  className="menu-link menu-link_us-s add-to-wishlist"
                  onClick={() => dispatch(addWishlist(product))}
                >
                  {product.added ? (
                    <FaHeart fontSize={20} style={{ color: "red" }} />
                  ) : (
                    <CiHeart fontSize={20} />
                  )}
                  <span>{!product.added ? "Add to Wishlist" : "Added"}</span>
                </a>
                <button className="share-button">
                  <a className="menu-link menu-link_us-s to-share border-0 bg-transparent d-flex align-items-center">
                    <IoShareSocialOutline fontSize={20} />
                    <span>Share</span>
                  </a>
                </button>
              </div>
              <div className="product-single__meta-info">
                <div className="meta-item">
                  <label>SKU:</label>
                  <span>N/A</span>
                </div>
                <div className="meta-item">
                  <label>Categories:</label>
                  <span>Casual &amp; {product.categories}</span>
                </div>
                <div className="meta-item">
                  <label>Tags:</label>
                  <span>{product.tags}</span>
                </div>
              </div>
            </div>
          </div>
          <TabContainer
            defaultActiveKey="desc"
          >
            <Nav
              className="nav nav-tabs"
              id="myTab"
              role="tablist"
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: 40,
              }}
            >
              <NavItem className="nav-item" role="presentation">
                <NavLink
                  className="nav-link nav-link_underscore"
                  id="tab-description-tab"
                  role="tab"
                  eventKey="desc"
                >
                  Description
                </NavLink>
              </NavItem>
              <NavItem className="nav-item" role="presentation">
                <NavLink
                  className="nav-link nav-link_underscore"
                  id="tab-additional-info-tab"
                  eventKey="info"
                >
                  Additional Information
                </NavLink>
              </NavItem>
              <NavItem className="nav-item" role="presentation">
                <NavLink
                  className="nav-link nav-link_underscore"
                  id="tab-reviews-tab"
                  eventKey="review"
                >
                  Reviews (2)
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent className="tab-content">
              <TabPane
                className="tab-pane"
                id="tab-description"
                eventKey="desc"
              >
                <div className="product-single__description">
                  <h3 className="block-title mb-4">
                    Sed do eiusmod tempor incididunt ut labore
                  </h3>
                  <p className="content">{product.desc}</p>
                  <div className="row">
                    <div className="col-lg-6">
                      <h3 className="block-title">Why choose product?</h3>
                      <ul className="list text-list">
                        <li>Creat by cotton fibric with soft and smooth</li>
                        <li>
                          Simple, Configurable (e.g. size, color, etc.), bundled
                        </li>
                        <li>Downloadable/Digital Products, Virtual Products</li>
                      </ul>
                    </div>
                    <div className="col-lg-6">
                      <h3 className="block-title">Sample Number List</h3>
                      <ol className="list text-list">
                        <li>Create Store-specific attrittbutes on the fly</li>
                        <li>
                          Simple, Configurable (e.g. size, color, etc.), bundled
                        </li>
                        <li>Downloadable/Digital Products, Virtual Products</li>
                      </ol>
                    </div>
                  </div>
                  <h3 className="block-title mb-0">Lining</h3>
                  <p className="content">
                    100% Polyester, Main: 100% Polyester.
                  </p>
                </div>
              </TabPane>
              <TabPane
                className="tab-pane fade"
                id="tab-additional-info"
                role="tabpanel"
                eventKey="info"
                aria-labelledby="tab-additional-info-tab"
              >
                <div className="product-single__addtional-info">
                  <div className="item">
                    <label className="h6">Weight</label>
                    <span>{product.weight} kg</span>
                  </div>
                  <div className="item">
                    <label className="h6">Dimensions</label>
                    <span>{product.dimensions}</span>
                  </div>
                  <div className="item">
                    <label className="h6">Size</label>
                    <span>{product.sizes}</span>
                  </div>
                  <div className="item">
                    <label className="h6">Color</label>
                    <span>{product.color}</span>
                  </div>
                  <div className="item">
                    <label className="h6">Storage</label>
                    <span>{product.storage}</span>
                  </div>
                </div>
              </TabPane>
              <TabPane
                className="tab-pane fade"
                id="tab-reviews"
                role="tabpanel"
                eventKey="review"
                aria-labelledby="tab-reviews-tab"
              >
                <h2 className="product-single__reviews-title">Reviews</h2>
                <div className="product-single__reviews-list">
                  <div className="product-single__reviews-item">
                    <div className="customer-avatar">
                      <img loading="lazy" src="../images/avatar.jpg" alt="" />
                    </div>
                    <div className="customer-review">
                      <div className="customer-name">
                        <h6>Janice Miller</h6>
                        <div className="reviews-group d-flex">
                          <svg
                            className="review-star"
                            viewBox="0 0 9 9"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <use href="#icon_star" />
                          </svg>
                          <svg
                            className="review-star"
                            viewBox="0 0 9 9"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <use href="#icon_star" />
                          </svg>
                          <svg
                            className="review-star"
                            viewBox="0 0 9 9"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <use href="#icon_star" />
                          </svg>
                          <svg
                            className="review-star"
                            viewBox="0 0 9 9"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <use href="#icon_star" />
                          </svg>
                          <svg
                            className="review-star"
                            viewBox="0 0 9 9"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <use href="#icon_star" />
                          </svg>
                        </div>
                      </div>
                      <div className="review-date">April 06, 2023</div>
                      <div className="review-text">
                        <p>
                          Nam libero tempore, cum soluta nobis est eligendi
                          optio cumque nihil impedit quo minus id quod maxime
                          placeat facere possimus, omnis voluptas assumenda est…
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="product-single__reviews-item">
                    <div className="customer-avatar">
                      <img loading="lazy" src="../images/avatar.jpg" alt="" />
                    </div>
                    <div className="customer-review">
                      <div className="customer-name">
                        <h6>Benjam Porter</h6>
                        <div className="reviews-group d-flex">
                          <svg
                            className="review-star"
                            viewBox="0 0 9 9"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <use href="#icon_star" />
                          </svg>
                          <svg
                            className="review-star"
                            viewBox="0 0 9 9"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <use href="#icon_star" />
                          </svg>
                          <svg
                            className="review-star"
                            viewBox="0 0 9 9"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <use href="#icon_star" />
                          </svg>
                          <svg
                            className="review-star"
                            viewBox="0 0 9 9"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <use href="#icon_star" />
                          </svg>
                          <svg
                            className="review-star"
                            viewBox="0 0 9 9"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <use href="#icon_star" />
                          </svg>
                        </div>
                      </div>
                      <div className="review-date">April 06, 2023</div>
                      <div className="review-text">
                        <p>
                          Nam libero tempore, cum soluta nobis est eligendi
                          optio cumque nihil impedit quo minus id quod maxime
                          placeat facere possimus, omnis voluptas assumenda est…
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="product-single__review-form">
                  <form name="customer-review-form">
                    <h5>Be the first to review “Message Cotton T-Shirt”</h5>
                    <p>
                      Your email address will not be published. Required fields
                      are marked *
                    </p>
                    <div className="select-star-rating">
                      <label>Your rating *</label>
                      <span className="star-rating">
                        <svg
                          className="star-rating__star-icon"
                          width={12}
                          height={12}
                          fill="#ccc"
                          viewBox="0 0 12 12"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M11.1429 5.04687C11.1429 4.84598 10.9286 4.76562 10.7679 4.73884L7.40625 4.25L5.89955 1.20312C5.83929 1.07589 5.72545 0.928571 5.57143 0.928571C5.41741 0.928571 5.30357 1.07589 5.2433 1.20312L3.73661 4.25L0.375 4.73884C0.207589 4.76562 0 4.84598 0 5.04687C0 5.16741 0.0870536 5.28125 0.167411 5.3683L2.60491 7.73884L2.02902 11.0871C2.02232 11.1339 2.01563 11.1741 2.01563 11.221C2.01563 11.3951 2.10268 11.5558 2.29688 11.5558C2.39063 11.5558 2.47768 11.5223 2.56473 11.4754L5.57143 9.89509L8.57813 11.4754C8.65848 11.5223 8.75223 11.5558 8.84598 11.5558C9.04018 11.5558 9.12054 11.3951 9.12054 11.221C9.12054 11.1741 9.12054 11.1339 9.11384 11.0871L8.53795 7.73884L10.9688 5.3683C11.0558 5.28125 11.1429 5.16741 11.1429 5.04687Z" />
                        </svg>
                        <svg
                          className="star-rating__star-icon"
                          width={12}
                          height={12}
                          fill="#ccc"
                          viewBox="0 0 12 12"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M11.1429 5.04687C11.1429 4.84598 10.9286 4.76562 10.7679 4.73884L7.40625 4.25L5.89955 1.20312C5.83929 1.07589 5.72545 0.928571 5.57143 0.928571C5.41741 0.928571 5.30357 1.07589 5.2433 1.20312L3.73661 4.25L0.375 4.73884C0.207589 4.76562 0 4.84598 0 5.04687C0 5.16741 0.0870536 5.28125 0.167411 5.3683L2.60491 7.73884L2.02902 11.0871C2.02232 11.1339 2.01563 11.1741 2.01563 11.221C2.01563 11.3951 2.10268 11.5558 2.29688 11.5558C2.39063 11.5558 2.47768 11.5223 2.56473 11.4754L5.57143 9.89509L8.57813 11.4754C8.65848 11.5223 8.75223 11.5558 8.84598 11.5558C9.04018 11.5558 9.12054 11.3951 9.12054 11.221C9.12054 11.1741 9.12054 11.1339 9.11384 11.0871L8.53795 7.73884L10.9688 5.3683C11.0558 5.28125 11.1429 5.16741 11.1429 5.04687Z" />
                        </svg>
                        <svg
                          className="star-rating__star-icon"
                          width={12}
                          height={12}
                          fill="#ccc"
                          viewBox="0 0 12 12"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M11.1429 5.04687C11.1429 4.84598 10.9286 4.76562 10.7679 4.73884L7.40625 4.25L5.89955 1.20312C5.83929 1.07589 5.72545 0.928571 5.57143 0.928571C5.41741 0.928571 5.30357 1.07589 5.2433 1.20312L3.73661 4.25L0.375 4.73884C0.207589 4.76562 0 4.84598 0 5.04687C0 5.16741 0.0870536 5.28125 0.167411 5.3683L2.60491 7.73884L2.02902 11.0871C2.02232 11.1339 2.01563 11.1741 2.01563 11.221C2.01563 11.3951 2.10268 11.5558 2.29688 11.5558C2.39063 11.5558 2.47768 11.5223 2.56473 11.4754L5.57143 9.89509L8.57813 11.4754C8.65848 11.5223 8.75223 11.5558 8.84598 11.5558C9.04018 11.5558 9.12054 11.3951 9.12054 11.221C9.12054 11.1741 9.12054 11.1339 9.11384 11.0871L8.53795 7.73884L10.9688 5.3683C11.0558 5.28125 11.1429 5.16741 11.1429 5.04687Z" />
                        </svg>
                        <svg
                          className="star-rating__star-icon"
                          width={12}
                          height={12}
                          fill="#ccc"
                          viewBox="0 0 12 12"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M11.1429 5.04687C11.1429 4.84598 10.9286 4.76562 10.7679 4.73884L7.40625 4.25L5.89955 1.20312C5.83929 1.07589 5.72545 0.928571 5.57143 0.928571C5.41741 0.928571 5.30357 1.07589 5.2433 1.20312L3.73661 4.25L0.375 4.73884C0.207589 4.76562 0 4.84598 0 5.04687C0 5.16741 0.0870536 5.28125 0.167411 5.3683L2.60491 7.73884L2.02902 11.0871C2.02232 11.1339 2.01563 11.1741 2.01563 11.221C2.01563 11.3951 2.10268 11.5558 2.29688 11.5558C2.39063 11.5558 2.47768 11.5223 2.56473 11.4754L5.57143 9.89509L8.57813 11.4754C8.65848 11.5223 8.75223 11.5558 8.84598 11.5558C9.04018 11.5558 9.12054 11.3951 9.12054 11.221C9.12054 11.1741 9.12054 11.1339 9.11384 11.0871L8.53795 7.73884L10.9688 5.3683C11.0558 5.28125 11.1429 5.16741 11.1429 5.04687Z" />
                        </svg>
                        <svg
                          className="star-rating__star-icon"
                          width={12}
                          height={12}
                          fill="#ccc"
                          viewBox="0 0 12 12"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M11.1429 5.04687C11.1429 4.84598 10.9286 4.76562 10.7679 4.73884L7.40625 4.25L5.89955 1.20312C5.83929 1.07589 5.72545 0.928571 5.57143 0.928571C5.41741 0.928571 5.30357 1.07589 5.2433 1.20312L3.73661 4.25L0.375 4.73884C0.207589 4.76562 0 4.84598 0 5.04687C0 5.16741 0.0870536 5.28125 0.167411 5.3683L2.60491 7.73884L2.02902 11.0871C2.02232 11.1339 2.01563 11.1741 2.01563 11.221C2.01563 11.3951 2.10268 11.5558 2.29688 11.5558C2.39063 11.5558 2.47768 11.5223 2.56473 11.4754L5.57143 9.89509L8.57813 11.4754C8.65848 11.5223 8.75223 11.5558 8.84598 11.5558C9.04018 11.5558 9.12054 11.3951 9.12054 11.221C9.12054 11.1741 9.12054 11.1339 9.11384 11.0871L8.53795 7.73884L10.9688 5.3683C11.0558 5.28125 11.1429 5.16741 11.1429 5.04687Z" />
                        </svg>
                      </span>
                      <input
                        type="hidden"
                        id="form-input-rating"
        
                      />
                    </div>
                    <div className="mb-4">
                      <textarea
                        id="form-input-review"
                        className="form-control form-control_gray"
                        placeholder="Your Review"
                        cols={30}
                        rows={8}
                      
                      />
                    </div>
                    <div className="form-label-fixed mb-4">
                      <label htmlFor="form-input-name" className="form-label">
                        Name *
                      </label>
                      <input
                        id="form-input-name"
                        className="form-control form-control-md form-control_gray"
                      />
                    </div>
                    <div className="form-label-fixed mb-4">
                      <label htmlFor="form-input-email" className="form-label">
                        Email address *
                      </label>
                      <input
                        id="form-input-email"
                        className="form-control form-control-md form-control_gray"
                      />
                    </div>
                    <div className="form-check mb-4">
                      <input
                        className="form-check-input form-check-input_fill"
                        type="checkbox"
      
                      id="remember_checkbox"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="remember_checkbox"
                      >
                        Save my name, email, and website in this browser for the
                        next time I comment.
                      </label>
                    </div>
                    <div className="form-action">
                      <button type="submit" className="btn btn-primary">
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </TabPane>
            </TabContent>
          </TabContainer>
        </section>
        <section className="products-carousel container">
          <h2 className="h3 text-uppercase mb-4 pb-xl-2 mb-xl-4">
            Related <strong>Products</strong>
          </h2>
          <div id="related_products" className="position-relative">
            <Swiper
              modules={[A11y, Navigation]}
              slidesPerView={4}
              navigation={{ nextEl: ".arrow-left", prevEl: ".arrow-right" }}
              spaceBetween={50}
              className="swiper-container js-swiper-slider"
              breakpoints={{
                320: {
                  slidesPerView: 2,
                  spaceBetween: 14,
                  slidesPerGroup: 2
                },
                768: {
                  slidesPerView: 3,
                  slidesPerGroup: 3,
                  spaceBetween: 24
                },
                992: {
                  slidesPerView: 4,
                  slidesPerGroup: 1,
                  spaceBetween: 30
                }
              }}
            >
              {products.map((product) => {
                return (
                  <SwiperSlide
                    className="swiper-slide product-card"
                    key={product.id}
                  >
                    <LimitedProduct product={product} />
                  </SwiperSlide>
                );
              })}
            </Swiper>
            {/* /.swiper-container js-swiper-slider */}
            <div className="products-carousel__prev position-absolute top-50 d-flex align-items-center justify-content-center arrow-right">
              <GrPrevious fontSize={25} />
            </div>
            {/* /.products-carousel__prev */}
            <div className="products-carousel__next position-absolute top-50 d-flex align-items-center justify-content-center arrow-left">
              <GrNext fontSize={25} />
            </div>
            {/* /.products-carousel__next */}
            <div className="products-pagination mt-4 mb-5 d-flex align-items-center justify-content-center" />
            {/* /.products-pagination */}
          </div>
          {/* /.position-relative */}
        </section>
        {/* /.products-carousel container */}
      </main>
      <div className="mb-5 pb-xl-5" />
    </>
  );
}
