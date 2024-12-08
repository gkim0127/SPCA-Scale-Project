import React from "react";
import BackArrowButton from "../components/buttons/BackArrowButton";
import LongPill from "../components/buttons/LongPill";

const AddDogPage = () => {
  return (
      <React.Fragment>
          <BackArrowButton />
          <form>
              <h2 className="text-center font-source text-3xl font-extrabold text-primary-blue">ADD DOG</h2>
              <div className="mx-auto grid w-7/12 grid-cols-4 items-center space-y-5">
                  <label htmlFor="name" className="font-source text-3xl font-bold text-primary-blue">
                      Name:
                  </label>
                  <input
                      type="name"
                      id="name"
                      className="placeholder: col-span-3 w-full rounded-sm  border border-gray-500 px-3 py-4 font-source text-sm text-gray-900 shadow-sm"
                      placeholder="Name"
                  />

                  <label htmlFor="breed" className="font-source text-3xl font-bold text-primary-blue">
                      Breed:
                  </label>
                  <input
                      type="breed"
                      id="breed"
                      className="placeholder: col-span-3 w-full rounded-sm  border border-gray-500 px-3 py-4 font-source text-sm text-gray-900 shadow-sm"
                      placeholder="Breed"
                  />

                  <label htmlFor="age" className="font-source text-3xl font-bold text-primary-blue">
                      Age:
                  </label>
                  <input
                      type="age"
                      id="age"
                      className="placeholder: col-span-3 w-full rounded-sm  border border-gray-500 px-3 py-4 font-source text-sm text-gray-900 shadow-sm"
                      placeholder="Age"
                  />

                  <label htmlFor="weight" className="font-source text-3xl font-bold text-primary-blue">
                      Weight:
                  </label>
                  <input
                      type="weight"
                      id="weight"
                      className="placeholder: col-span-3 w-full rounded-sm  border border-gray-500 px-3 py-4 font-source text-sm text-gray-900 shadow-sm"
                      placeholder="Weight"
                  />

                  <label htmlFor="message" className="font-source text-3xl font-bold text-primary-blue">
                      Description:
                  </label>
                  <textarea
                      type="message"
                      id="message"
                      className="placeholder: col-span-3 w-full rounded-sm  border border-gray-500 px-3 pb-14 pt-4 font-source text-sm text-gray-900 shadow-sm"
                      placeholder="Description"
                      rows={7}
                  />

                  <label htmlFor="image" className="font-source text-3xl font-bold text-primary-blue">
                      Image:
                  </label>
                  <button className="col-span-3 rounded-sm bg-primary-blue py-3 font-source font-bold text-white ">Upload</button>
              </div>
              <div className="mx-20 mt-12">
                  <LongPill buttonName={'Submit'} />
              </div>
          </form>
      </React.Fragment>
  )
};



export default AddDogPage;
