import React, { Fragment } from "react";

function InputItem({ type, id, value, onChange, onBlur }) {
  return (
    <Fragment>
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
    </Fragment>
  );
}

export default InputItem;
