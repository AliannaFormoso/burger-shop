import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineEye } from "react-icons/ai";
import OrderDetails from "./OrderDetails";

const MyOrders = () => {
  const arr = [1, 2, 3, 4];

  return (
    <section className="tableClass">
      <main>
        <table>
          <thead>
            <tr>
              <th>Order Number</th>
              <th>Status</th>
              <th>Item Qty</th>
              <th>Amount as</th>
              <th>Payment Method as</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {arr.map((i) => (
            <tr key={i}>
            <td>#1000345987</td>
            <td>Processing</td>
            <td>23</td>
            <td>{213}€</td>
            <td>COD</td>
            <td>
              <Link to={`/order/${"asdsds"}`}>
                <AiOutlineEye />
              </Link>
            </td>
            </tr>
            ))}
          </tbody>
        </table>
      </main>
    </section>
  );
};

export default MyOrders;
