import React from "react";
import PencilIcon from "../icons/PencilIcon"
import RightArrowIcon from "../icons/RightArrowIcon"

const ListCard = () => {
  return (
      <React.Fragment>
          <div className="mx-20 flex flex-row justify-between bg-[#FCFCFC] p-3 border-b-2 border-primary-blue mb-5">
              <div className="flex flex-row gap-x-9 ">
                  <h3 className="place-self-end font-source text-4xl font-[600]">Mocha</h3>
                  <p className="place-self-end font-source text-lg font-normal">Border Collie</p>
                  <p className="place-self-end font-source text-lg font-normal">13KG</p>
              </div>
              <div className="flex flex-row gap-x-9 place-self-end">
                  <PencilIcon />
                  <RightArrowIcon />
              </div>
          </div>
      </React.Fragment>
  )
};

export default ListCard;
