import React, { Fragment } from "react";
import { useContext, useRef, useEffect } from "react";
import ProductsContext from "../../context/products/ProductsContext";

function Filter() {
  /////////////////////
  //USE PRODUCT CONTEXT
  const productsContext = useContext(ProductsContext);
  const { filtered, filteredProducts, clearFilter } = productsContext;

  //USE REF FOR INPUT SEARCH
  const text = useRef("");
  useEffect(() => {
    if (filtered === null) {
      text.current.value = "";
    }
  });

  ////////////////////////////
  //ON CHNAGE FILTER OR CLEAR
  const onChange = (e) => {
    if (text.current.value !== "") {
      filteredProducts(e.target.value);
    } else {
      clearFilter();
    }
  };
  return (
    <Fragment>
      <form>
        <input
          type="text"
          ref={text}
          placeholder="Filter products..."
          name=""
          id=""
          onChange={onChange}
          className="filter"
        />
      </form>
    </Fragment>
  );
}

export default Filter;
