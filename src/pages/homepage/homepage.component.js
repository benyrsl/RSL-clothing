import React from "react";
import Directory from "../../components/directory/directory.component.js";
import "./homepage.style.scss";
import { HomePageContainer } from "./homepage.styles";

const HomePage = function () {
  return (
    <HomePageContainer>
      <Directory />
    </HomePageContainer>
  );
};

export default HomePage;
