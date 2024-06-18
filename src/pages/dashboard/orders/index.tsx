import { doc, getDoc } from "firebase/firestore";
import { useState } from "react";
import { db } from "../../../utils/firebase.ts";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useAppSelector } from "../../../redux/store";
import { orderSelector } from "../../../redux/lib/orderList";
import { Orders } from "../../../types/index.ts";

export default function Order() {
  const orders = useAppSelector(orderSelector).orders;
  const navigate = useNavigate();
  const [data, setData] = useState<Orders[]>([]);

  const getOrders = async (id: string) => {
    try {
      const docRef = doc(db, "orders", id);
      const docSnap = await getDoc(docRef);
      setData((prev) => [...prev, { ...docSnap.data(), id: docRef.id } as Orders]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    orders.map((id) => {
      getOrders(id);
    });
  }, []);

  return (
    <>
      <div className="col-lg-9">
        <div className="page-content my-account__orders-list">
          <table className="orders-table">
            <thead>
              <tr>
                <th>Order</th>
                <th>Date</th>
                <th>Status</th>
                <th>Total</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>#{item.orderNumber}</td>
                    <td>{item.date}</td>
                    <td>{item.status}</td>
                    <td>${item.totalPrice}</td>
                    <td>
                      <button
                        className="btn btn-primary"
                        onClick={() =>
                          navigate(`/shopcart/confirmation/${item.id}`)
                        }
                      >
                        VIEW
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
