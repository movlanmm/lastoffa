
import { CiHeart } from "react-icons/ci";
import { useNavigate } from "react-router";
import { addCart } from "../redux/lib/cartSlice.ts";
import { useState } from "react";
import { useEffect } from "react";
import { addWishlist, wishlistSelector } from "../redux/lib/wishlistSlice.ts";
import { updateProduct } from "../redux/lib/productsSlice.ts";
import { FaHeart } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "../redux/store";
import { SingleProduct } from "../types/index.ts";



export default function HomeProductCard({product}:SingleProduct) {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [btnText, setBtnText] = useState("Add to cart");
  const wishlist = useAppSelector(wishlistSelector).wishlist;

  const handleAdd = () => {
    dispatch(addCart({ ...product, quantity: 1 }));
    setBtnText("Added...");
  };

  useEffect(() => {
    const found = wishlist.find((item) => item.id === product.id);
    if (found) {
      dispatch(updateProduct({ ...product, added: true }));
    } else {
      dispatch(updateProduct({ ...product, added: false }));
    }
  }, [wishlist]);

  useEffect(() => {
    setTimeout(() => {
      setBtnText("Add to Cart");
    }, 1000);
  }, [btnText]);

  return (
    <div className="col-6 col-md-4 col-lg-3">
      <div className="product-card mb-3 mb-md-4 mb-xxl-5">
        <div className="pc__img-wrapper">
          <button
            onClick={() => navigate(`/shop/product-details/${product.id}`)}
          >
            <img
              loading="lazy"
              src={product.images[0]}
              width={330}
              height={400}
              alt="Cropped Faux leather Jacket"
              className="pc__img"
            />
            <img
              loading="lazy"
              src={product.images[1]}
              width={330}
              height={400}
              alt="Cropped Faux leather Jacket"
              className="pc__img pc__img-second"
            />
          </button>
          <button
            className="pc__atc btn anim_appear-bottom btn position-absolute border-0 text-uppercase fw-medium js-add-cart js-open-aside"
            data-aside="cartDrawer"
            title="Add To Cart"
            onClick={() => handleAdd()}
          >
            {btnText}
          </button>
        </div>
        <div className="pc__info position-relative">
          <p className="pc__category">{product.type}</p>
          <h6 className="pc__title">
            <a >{product.name}</a>
          </h6>
          <div className="product-card__price d-flex">
            <span className="money price">${product.price}</span>
          </div>
          <div className="product-card__review d-flex align-items-center">
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
