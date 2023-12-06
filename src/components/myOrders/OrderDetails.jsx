import React from "react";

const OrderDetails = () => {
  return (
    <section className="orderDetails">
      <main>
        <h1>Order details</h1>

        <div>
          <h1>Shipping</h1>
          <p>
            <b>Address</b>
            {"234 St. Madrid 28000"}
          </p>
        </div>

        <div>
          <h1>Contact</h1>
          <p>
            <b>Name</b>
            {"John"}
          </p>
          <p>
            <b>Phone</b>
            {67891011}
          </p>
        </div>

        <div>
          <h1>Status</h1>
          <p>
            <b>Order Status:</b>
            {"Processing"}
          </p>
          <p>
            <b>Placed at:</b>
            {'10-12-2023'}
          </p>
          <p>
            <b>Delivered At:</b>
            {'10-12-2023'}
          </p>
        </div>

        <div>
          <h1>Payment</h1>
          <p>
            <b>Payment Method:</b>
            {"COD"}
          </p>
          <p>
            <b>Payment Reference:</b>#{"1000345987"}
          </p>
          <p>
            <b>Paid at:</b>
            {'10-12-2023'}
          </p>
        </div>

        <div>
          <h1>Amount</h1>
          <p>
            <b>Items Total</b>{213}€
          </p>
          <p>
            <b>Shipping Charges</b>{15}€
          </p>
          <p>
            <b>Tax</b>{23}€
          </p>
          <p>
            <b>Total Amount</b>{213 + 15 + 23}€
          </p>
        </div>

        <article>
          <h1>Ordered Items</h1>
          <div>
            <h4>Cheese Burger</h4>
            <div>
              <span>{12}</span> x <span>{232}</span>
            </div>
          </div>
          <div>
            <h4>Veg Cheese Burger</h4>
            <div>
              <span>{10}</span> x <span>{500}</span>
            </div>
          </div>
          <div>
            <h4>Cheeseburger with French Fries</h4>
            <div>
              <span>{10}</span> x <span>{1800}</span>
            </div>
          </div>
          <div>
            <h4
              style={{
                fontWeight: 800,
              }}
            >
              Sub total
            </h4>
            <div
              style={{
                fontWeight: 800,
              }}
            >
              ${2132}
            </div>
          </div>
        </article>
      </main>
    </section>
  );
};

export default OrderDetails;

