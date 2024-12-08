import React from "react";
import RegisterCard from "../components/RegisterCard";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const RegisterPage = () => {
    const navigate = useNavigate();
 
    const handleRegister = async (e, email, password) => {
      e.preventDefault()
      await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user);
            navigate("/userprofile", { replace: true })
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
        });
 
   
    }

    return (
        <React.Fragment>
            <div className="grid h-[100vh] grid-cols-2">
                <div className="w-50 content-center bg-[url('../dog_bg.jpg')] bg-cover bg-left bg-no-repeat"></div>

                <div className="w-50">
                    <RegisterCard onSubmit={handleRegister} />
                </div>
            </div>
        </React.Fragment>
    )
}

export default RegisterPage;
