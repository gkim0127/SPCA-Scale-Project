import React from "react";

const ShortPill = ({ buttonName, onLogOut }) => {
  return (
      <button type="button" onClick={(e) => onLogOut()} className="my-2 ml-auto mr-3 rounded-lg bg-primary-blue px-8 font-source text-2xl font-light text-white">
          {buttonName}
      </button>
  )
};

export default ShortPill;
