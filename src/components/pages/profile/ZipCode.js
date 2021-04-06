import React from "react";

const ZipCode = ({ addHandleChange}) => {

  return (
    <div>
      <input
        name="zip"
        type="number"
        placeholder="Zip Code"
        className="input"
        onChange={addHandleChange}
        aria-label="Zip Code"
      />
    </div>
  );
};
export default ZipCode;
