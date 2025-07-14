import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSingInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSingInForm(!isSignInForm);
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
      <form className="p-12 bg-black/80 w-3/12 my-36 mx-auto right-0 left-0 absolute text-white rounded">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 bg-gray-700  w-full rounded"
          />
        )}
        <input
          type="email"
          placeholder="Email Address"
          className="p-4 my-4 bg-gray-700  w-full rounded"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 bg-gray-700  w-full rounded"
        />
        <button className="p-4 my-6 bg-red-600 text-white w-full rounded-lg">
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
