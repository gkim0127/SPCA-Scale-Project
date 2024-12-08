import React from "react";
import SearchIcon from "../icons/SearchIcon"
import ShortPill from "./buttons/ShortPill";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

const TopNav = () => {
    const navigate = useNavigate();
 
    const handleLogout = () => {               
        signOut(auth).then(() => {
        // Sign-out successful.
            navigate("/login", { replace: true });
            console.log("Signed out successfully")
        }).catch((error) => {
        // An error happened.
        });
    }

  return (
      <React.Fragment>
          <div className="m-3 flex flex-row">
              <img src="/spca.svg" className="h-14" alt="Logo" />
              <ul className="my-auto flex flex-row align-middle">
                  <li className="ml-12">
                      <a className="font-source text-2xl text-primary-blue">All Dogs</a>
                  </li>
                  <li className="ml-12">
                      <a>
                          <SearchIcon />
                      </a>
                  </li>
              </ul>
              <ShortPill buttonName={"Log Out"} onLogOut={handleLogout}/>
          </div>
      </React.Fragment>
  )
};

export default TopNav;
