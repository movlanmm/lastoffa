
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { removeFromCart, updateQuantity } from "../redux/lib/cartSlice.ts";
import { CartProduct } from "../types/index.ts";



export default function CartItem({ item }: { item: CartProduct }) {
  const [qty, setQty] = useState(item.quantity);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateQuantity({ ...item, quantity: qty }));
  }, [qty]);

  return (
    <>
      <div className="cart-drawer-item d-flex position-relative">
        <div className="position-relative">
          <a >
            <img
              loading="lazy"
              className="cart-drawer-item__img"
              src={item.images[0]}
              alt=""
            />
          </a>
        </div>
        <div className="cart-drawer-item__info flex-grow-1">
          <h6 className="cart-drawer-item__title fw-normal">
            <a >{item.name}</a>
          </h6>
          <p className="cart-drawer-item__option text-secondary">
            Color: Yellow
          </p>
          <p className="cart-drawer-item__option text-secondary">Size: L</p>
          <div className="d-flex align-items-center justify-content-between mt-1">
            <div className="qty-control position-relative">
              <input
                type="number"
                name="quantity"
                value={item.quantity}
                onChange={(e) => setQty(Number(e.target.value))}
                min={1}
                className="qty-control__number border-0 text-center"
              />
              <div
                className="qty-control__reduce text-start"
                onClick={() => setQty(qty - 1)}
              >
                -
              </div>
              <div
                className="qty-control__increase text-end"
                onClick={() => setQty(qty + 1)}
              >
                +
              </div>
            </div>
            {/* .qty-control */}
            <span className="cart-drawer-item__price money price">
              ${parseInt(item.price) * item.quantity}
            </span>
          </div>
        </div>
        <button className="btn-close-xs position-absolute top-0 end-0 js-cart-item-remove" onClick={() => dispatch(removeFromCart(item.id))} />
      </div>
      <hr className="cart-drawer-divider" />
    </>
  );
}
