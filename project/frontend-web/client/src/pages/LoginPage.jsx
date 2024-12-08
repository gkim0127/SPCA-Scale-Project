import React from "react";
import LoginCard from "../components/LoginCard";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const LoginPage = () => {
    const navigate = useNavigate();
       
    const handleLogin = (e, email, password) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            navigate("/userprofile", { replace: true })
            console.log(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
        });
       
    }

  return (
      <React.Fragment>
          <div className="grid h-[100vh] grid-cols-2">
              <div className="w-50 content-center bg-[url('../dog_bg.jpg')] bg-cover bg-left bg-no-repeat">
              </div>

              <div className="w-50">
                  <LoginCard onSubmit={handleLogin}/>
              </div>
          </div>
      </React.Fragment>
  )};

export default LoginPage;
