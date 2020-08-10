import React, { Fragment } from "react";

function Headline(props) {
  return (
    <Fragment>
      <h1 id="headline" className="slide-back slide-back-cart">
        {props.txt}
      </h1>
    </Fragment>
  );
}

export default Headline;
