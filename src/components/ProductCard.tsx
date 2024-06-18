
import { CiHeart } from "react-icons/ci";
import { A11y, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import { IoStarSharp } from "react-icons/io5";
import { useNavigate } from "react-router";
import { addWishlist, wishlistSelector } from "../redux/lib/wishlistSlice.ts";
import { addCart } from "../redux/lib/cartSlice.ts";
import { FaHeart } from "react-icons/fa";
import { updateProduct } from "../redux/lib/productsSlice.ts";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { SingleProduct } from "../types/index.ts";
import { useAppDispatch } from "../redux/store.ts";

export default function ProductCard({ product }:SingleProduct) {
  const wishlist = useSelector(wishlistSelector).wishlist;
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const found = wishlist.find((item) => item.id === product.id);
    if (found) {
      dispatch(updateProduct({ ...product, added: true }));
    } else {
      dispatch(updateProduct({ ...product, added: false }));
    }
  }, [wishlist]);

  return (
    <div className="product-card-wrapper">
      <div className="product-card mb-3 mb-md-4 mb-xxl-5">
        <div className="pc__img-wrapper">
          <Swiper
            id={new Date().getTime().toString()}
            className={`swiper-wrapper mySwipper-${new Date()
              .getTime()
              .toString()}`}
            loop={true}
            modules={[A11y, Navigation]}
            slidesPerView={1}
            navigation={{
              nextEl: `.pc__img-next_${new Date().getTime().toString()}`,
              prevEl: `.pc__img-prev_${new Date().getTime().toString()}`,
            }}
            spaceBetween={50}
          >
            {product.images.map((url, index) => {
              return (
                <SwiperSlide key={index} style={{ width: 255 }}>
                  <button
                    onClick={() =>
                      navigate(`/shop/product-details/${product.id}`)
                    }
                  >
                    <img
                      loading="lazy"
                      src={url}
                      width={330}
                      height={400}
                      alt="Cropped Faux leather Jacket"
                      className="pc__img"
                    />
                  </button>
                </SwiperSlide>
              );
            })}
          </Swiper>
          <span
            className={`pc__img-prev_${new Date().getTime().toString()}`}
            style={{fontSize:25}}
            role="button"
            aria-controls={new Date().getTime().toString()}
          >
            <GrPrevious fontSize={25} />
          </span>
          <span
            className={`pc__img-next_${new Date().getTime().toString()}`}
            role="button"
            aria-controls={new Date().getTime().toString()}
          >
            <GrNext />
          </span>
          <button
            className="pc__atc btn anim_appear-bottom btn position-absolute border-0 text-uppercase fw-medium js-add-cart js-open-aside"
            data-aside="cartDrawer"
            title="Add To Cart"
            onClick={() => dispatch(addCart({ ...product, quantity: 1 }))}
          >
            Add To Cart
          </button>
        </div>
        <div className="pc__info position-relative">
          <p className="pc__category">{product.type}</p>
          <h6 className="pc__title">
            <a>{product.name}</a>
          </h6>
          <div className="product-card__price d-flex">
            <span className="money price">${product.price}</span>
          </div>
          <div className="product-card__review d-flex align-items-center">
            <div className="reviews-group d-flex">
              <IoStarSharp />
              <IoStarSharp />
              <IoStarSharp />
              <IoStarSharp />
            </div>
            <span className="reviews-note text-lowercase text-secondary ms-1">
              8k+ reviews
            </span>
          </div>
          <button
            className="pc__btn-wl position-absolute top-0 end-0 bg-transparent border-0 js-add-wishlist"
            title="Add To Wishlist"
            onClick={() => dispatch(addWishlist(product))}
          >
            {product.added ? (
              <FaHeart fontSize={20} style={{ color: "red" }} />
            ) : (
              <CiHeart fontSize={20} />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
