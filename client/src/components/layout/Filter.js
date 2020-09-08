import React, { Fragment } from "react";
import { useContext, useRef, useEffect } from "react";
import ProductsContext from "../../context/products/ProductsContext";

function Filter() {
  const productsContext = useContext(ProductsContext);
  const { filtered, filteredProducts, clearFilter } = productsContext;

  const text = useRef("");
  useEffect(() => {
    if (filtered === null) {
      text.current.value = "";
    }
  });

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
