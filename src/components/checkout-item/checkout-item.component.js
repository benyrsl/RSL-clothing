import React from "react";
import { connect } from "react-redux";
import "./checkout-item.styles.scss";
import { clearItem, removeItem } from "../../redux/cart/cart.action";
import { addItem } from "../../redux/cart/cart.action";
const CheckoutItem = ({ item, clearItem, addItem, removeItem }) => {
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={item.imageUrl} alt="item" />
      </div>
      <span className="name">{item.name}</span>
      <span className="quantity">
        <div onClick={() => removeItem(item)} className="arrow">
          &#10094;
        </div>
        <span className="value">{item.quantity}</span>
        <div onClick={() => addItem(item)} className="arrow">
          &#10095;
        </div>
      </span>
      <span className="price">${item.price}</span>
      <div onClick={() => clearItem(item)} className="remove-button">
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchtoProps = (dispatch) => {
  return {
    clearItem: (item) => dispatch(clearItem(item)),
    addItem: (item) => dispatch(addItem(item)),
    removeItem: (item) => dispatch(removeItem(item)),
  };
};
export default connect(null, mapDispatchtoProps)(CheckoutItem);
