import React, { useState } from "react";

const RegisterCard = ({ onSubmit }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');

  return (
      <React.Fragment>
          <h1 className="mt-32 text-center font-source text-7xl font-bold">Register</h1>
          <form>
              <div className="mx-56 mt-16 flex flex-col">
                  <label htmlFor="username" className="mb-2 font-source text-2xl">
                      Username
                  </label>
                  <input
                      type="username"
                      id="username"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="block w-full rounded-lg border-2 border-gray-300 bg-white p-2.5 text-lg text-gray-900 shadow-inner"
                      required
                  />
                  <label htmlFor="password" className="mb-2 mt-16 font-source text-2xl">
                      Password
                  </label>
                  <input
                      type="password"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="block w-full rounded-lg border-2 border-gray-300 bg-white p-2.5 text-lg text-gray-900 shadow-inner"
                      required
                  />
                  <button type="button" onClick={(e) => onSubmit(e, email, password)} className="mb-2 mt-20 w-full rounded-lg bg-primary-blue px-5 py-2.5 font-source text-3xl font-bold text-white">
                      Sign up
                  </button>
              </div>
          </form>
      </React.Fragment>
  )
};

export default RegisterCard;
