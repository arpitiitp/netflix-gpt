import React, { useRef, useState } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import { checkValidData } from "../utils/validate";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import {addUser} from "../utils/userSlice";
import {useDispatch} from "react-redux"
import { background_image } from "../utils/constants";


const Login = () => {
  const [isSignInForm, setisSignInFormForm] = useState(true);

  const email = useRef(null);
  const password = useRef(null);
  const [errormessage, seterrormessage] = useState();
 
  const dispatch = useDispatch();

  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    seterrormessage(message);
    if (message) return;

    if (!isSignInForm) {
      // sign up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
            const {uid,email} = auth.currentUser;
            dispatch(
              addUser(
                { uid:uid,
                  email:email
                }
              ));
          
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrormessage(errorCode + "-" + errorMessage);
          <p>{errormessage}</p>;
          // ..
        });
    } else {
      // sign in logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
         
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrormessage(errorCode + "-" + errorMessage);
          <p>{errormessage}</p>;
        });
    }
  };

  const toggleSignInForm = () => {
    setisSignInFormForm(!isSignInForm);
  };
  return (
    <div className="relative w-full h-screen">
      {/* Header with absolute positioning */}
      <div className="absolute top-0 left-0 w-full z-10">
        <Header />
      </div>

      {/* Background Image */}
      <img
        className="w-full h-full object-cover"
        src={background_image}
        alt="background"
      />

      {/* Form placed on the image */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black  bg-opacity-60 p-8 rounded-lg z-20 w-90 h-120 opacity-83">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col text-white"
        >
          <h1 className="font-bold text-2xl">
            {isSignInForm
              ? "Sign in"
              : "Unlimited movies,TV shows and more Starts at ₹149"}
          </h1>
          <input
            ref={email}
            type="text"
            placeholder="Email"
            className="p-3 m-2 bg-neutral-600 text-white rounded"
          />
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="p-3 m-2 bg-neutral-600 text-white rounded"
          />

          {<p className="text-red-500">{errormessage}</p>}

          <button
            className="m-2 p-3 bg-red-600 hover:bg-red-700 rounded cursor-pointer"
            onClick={handleButtonClick}
          >
            {isSignInForm ? "sign in" : "Get Started"}
          </button>

          {isSignInForm ? <h2 className="text-center">OR</h2> : ""}
          {isSignInForm ? (
            <button className="m-2 p-3 bg-neutral-600 rounded cursor-pointer">
              Use a sign-in code
            </button>
          ) : (
            ""
          )}

          <Link to="" className="text-center underline py-2">
            forget password
          </Link>
          <label className="">
            <input type="checkbox" className="" />
            Remember Me
          </label>

          <button type="button" className="py-4" onClick={toggleSignInForm}>
            {isSignInForm
              ? "New to Netflix?Sign up now"
              : "Ready to watch? Enter your email to create or restart your membership."}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
