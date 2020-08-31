import React from "react";
import AboutUsItemBig from "./AboutUsItemBig";
import AboutUsItemSmall from "./AboutUsItemSmall";
import Headline from "../products/Headline";
function AboutUs() {
  return (
    <div>
      <Headline txt="About Us"></Headline>
      <div style={{ margin: "5px 50px 0 50px" }}>
        {window.innerWidth > 600 ? (
          <AboutUsItemBig></AboutUsItemBig>
        ) : (
          <AboutUsItemSmall></AboutUsItemSmall>
        )}
      </div>
    </div>
  );
}

export default AboutUs;
