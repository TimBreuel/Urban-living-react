import React, { Fragment } from "react";
import AboutUsItemBig from "./AboutUsItemBig";
import AboutUsItemSmall from "./AboutUsItemSmall";

function AboutUs() {
  return (
    <div style={}>
      {window.innerWidth > 600 ? (
        <AboutUsItemBig></AboutUsItemBig>
      ) : (
        <AboutUsItemSmall></AboutUsItemSmall>
      )}
    </div>
  );
}

export default AboutUs;
