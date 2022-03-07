import React from "react";

import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const PublishKey =
    "pk_test_51J2dj1JGZaDpRxjexB3R3EebEMm7shb6qpl0tMQvPFxZ28cMGxiGnb7XAC2lP3s2EVK0jmzaKoCt9gGKlfqiCqEf00JFzXj0X3";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Succesfull");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Armany Clothing"
      billingAddress
      shippingAddress
      image="https://svgshare.com/getbyhash/sha1-XAvWR/1Y34u/iMKiWE0XaQG/is0="
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={PublishKey}
    />
  );
};

export default StripeCheckoutButton;
