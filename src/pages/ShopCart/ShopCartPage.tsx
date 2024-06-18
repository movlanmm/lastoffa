import ShopCartItem from "../../components/ShopCartItem";
import { useNavigate } from 'react-router';
import {
  flatRate,
  freeShipping,
  localPick,
  shippingSelector,
} from "../../redux/lib/shippingSlice.ts";
import { useAppDispatch, useAppSelector } from "../../redux/store.ts";
import { cartSelector } from "../../redux/lib/cartSlice.ts";

export default function ShopCartPage() {
  const navigate = useNavigate()
  const cart = useAppSelector(cartSelector).cart;
  const shipping = useAppSelector(shippingSelector);
  const dispatch = useAppDispatch();

  const subtotalPrice = () => {
    let total = 0;
    cart.map((item) => {
      total += parseInt(item.price) * (item.quantity);
    });
    return total;
  };

  return (
    <>
      <div className="shopping-cart">
        <div className="cart-table__wrapper">
          <table className="cart-table">
            <thead>
              <tr>
                <th>Product</th>
                <th />
                <th>Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {cart.length > 0 ? (
                cart.map((item, index) => {
                  return <ShopCartItem key={index} item={item} />;
                })
              ) : (
                <tr>
                  <td colSpan={10} className="text-center">
                    Your Cart is Empty
                  </td>
                </tr>
              )}
            </tbody>
          </table>
          <div className="cart-table-footer">
            <form
              action="https://uomo-html.flexkitux.com/Demo1/"
              className="position-relative bg-body"
            >
              <input
                className="form-control"
                type="text"
                name="coupon_code"
                placeholder="Coupon Code"
              />
              <input
                className="btn-link fw-medium position-absolute top-0 end-0 h-100 px-4"
                type="submit"
        
              />
            </form>
            <button className="btn btn-light">UPDATE CART</button>
          </div>
        </div>
        <div className="shopping-cart__totals-wrapper">
          <div className="sticky-content">
            <div className="shopping-cart__totals">
              <h3>Cart Totals</h3>
              <table className="cart-totals">
                <tbody>
                  <tr>
                    <th>Subtotal</th>
                    <td>${subtotalPrice()}</td>
                  </tr>
                  <tr>
                    <th>Shipping</th>
                    <td>
                      <div className="form-check">
                        <input
                          className="form-check-input form-check-input_fill"
                          type="radio"
                          onChange={() => dispatch(freeShipping())}
                          checked={shipping.amount === 0}
                          name="radio"
                          id="free_shipping"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="free_shipping"
                        >
                          Free shipping
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input form-check-input_fill"
                          type="radio"
                          name="radio"
                          value={49}
                          checked={shipping.amount === 49}
                          onChange={(e) => {
                            dispatch(flatRate());
                          }}
                          id="flat_rate"
                        />
                        <label className="form-check-label" htmlFor="flat_rate">
                          Flat rate: $49
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input form-check-input_fill"
                          name="radio"
                          type="radio"
                          checked={shipping.amount === 8}
                          onChange={() => {
                            dispatch(localPick());
                          }}
                       
                        id="local_pickup"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="local_pickup"
                        >
                          Local pickup: $8
                        </label>
                      </div>
                      <div>Shipping to AL.</div>
                      <div>
                        <a href="#" className="menu-link menu-link_us-s">
                          CHANGE ADDRESS
                        </a>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th>VAT</th>
                    <td>$19</td>
                  </tr>
                  <tr>
                    <th>Total</th>
                    <td>${subtotalPrice() + 19 + shipping.amount}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mobile_fixed-btn_wrapper">
              <div className="button-wrapper container">
                <button className="btn btn-primary btn-checkout" onClick={() => { cart.length > 0 && navigate('/shopcart/checkout') }}>
                  PROCEED TO CHECKOUT
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
