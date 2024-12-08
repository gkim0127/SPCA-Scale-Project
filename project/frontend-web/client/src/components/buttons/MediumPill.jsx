import React from "react";

const MediumPill = ({ buttonName }) => {
  return (
      <button type="button" className="my-2 ml-auto mr-3 rounded-lg bg-primary-blue px-14 font-source text-2xl font-light text-white">
          {buttonName}
      </button>
  )
};

export default MediumPill;
