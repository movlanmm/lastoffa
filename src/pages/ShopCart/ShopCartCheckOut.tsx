import { addDoc, collection } from "firebase/firestore";
import { useFormik } from "formik";
import * as Yup from "yup";
import { db } from "../../utils/firebase.ts";
import { useNavigate } from "react-router-dom";
import { addOrder } from "../../redux/lib/orderList.ts";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/store.ts";
import { cartSelector } from "../../redux/lib/cartSlice.ts";
import { shippingSelector } from "../../redux/lib/shippingSlice.ts";
import { Orders } from "../../types/index.ts";

export default function ShopCartCheckOut() {
  const cart = useAppSelector(cartSelector).cart;
  const shipping = useAppSelector(shippingSelector);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const subtotalPrice = () => {
    let total = 0;
    cart.map((item) => {
      total += parseInt(item.price) * (item.quantity);
    });
    return total;
  };

  // const orderList = () => {
  //   let products:OrderProduct[] = [];
  //   cart.map((item) => {
  //     products.push({
  //       name: item.name,
  //       quantity: item.quantity,
  //       price: item.price,
  //     });
  //   });
  //   return products;
  // };

  const schema = Yup.object({
    firstname: Yup.string().required(),
    lastname: Yup.string().required(),
    region: Yup.string().required(),
    address: Yup.string().required(),
    city: Yup.string().required(),
    postcode: Yup.string().required(),
    phone: Yup.number().required(),
    email: Yup.string().required(),
    notes: Yup.string(),
    paymentmethod: Yup.string().required(),
  });

  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      region: "",
      address: "",
      city: "",
      postcode: "",
      phone: '',
      email: "",
      notes: "",
      status: "On Hold",
      date: new Date().toLocaleDateString(),
      dateModified: new Date().toLocaleDateString(),
      shipping: shipping.type,
      products: cart,
      subtotal: subtotalPrice(),
      totalPrice: `${subtotalPrice() + 19 + shipping.amount}`,
      orderNumber: Math.trunc(Math.random() * 100000),
      paymentmethod: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      sendOrder(values);
    },
  });

  useEffect(() => {
    cart.length === 0 && navigate(-1)
  }, [])


  const sendOrder = async (values: Orders) => {
    try {
      const docRef = await addDoc(collection(db, "orders"), {
        ...values,
      });
      navigate(`/shopcart/confirmation/${docRef.id}`);
      dispatch(addOrder(docRef.id));
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <form name="checkout-form" onSubmit={formik.handleSubmit}>
      <div className="checkout-form">
        <div className="billing-info__wrapper">
          <h4>BILLING DETAILS</h4>
          <div className="row">
            <div className="col-md-6">
              <div className="form-floating my-3">
                <input
                  type="text"
                  className="form-control"
                  name="firstname"
                  value={formik.values.firstname}
                  onChange={formik.handleChange}
                  id="firstname"
                  placeholder="First Name"
                />
                <label htmlFor="checkout_first_name">First Name</label>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-floating my-3">
                <input
                  type="text"
                  className="form-control"
                  id="lastname"
                  name="lastname"
                  value={formik.values.lastname}
                  onChange={formik.handleChange}
                  placeholder="Last Name"
                />
                <label htmlFor="checkout_last_name">Last Name</label>
              </div>
            </div>
            <div className="col-md-12">
              <div className="search-field my-3">
                <div className="form-label-fixed hover-container">
                  <label htmlFor="search-dropdown" className="form-label">
                    Country / Region*
                  </label>
                  <div className="js-hover__open">
                    <input
                      type="text"
                      className="form-control form-control-lg search-field__actor "
                      id="region"
                      name="region"
                      value={formik.values.region}
                      onChange={formik.handleChange}
                      placeholder="Choose a location..."
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="form-floating mt-3 mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  name="address"
                  value={formik.values.address}
                  onChange={formik.handleChange}
                  placeholder="Street Address *"
                />
                <label htmlFor="checkout_company_name">Street Address *</label>
              </div>
            </div>
            <div className="col-md-12">
              <div className="form-floating my-3">
                <input
                  type="text"
                  className="form-control"
                  id="city"
                  name="city"
                  value={formik.values.city}
                  onChange={formik.handleChange}
                  placeholder="Town / City *"
                />
                <label htmlFor="checkout_city">Town / City *</label>
              </div>
            </div>
            <div className="col-md-12">
              <div className="form-floating my-3">
                <input
                  type="text"
                  className="form-control"
                  id="postcode"
                  name="postcode"
                  value={formik.values.postcode}
                  onChange={formik.handleChange}
                  placeholder="Postcode / ZIP *"
                />
                <label htmlFor="checkout_zipcode">Postcode / ZIP *</label>
              </div>
            </div>
            <div className="col-md-12">
              <div className="form-floating my-3">
                <input
                  type="number"
                  className="form-control"
                  id="phone"
                  name="phone"
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                  placeholder="Phone *"
                />
                <label htmlFor="checkout_phone">Phone *</label>
              </div>
            </div>
            <div className="col-md-12">
              <div className="form-floating my-3">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  placeholder="Your Mail *"
                />
                <label htmlFor="checkout_email">Your Mail *</label>
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div className="mt-3">
              <textarea
                className="form-control form-control_gray"
                placeholder="Order Notes (optional)"
                cols={30}
                rows={8}
                name="notes"
                id="notes"
                value={formik.values.notes}
                onChange={formik.handleChange}
              />
            </div>
          </div>
        </div>
        <div className="checkout__totals-wrapper">
          <div className="sticky-content">
            <div className="checkout__totals">
              <h3>Your Order</h3>
              <table className="checkout-cart-items">
                <thead>
                  <tr>
                    <th>PRODUCT</th>
                    <th>SUBTOTAL</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((item) => {
                    return (
                      <tr key={item.id}>
                        <td>
                          {item.name}{" "}
                          {item.quantity > 1 && `x ${item.quantity}`}
                        </td>
                        <td>${parseInt(item.price) * item.quantity}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <table className="checkout-totals">
                <tbody>
                  <tr>
                    <th>SUBTOTAL</th>
                    <td>${subtotalPrice()}</td>
                  </tr>
                  <tr>
                    <th>SHIPPING</th>
                    <td>{shipping.type}</td>
                  </tr>
                  <tr>
                    <th>VAT</th>
                    <td>$19</td>
                  </tr>
                  <tr>
                    <th>TOTAL</th>
                    <td>${subtotalPrice() + 19 + shipping.amount}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="checkout__payment-methods">
              <fieldset>
                <div className="form-check">
                  <input
                    className="form-check-input form-check-input_fill"
                    type="radio"
                    name="paymentmethod"
                    id="paymentmethod"
                    value={"Direct bank transfer"}
                    onChange={formik.handleChange}
                  />
                  <label className="form-check-label" htmlFor="paymentmethod">
                    Direct bank transfer
                    <span className="option-detail d-block">
                      Make your payment directly into our bank account. Please
                      use your Order ID as the payment reference.Your order will
                      not be shipped until the funds have cleared in our
                      account.
                    </span>
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input form-check-input_fill"
                    type="radio"
                    value={"Check payments"}
                    onChange={formik.handleChange}
                    name="paymentmethod"
                    id="paymentmethod"
                  />
                  <label className="form-check-label" htmlFor="paymentmethod">
                    Check payments
                    <span className="option-detail d-block">
                      Phasellus sed volutpat orci. Fusce eget lore mauris
                      vehicula elementum gravida nec dui.
                    </span>
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input form-check-input_fill"
                    type="radio"
                    name="paymentmethod"
                    id="paymentmethod"
                    value={"Cash on delivery"}
                    onChange={formik.handleChange}
                  />
                  <label className="form-check-label" htmlFor="paymentmethod">
                    Cash on delivery
                    <span className="option-detail d-block">
                      Phasellus sed volutpat orci. Fusce eget lore mauris
                      vehicula elementum gravida nec dui.
                    </span>
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input form-check-input_fill"
                    type="radio"
                    name="paymentmethod"
                    id="paymentmethod"
                    value={"Paypal"}
                    onChange={formik.handleChange}
                  />
                  <label className="form-check-label" htmlFor="paymentmethod">
                    Paypal
                    <span className="option-detail d-block">
                      Phasellus sed volutpat orci. Fusce eget lore mauris
                      vehicula elementum gravida nec dui. Aenean aliquam varius
                      ipsum, non ultricies tellus sodales eu.
                    </span>
                  </label>
                </div>
              </fieldset>

              <div className="policy-text">
                Your personal data will be used to process your order, support
                your experience throughout this website, and for other purposes
                described in our <a target="_blank">privacy policy</a>.
              </div>
            </div>
            <button className="btn btn-primary btn-checkout" type="submit">
              PLACE ORDER
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
