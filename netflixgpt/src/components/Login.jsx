import React, { useState, useRef } from "react";
import Header from "./Header";
import checkValidData from "../utils/validate";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";

const Login = () => {
  const [isSignInForm, setIsSingInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setIsSingInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    //validate the form data
    //checkValidData(email, password)
    const message = checkValidData(
      email.current.value,
      password.current.value,
      name.current?.value
    );
    setErrorMessage(message);

    if (message) return; // if there is some error message return

    if (!isSignInForm) {
      //Signup Logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
          // ..
        });
    } else {
      //SignIn Logic
      const auth = getAuth();
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode+ "-" + errorMessage)
        });
    }
  };

  return (
    <div className="">
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/7d2359a4-434f-4efa-9ff3-e9d38a8bde7f/web/IN-en-20250707-TRIFECTA-perspective_4faa9280-a2c5-4e07-aafc-a45ce43fea09_small.jpg"
          alt="bgimage"
        />
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="p-12 bg-black/80 w-3/12 my-36 mx-auto right-0 left-0 absolute text-white rounded"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 bg-gray-700  w-full rounded"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 bg-gray-700  w-full rounded"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 bg-gray-700  w-full rounded"
        />
        <p className="text-red-700 font-bold py-2">{errorMessage}</p>
        <button
          className="p-4 my-6 bg-red-600 text-white w-full rounded-lg cursor-pointer"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="p-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now."
            : "Already registerd? Sign in Now."}
        </p>
      </form>
    </div>
  );
};

export default Login;
