import React, { useEffect } from "react";
import ListCard from "../components/ListCard";
import LongPill from "../components/buttons/LongPill";
import UserProfileCard from "../components/UserProfileCard";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

const UserProfile = () => {

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/firebase.User
              const uid = user.uid;
            //   console.log("uid", uid)
            } else {
              // User is signed out
              console.log("User is logged out")
            }
          });
         
    }, [])

  return (
      <React.Fragment>
          <div className="flex h-[90vh] w-screen flex-col items-start">
              <div className="h-[40vh] mx-auto mt-20">
                <UserProfileCard />
              </div>
              <div className="flex h-[50vh] w-full flex-col justify-between ">
                  <h2 className="font-source font-bold text-3xl text-primary-blue text-center mb-5">MY DOGS</h2>
                  <div className="overflow-auto">
                      <ListCard />
                      <ListCard />
                      <ListCard />
                      <ListCard />
                      <ListCard />
                  </div>

                  <div className="mx-20 mb-5">
                      <LongPill buttonName={'All Dogs'} />
                  </div>
              </div>
          </div>
      </React.Fragment>
  )
};

export default UserProfile;
