import React from "react";
import SignIn from "../../components/sign-in/sign-in.component.js";
import SignUp from "../../components/sign-up/sign-up.component.js";
import "./sign-in-and-sign-up.style.scss";

const SignInAndSignUp = function () {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInAndSignUp;
