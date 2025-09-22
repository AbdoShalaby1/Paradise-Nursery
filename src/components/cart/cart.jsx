// CartPage.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addItem,
  removeItem,
  clearCart,
  incrementQuantity,
  decrementQuantity,
} from "../states/cart.jsx";
import { useView } from "../states/storeCart.jsx";

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const { switchView } = useView();

  // Calculate total
  const total = cartItems.reduce(
    (acc, item) => acc + item.cost.slice(1) * (item.quantity || 1),
    0
  );

  const handleRemove = (item) => {
    dispatch(removeItem(item));
  };

  const handleIncrease = (item) => {
    dispatch(incrementQuantity(item));
  };

  const handleDecrease = (item) => {
    if ((item.quantity || 1) > 1) {
      dispatch(decrementQuantity(item));
    } else {
      dispatch(removeItem(item));
    }
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  if (cartItems.length === 0) {
    return (
      <div className="container text-center mt-5">
        <h2>Your Cart is Empty</h2>
        <button
          className="btn btn-primary"
          onClick={() => {
            switchView("store");
          }}
        >
          Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="container my-5">
      <h2 className="mb-4">Your Cart</h2>

      <div className="row g-4">
        {cartItems.map((item, index) => (
          <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="card h-100 shadow-sm">
              <img
                src={item.image}
                className="card-img-top"
                alt={item.name}
                style={{ height: "180px", objectFit: "cover" }}
              />
              <div className="card-body d-flex flex-column justify-content-between">
                <div>
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text text-muted mb-2">
                    ${parseFloat(item.cost.slice(1)).toFixed(2)}
                  </p>
                </div>

                <div className="d-flex align-items-center mb-2">
                  <button
                    className="btn btn-sm btn-outline-secondary me-2"
                    onClick={() => handleDecrease(item)}
                  >
                    -
                  </button>
                  <span>{item.quantity || 1}</span>
                  <button
                    className="btn btn-sm btn-outline-secondary ms-2"
                    onClick={() => handleIncrease(item)}
                  >
                    +
                  </button>
                </div>

                <div className="d-flex justify-content-between align-items-center">
                  <strong>
                    $
                    {(
                      (item.quantity || 1) * parseFloat(item.cost.slice(1))
                    ).toFixed(2)}
                  </strong>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => handleRemove(item)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="d-flex justify-content-between align-items-center mt-4 flex-wrap">
        <button
          className="btn btn-outline-danger mb-2"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
        <h4 className="mb-2">Total: ${total.toFixed(2)}</h4>
      </div>

      <div className="text-end mt-3 d-flex justify-content-end gap-2">
        <button
          className="btn btn-primary"
          onClick={() => {
            switchView("store");
          }}
        >
          Continue Shopping
        </button>
        <button
          className="btn btn-success"
          onClick={() => {
            dispatch(clearCart());
            Swal.fire({
              title: "Done!",
              text: "Enjoy Your Plants!",
              icon: "success",
              timer: 1500,
            });
          }}
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default CartPage;
