import React from "react";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import { createStructuredSelector, createStructureSelector } from "reselect";
import { connect } from "react-redux";
import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";
import StripeCheckoutButton from "../../components/stipe-button/stripe-button.component";
import "./checkout.styles.scss";

const CheckoutPage = ({ cartItems, total }) => {
  total = total.toFixed(2);
  let totalTax = total * 1.13;
  totalTax = totalTax.toFixed(2);
  let tax = total * 0.13;
  tax = tax.toFixed(2);
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => {
        return <CheckoutItem key={cartItem.id} item={cartItem} />;
      })}

      <div className="total-before">
        <span>Subtotal: ${total}</span>
      </div>
      <div className="total-before">
        <span>Tax Rate: %13.00</span>
      </div>
      <div className="total-before">
        <span>Tax Amount: ${tax}</span>
      </div>
      <div className="total">
        <span>TOTAL: ${totalTax}</span>
      </div>
      <br></br>
      <div>
        Please do not use actual credit card as the payment will go through
      </div>
      <div>Use the following card number</div>
      <div>
        <span>Card No: 4242 4242 4242 4242</span>
        <br></br>
        <span>Expiry: 01/24 - Cvv: 123</span>
      </div>
      <br></br>
      <StripeCheckoutButton price={totalTax} />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
