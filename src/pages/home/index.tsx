import {
  Pagination,
  A11y,
  Autoplay,
  EffectFade,
  Navigation,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import HomeProductCard from "../../components/HomeProductCard";
import { GrNext, GrPrevious } from "react-icons/gr";
import LimitedProduct from "../../components/LimitedProduct";
import { useAppSelector } from "../../redux/store";
import { productsSelector } from "../../redux/lib/productsSlice";


export default function Home() {
  const products = useAppSelector(productsSelector).products

  return (
    <main>
      <section>
        <Swiper
          className="swiper-container js-swiper-slider slideshow full-width_padding"
          modules={[Autoplay, EffectFade, Pagination, A11y]}
          spaceBetween={50}
          effect="fade"
          autoplay={{
            delay: 4000,
            disableOnInteraction: true,
          }}
          slidesPerView={1}
          pagination={{ clickable: true }}
        >
          <SwiperSlide>
            <div
              className="swiper-slide full-width_border border-1"
              style={{ borderColor: "#f5e6e0" }}
            >
              <div className="overflow-hidden position-relative h-100">
                <div
                  className="slideshow-bg"
                  style={{ backgroundColor: "#f5e6e0" }}
                >
                  <img
                    loading="lazy"
                    src="../../../public/images/slideshow-pattern.png"
                    width={1761}
                    height={778}
                    alt="Pattern"
                    className="slideshow-bg__img object-fit-cover"
                  />
                </div>
                {/* <p class="slideshow_markup font-special text-uppercase position-absolute end-0 bottom-0">Summer</p> */}
                <div className="slideshow-character position-absolute bottom-0 pos_right-center">
                  <img
                    loading="lazy"
                    src="../../../public/images/slideshow-character1.png"
                    width={400}
                    height={733}
                    alt="Woman Fashion 1"
                    className="slideshow-character__img animate animate_fade animate_btt animate_delay-9 h-auto w-auto"
                  />
                  <div className="character_markup">
                    <p className="text-uppercase font-sofia fw-bold animate animate_fade animate_rtl animate_delay-10">
                      Summer
                    </p>
                  </div>
                </div>
                <div className="slideshow-text container position-absolute start-50 top-50 translate-middle">
                  <h6 className="text_dash text-uppercase text-red fs-base fw-medium animate animate_fade animate_btt animate_delay-3">
                    New Trend
                  </h6>
                  <h2 className="text-uppercase h1 fw-normal mb-0 animate animate_fade animate_btt animate_delay-5">
                    Summer Sale Stylish
                  </h2>
                  <h2 className="text-uppercase h1 fw-bold animate animate_fade animate_btt animate_delay-5">
                    Womens
                  </h2>
                  <a
                    href="shop1.html"
                    className="btn-link btn-link_lg default-underline text-uppercase fw-medium animate animate_fade animate_btt animate_delay-7"
                  >
                    Discover More
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div
              className="swiper-slide full-width_border border-1"
              style={{ borderColor: "#f5e6e0" }}
            >
              <div className="overflow-hidden position-relative h-100">
                <div
                  className="slideshow-bg"
                  style={{ backgroundColor: "#f5e6e0" }}
                >
                  <img
                    loading="lazy"
                    src="../../../public/images/slideshow-pattern.png"
                    width={1761}
                    height={778}
                    alt="Pattern"
                    className="slideshow-bg__img object-fit-cover"
                  />
                </div>
                <div className="slideshow-character position-absolute bottom-0 pos_right-center">
                  <img
                    loading="lazy"
                    src="../../../public/images/slideshow-character2.png"
                    width={400}
                    height={690}
                    alt="Woman Fashion 2"
                    className="slideshow-character__img animate animate_fade animate_rtl animate_delay-10 h-auto w-auto"
                  />
                </div>
                <div className="slideshow-text container position-absolute start-50 top-50 translate-middle">
                  <h6 className="text_dash text-uppercase text-red fs-base fw-medium animate animate_fade animate_btt animate_delay-3">
                    Summer 2024
                  </h6>
                  <h2 className="text-uppercase h1 fw-bold animate animate_fade animate_btt animate_delay-3">
                    Hello New Season
                  </h2>
                  <h6 className="text-uppercase mb-5 animate animate_fade animate_btt animate_delay-3">
                    Limited Time Offer - Up to 60% off &amp; Free Shipping
                  </h6>
                  <a
                    href="shop1.html"
                    className="btn-link btn-link_lg default-underline text-uppercase fw-medium animate animate_fade animate_btt animate_delay-3"
                  >
                    Discover More
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="slideshow-social-follow d-none d-xxl-block position-absolute top-50 start-0 translate-middle-y text-center">
          <ul className="social-links list-unstyled mb-0 text-secondary">
            <li>
              <a href="#" className="footer__social-link d-block">
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
          {/* /.social-links list-unstyled mb-0 text-secondary */}
          <span className="slideshow-social-follow__title d-block mt-5 text-uppercase fw-medium text-secondary">
            Follow Us
          </span>
        </div>
        {/* /.slideshow-social-follow */}
        <a
          href="#section-collections-grid_masonry"
          className="slideshow-scroll d-none d-xxl-block position-absolute end-0 bottom-0 text_dash text-uppercase fw-medium"
        >
          Scroll
        </a>
      </section>
      {/* /.slideshow */}
      <div className="mb-3 pb-3 mb-md-4 pb-md-4 mb-xl-5 pb-xl-5" />
      <div className="pb-1" />
      {/* Shop by collection */}
      <section
        className="collections-grid collections-grid_masonry"
        id="section-collections-grid_masonry"
      >
        <div className="container h-md-100">
          <div className="row h-md-100">
            <div className="col-lg-6 h-md-100">
              <div className="collection-grid__item position-relative h-md-100">
                <div
                  className="background-img"
                  style={{
                    backgroundImage: 'url("../images/collection_grid_1.jpg")',
                  }}
                />
                <div className="content_abs content_bottom content_left content_bottom-md content_left-md">
                  <p className="text-uppercase mb-1">Hot List</p>
                  <h3 className="text-uppercase">
                    <strong>Women</strong> Collection
                  </h3>
                  <a
                    href="shop1.html"
                    className="btn-link default-underline text-uppercase fw-medium"
                  >
                    Shop Now
                  </a>
                </div>
                {/* /.content_abs content_bottom content_left content_bottom-md content_left-md */}
              </div>
            </div>
            {/* /.col-md-6 */}
            <div className="col-lg-6 d-flex flex-column">
              <div className="collection-grid__item position-relative flex-grow-1 mb-lg-4">
                <div
                  className="background-img"
                  style={{
                    backgroundImage: 'url("../images/collection_grid_2.jpg")',
                  }}
                />
                <div className="content_abs content_bottom content_left content_bottom-md content_left-md">
                  <p className="text-uppercase mb-1">Hot List</p>
                  <h3 className="text-uppercase">
                    <strong>Men</strong> Collection
                  </h3>
                  <a
                    href="shop1.html"
                    className="btn-link default-underline text-uppercase fw-medium"
                  >
                    Shop Now
                  </a>
                </div>
                {/* /.content_abs content_bottom content_left content_bottom-md content_left-md */}
              </div>
              <div className="position-relative flex-grow-1 mt-lg-1">
                <div className="row h-md-100">
                  <div className="col-md-6 h-md-100">
                    <div className="collection-grid__item h-md-100 position-relative">
                      <div
                        className="background-img"
                        style={{
                          backgroundImage:
                            'url("../images/collection_grid_3.jpg")',
                        }}
                      />
                      <div className="content_abs content_bottom content_left content_bottom-md content_left-md">
                        <p className="text-uppercase mb-1">Hot List</p>
                        <h3 className="text-uppercase">
                          <strong>Kids</strong> Collection
                        </h3>
                        <a
                          href="shop1.html"
                          className="btn-link default-underline text-uppercase fw-medium"
                        >
                          Shop Now
                        </a>
                      </div>
                      {/* /.content_abs content_bottom content_left content_bottom-md content_left-md */}
                    </div>
                    {/* /.collection-grid__item */}
                  </div>
                  <div className="col-md-6 h-md-100">
                    <div className="collection-grid__item h-md-100 position-relative">
                      <div
                        className="background-img"
                        style={{ backgroundColor: "#f5e6e0" }}
                      />
                      <div className="content_abs content_bottom content_left content_bottom-md content_left-md">
                        <h3 className="text-uppercase">
                          <strong>E-Gift</strong> Cards
                        </h3>
                        <p className="mb-1">
                          Surprise someone with the gift they
                          <br />
                          really want.
                        </p>
                        <a
                          href="shop1.html"
                          className="btn-link default-underline text-uppercase fw-medium"
                        >
                          Shop Now
                        </a>
                      </div>
                      {/* /.content_abs content_bottom content_left content_bottom-md content_left-md */}
                    </div>
                    {/* /.collection-grid__item */}
                  </div>
                </div>
              </div>
            </div>
            {/* /.col-md-6 */}
          </div>
          {/* /.row */}
        </div>
        {/* /.container */}
      </section>
      {/* /.collections-grid collections-grid_masonry */}
      <div className="mb-4 pb-4 mb-xl-5 pb-xl-5" />
      <section className="products-grid container">
        <h2 className="section-title text-uppercase text-center mb-1 mb-md-3 pb-xl-2 mb-xl-4">
          Our Trendy <strong>Products</strong>
        </h2>
        <ul
          className="nav nav-tabs mb-3 text-uppercase justify-content-center"
          id="collections-tab"
          role="tablist"
        >
          <li className="nav-item" role="presentation">
            <a
              className="nav-link nav-link_underscore active"
              id="collections-tab-1-trigger"
              data-bs-toggle="tab"
              href="#collections-tab-1"
              role="tab"
              aria-controls="collections-tab-1"
              aria-selected="true"
            >
              All
            </a>
          </li>
          <li className="nav-item" role="presentation">
            <a
              className="nav-link nav-link_underscore"
              id="collections-tab-2-trigger"
              data-bs-toggle="tab"
              href="#collections-tab-2"
              role="tab"
              aria-controls="collections-tab-2"
              aria-selected="true"
            >
              New Arrivals
            </a>
          </li>
          <li className="nav-item" role="presentation">
            <a
              className="nav-link nav-link_underscore"
              id="collections-tab-3-trigger"
              data-bs-toggle="tab"
              href="#collections-tab-3"
              role="tab"
              aria-controls="collections-tab-3"
              aria-selected="true"
            >
              Best Seller
            </a>
          </li>
          <li className="nav-item" role="presentation">
            <a
              className="nav-link nav-link_underscore"
              id="collections-tab-4-trigger"
              data-bs-toggle="tab"
              href="#collections-tab-4"
              role="tab"
              aria-controls="collections-tab-4"
              aria-selected="true"
            >
              Top Rated
            </a>
          </li>
        </ul>
        <div className="tab-content pt-2" id="collections-tab-content">
          <div
            className="tab-pane fade show active"
            id="collections-tab-1"
            role="tabpanel"
            aria-labelledby="collections-tab-1-trigger"
          >
            <div className="row">
              {products.map((product) => (
                <HomeProductCard key={product.id} product={product} />
              ))}
            </div>
            {/* /.row */}
            <div className="text-center mt-2">
              <a
                className="btn-link btn-link_lg default-underline text-uppercase fw-medium"
                href="shop1.html"
              >
                Discover More
              </a>
            </div>
          </div>
          {/* /.tab-pane fade show*/}

          {/* /.tab-pane fade show*/}

          {/* /.tab-pane fade show*/}

          {/* /.tab-pane fade show*/}
        </div>
        {/* /.tab-content pt-2 */}
      </section>
      {/* /.products-grid */}
      <div className="mb-3 mb-xl-5 pb-1 pb-xl-5" />
      <section
        className="deal-timer position-relative d-flex align-items-end overflow-hidden"
        style={{ backgroundColor: "#ebebeb" }}
      >
        <div
          className="background-img"
          style={{ backgroundImage: 'url("../images/deal_timer_bg.jpg")' }}
        />
        <div className="deal-timer-wrapper container position-relative">
          <div className="deal-timer__content pb-2 mb-3 pb-xl-5 mb-xl-3 mb-xxl-5">
            <p className="text_dash text-uppercase text-red fw-medium">
              Deal of the week
            </p>
            <h3 className="h1 text-uppercase">
              <strong>Spring</strong> Collection
            </h3>
            <a
              href="shop1.html"
              className="btn-link default-underline text-uppercase fw-medium mt-3"
            >
              Shop Now
            </a>
          </div>
          <div
            className="position-relative d-flex align-items-center text-center pt-xxl-4 js-countdown"
            data-date="18-5-2024"
            data-time="06:50"
          >
            <div className="day countdown-unit">
              <span className="countdown-num d-block" />
              <span className="countdown-word fw-bold text-uppercase text-secondary">
                Days
              </span>
            </div>
            <div className="hour countdown-unit">
              <span className="countdown-num d-block" />
              <span className="countdown-word fw-bold text-uppercase text-secondary">
                Hours
              </span>
            </div>
            <div className="min countdown-unit">
              <span className="countdown-num d-block" />
              <span className="countdown-word fw-bold text-uppercase text-secondary">
                Mins
              </span>
            </div>
            <div className="sec countdown-unit">
              <span className="countdown-num d-block" />
              <span className="countdown-word fw-bold text-uppercase text-secondary">
                Sec
              </span>
            </div>
          </div>
        </div>
        {/* /.deal-timer-wrapper */}
      </section>
      {/* /.deal-timer */}
      <div className="mb-3 mb-xl-5 pb-1 pb-xl-5" />
      <section className="grid-banner container mb-3">
        <div className="row">
          <div className="col-md-6">
            <div className="grid-banner__item grid-banner__item_rect position-relative mb-3">
              <div
                className="background-img"
                style={{ backgroundImage: 'url("../images/banner_1.jpg")' }}
              />
              <div className="content_abs content_bottom content_left content_bottom-lg content_left-lg">
                <h6 className="text-uppercase text-white fw-medium mb-3">
                  Starting At $19
                </h6>
                <h3 className="text-white mb-3">Womens T-Shirts</h3>
                <a
                  href="shop1.html"
                  className="btn-link default-underline text-uppercase text-white fw-medium"
                >
                  Shop Now
                </a>
              </div>
              {/* /.content_abs content_bottom content_left content_bottom-md content_left-md */}
            </div>
          </div>
          {/* /.col-md-6 */}
          <div className="col-md-6">
            <div className="grid-banner__item grid-banner__item_rect position-relative mb-3">
              <div
                className="background-img"
                style={{ backgroundImage: 'url("../images/banner_2.jpg")' }}
              />
              <div className="content_abs content_bottom content_left content_bottom-lg content_left-lg">
                <h6 className="text-uppercase fw-medium mb-3">
                  Starting At $39
                </h6>
                <h3 className="mb-3">Mens Sportswear</h3>
                <a
                  href="shop1.html"
                  className="btn-link default-underline text-uppercase fw-medium"
                >
                  Shop Now
                </a>
              </div>
              {/* /.content_abs content_bottom content_left content_bottom-md content_left-md */}
            </div>
          </div>
          {/* /.col-md-6 */}
        </div>
        {/* /.row */}
      </section>
      {/* /.grid-banner container */}
      <div className="mb-5 pb-1 pb-xl-4" />
      <section className="products-carousel container">
        <h2 className="section-title text-uppercase text-center mb-4 pb-xl-2 mb-xl-4">
          Limited <strong>Edition</strong>
        </h2>
        <div id="product_carousel" className="position-relative">
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
                slidesPerGroup: 2,
              },
              768: {
                slidesPerView: 3,
                slidesPerGroup: 3,
                spaceBetween: 24,
              },
              992: {
                slidesPerView: 4,
                slidesPerGroup: 1,
                spaceBetween: 30,
              },
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
      <section className="instagram container">
        <h2 className="section-title text-uppercase text-center mb-4 pb-xl-2 mb-xl-4">
          LaStoffa
        </h2>
        <div className="row row-cols-3 row-cols-md-4 row-cols-xl-6">
          <div className="instagram__tile">
            <a
              href="https://instagram.com/"
              target="_blank"
              className="position-relative overflow-hidden d-block effect overlay-plus"
            >
              <img
                loading="lazy"
                className="instagram__img"
                src="../images/instagram/insta1.jpg"
                width={230}
                height={230}
                alt="Insta image 1"
              />
            </a>
          </div>
          <div className="instagram__tile">
            <a
              href="https://instagram.com/"
              target="_blank"
              className="position-relative overflow-hidden d-block effect overlay-plus"
            >
              <img
                loading="lazy"
                className="instagram__img"
                src="../images/instagram/insta2.jpg"
                width={230}
                height={230}
                alt="Insta image 2"
              />
            </a>
          </div>
          <div className="instagram__tile">
            <a
              href="https://instagram.com/"
              target="_blank"
              className="position-relative overflow-hidden d-block effect overlay-plus"
            >
              <img
                loading="lazy"
                className="instagram__img"
                src="../images/instagram/insta3.jpg"
                width={230}
                height={230}
                alt="Insta image 3"
              />
            </a>
          </div>
          <div className="instagram__tile">
            <a
              href="https://instagram.com/"
              target="_blank"
              className="position-relative overflow-hidden d-block effect overlay-plus"
            >
              <img
                loading="lazy"
                className="instagram__img"
                src="../images/instagram/insta4.jpg"
                width={230}
                height={230}
                alt="Insta image 4"
              />
            </a>
          </div>
          <div className="instagram__tile">
            <a
              href="https://instagram.com/"
              target="_blank"
              className="position-relative overflow-hidden d-block effect overlay-plus"
            >
              <img
                loading="lazy"
                className="instagram__img"
                src="../images/instagram/insta5.jpg"
                width={230}
                height={230}
                alt="Insta image 5"
              />
            </a>
          </div>
          <div className="instagram__tile">
            <a
              href="https://instagram.com/"
              target="_blank"
              className="position-relative overflow-hidden d-block effect overlay-plus"
            >
              <img
                loading="lazy"
                className="instagram__img"
                src="../images/instagram/insta6.jpg"
                width={230}
                height={230}
                alt="Insta image 6"
              />
            </a>
          </div>
          <div className="instagram__tile">
            <a
              href="https://instagram.com/"
              target="_blank"
              className="position-relative overflow-hidden d-block effect overlay-plus"
            >
              <img
                loading="lazy"
                className="instagram__img"
                src="../images/instagram/insta7.jpg"
                width={230}
                height={230}
                alt="Insta image 7"
              />
            </a>
          </div>
          <div className="instagram__tile">
            <a
              href="https://instagram.com/"
              target="_blank"
              className="position-relative overflow-hidden d-block effect overlay-plus"
            >
              <img
                loading="lazy"
                className="instagram__img"
                src="../images/instagram/insta8.jpg"
                width={230}
                height={230}
                alt="Insta image 8"
              />
            </a>
          </div>
          <div className="instagram__tile">
            <a
              href="https://instagram.com/"
              target="_blank"
              className="position-relative overflow-hidden d-block effect overlay-plus"
            >
              <img
                loading="lazy"
                className="instagram__img"
                src="../images/instagram/insta9.jpg"
                width={230}
                height={230}
                alt="Insta image 9"
              />
            </a>
          </div>
          <div className="instagram__tile">
            <a
              href="https://instagram.com/"
              target="_blank"
              className="position-relative overflow-hidden d-block effect overlay-plus"
            >
              <img
                loading="lazy"
                className="instagram__img"
                src="../images/instagram/insta10.jpg"
                width={230}
                height={230}
                alt="Insta image 10"
              />
            </a>
          </div>
          <div className="instagram__tile">
            <a
              href="https://instagram.com/"
              target="_blank"
              className="position-relative overflow-hidden d-block effect overlay-plus"
            >
              <img
                loading="lazy"
                className="instagram__img"
                src="../images/instagram/insta11.jpg"
                width={230}
                height={230}
                alt="Insta image 11"
              />
            </a>
          </div>
          <div className="instagram__tile">
            <a
              href="https://instagram.com/"
              target="_blank"
              className="position-relative overflow-hidden d-block effect overlay-plus"
            >
              <img
                loading="lazy"
                className="instagram__img"
                src="../images/instagram/insta12.jpg"
                width={230}
                height={230}
                alt="Insta image 12"
              />
            </a>
          </div>
        </div>
      </section>
      {/* /.instagram container */}
      <div className="mb-4 pb-4 pb-xl-5 mb-xl-5" />
      <section className="service-promotion container mb-md-4 pb-md-4 mb-xl-5">
        <div className="row">
          <div className="col-md-4 text-center mb-5 mb-md-0">
            <div className="service-promotion__icon mb-4">
              <svg
                width={52}
                height={52}
                viewBox="0 0 52 52"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <use href="#icon_shipping" />
              </svg>
            </div>
            <h3 className="service-promotion__title h5 text-uppercase">
              Fast And Free Delivery
            </h3>
            <p className="service-promotion__content text-secondary">
              Free delivery for all orders over $140
            </p>
          </div>
          {/* /.col-md-4 text-center*/}
          <div className="col-md-4 text-center mb-5 mb-md-0">
            <div className="service-promotion__icon mb-4">
              <svg
                width={53}
                height={52}
                viewBox="0 0 53 52"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <use href="#icon_headphone" />
              </svg>
            </div>
            <h3 className="service-promotion__title h5 text-uppercase">
              24/7 Customer Support
            </h3>
            <p className="service-promotion__content text-secondary">
              Friendly 24/7 customer support
            </p>
          </div>
          {/* /.col-md-4 text-center*/}
          <div className="col-md-4 text-center mb-4 pb-1 mb-md-0">
            <div className="service-promotion__icon mb-4">
              <svg
                width={52}
                height={52}
                viewBox="0 0 52 52"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <use href="#icon_shield" />
              </svg>
            </div>
            <h3 className="service-promotion__title h5 text-uppercase">
              Money Back Guarantee
            </h3>
            <p className="service-promotion__content text-secondary">
              We return money within 30 days
            </p>
          </div>
          {/* /.col-md-4 text-center*/}
        </div>
        {/* /.row */}
      </section>
      {/* /.service-promotion container */}
    </main>
  );
}
