import React, { Fragment } from "react";
import AboutUsItemBig from "./AboutUsItemBig";
import AboutUsItemSmall from "./AboutUsItemSmall";

function AboutUs() {
  return (
    <Fragment>
      {window.innerWidth > 600 ? (
        <AboutUsItemBig></AboutUsItemBig>
      ) : (
        <AboutUsItemSmall></AboutUsItemSmall>
      )}
    </Fragment>
  );
}

export default AboutUs;
