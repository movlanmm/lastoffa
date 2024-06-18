
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { removeFromCart, updateQuantity } from "../redux/lib/cartSlice.ts";
import { CartProduct } from "../types/index.ts";

export default function ShopCartItem({ item }:{item:CartProduct}) {

    const [qty, setQty] = useState(item.quantity);
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(updateQuantity({...item, quantity: qty}));
    }, [qty]);
    
  return (
    <tr>
      <td>
        <div className="shopping-cart__product-item">
          <a >
            <img
              loading="lazy"
              src={item.images[0]}
              width={120}
              height={120}
              alt=""
            />
          </a>
        </div>
      </td>
      <td>
        <div className="shopping-cart__product-item__detail">
          <h4>
            <a>{item.name}</a>
          </h4>
          <ul className="shopping-cart__product-item__options">
            <li>Color: Yellow</li>
            <li>Size: L</li>
          </ul>
        </div>
      </td>
      <td>
        <span className="shopping-cart__product-price">${item.price}</span>
      </td>
      <td>
        <div className="qty-control position-relative">
          <input
            type="number"
            name="quantity"
            value={item.quantity}
            onChange={(e)=> setQty(Number(e.target.value))}
            min={1}
            className="qty-control__number text-center"
          />
          <div className="qty-control__reduce" onClick={()=> setQty(qty-1)}>-</div>
          <div className="qty-control__increase" onClick={()=> setQty(qty +1)}>+</div>
        </div>
        {/* .qty-control */}
      </td>
      <td>
        <span className="shopping-cart__subtotal">${parseInt(item.price)* (item.quantity)}</span>
      </td>
      <td>
        <a className="remove-cart" onClick={()=> dispatch(removeFromCart(item.id))}>
          <svg
            width={10}
            height={10}
            viewBox="0 0 10 10"
            fill="#767676"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0.259435 8.85506L9.11449 0L10 0.885506L1.14494 9.74056L0.259435 8.85506Z" />
            <path d="M0.885506 0.0889838L9.74057 8.94404L8.85506 9.82955L0 0.97449L0.885506 0.0889838Z" />
          </svg>
        </a>
      </td>
    </tr>
  );
}
