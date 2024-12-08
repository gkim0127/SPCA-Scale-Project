import React from "react";
import LeftArrowIcon from "../../icons/LeftArrowIcon";

const BackArrowButton = () => {
  return (
      <div className="mx-10 mb-7 mt-3 flex flex-row space-x-3">
          <LeftArrowIcon />
          <p className="font-source text-2xl text-primary-blue">Back</p>
      </div>
  )
};

export default BackArrowButton;
