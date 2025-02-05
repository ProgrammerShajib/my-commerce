// Importing React and useState hook
// React is needed to define functional components, and useState is used for managing state.
import React, { useState } from "react"; 

// Importing Link from react-router-dom for navigation between pages.
import { Link } from "react-router-dom";

// Importing icons from react-icons library
// These icons are used for social media login options.
import { AiOutlineGooglePlus, AiOutlineGithub } from "react-icons/ai";
import { FiFacebook } from "react-icons/fi";
import { CiTwitter } from "react-icons/ci";

// Defining the Register component
const Register = () => {
  // useState hook to manage form inputs
  // Initial state contains empty values for name, email, and password
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
  });

  // Function to handle input field changes
  // Updates the corresponding state property when the user types
  const inputHandle = (e) => {
    setState({
      ...state, // Spreading existing state to keep other values unchanged
      [e.target.name]: e.target.value, // Dynamically updating the field that triggered the change
    });
  };

  // Function to handle form submission
  const submit = (e) => {
    e.preventDefault(); // Prevents default form submission behavior (page reload)
    console.log(state); // Logs the form data in the console for debugging
  };

  return (
    // Creating a full-screen container with a dark background
    <div className="min-w-screen min-h-screen bg-[#161d31] flex justify-center items-center">
      <div className="w-[360px] text-[#d0d2d6] p-2">
        <div className="bg-[#283046] p-4 rounded-md">
          {/* Header section */}
          <h2 className="text-xl mb-3">Welcome to e-commerce</h2>
          <p className="text-sm mb-3">
            Please register to your account and start your business
          </p>

          {/* Registration form */}
          <form onSubmit={submit}>
            {/* Name input field */}
            <div className="flex flex-col w-full gap-1 mb-3">
              <label htmlFor="name">Name</label>
              <input
                onChange={inputHandle} // Calls inputHandle function when user types
                value={state.name} // Binds input value to state
                className="px-3 py-2 outline-none border border-slate-700 bg-transparent rounded-md text-[#d0d2d6] focus:border-indigo-500"
                type="text"
                placeholder="name"
                name="name"
                id="name"
                aria-label="Enter your name"
                required
              />
            </div>

            {/* Email input field */}
            <div className="flex flex-col w-full gap-1 mb-3">
              <label htmlFor="email">Email</label>
              <input
                onChange={inputHandle}
                value={state.email}
                className="px-3 py-2 outline-none border border-slate-700 bg-transparent rounded-md text-[#d0d2d6] focus:border-indigo-500"
                type="text"
                placeholder="email"
                name="email"
                id="email"
                aria-label="Enter your email"
                required
              />
            </div>

            {/* Password input field */}
            <div className="flex flex-col w-full gap-1 mb-3">
              <label htmlFor="password">Password</label>
              <input
                onChange={inputHandle}
                value={state.password}
                className="px-3 py-2 outline-none border border-slate-700 bg-transparent rounded-md text-[#d0d2d6] focus:border-indigo-500"
                type="password"
                placeholder="password"
                name="password"
                id="password"
                aria-label="Enter your password"
                required
              />
            </div>

            {/* Checkbox for agreeing to terms */}
            <div className="flex items-center w-full gap-1 mb-3">
              <input
                className="w-4 h-4 text-blue-600 overflow-hidden bg-gray-100 rounded border-gray-300 focus:ring-blue-500"
                type="checkbox"
                name="checkbox"
                id="checkbox"
                required
              />
              <label htmlFor="password">
                I agree to privacy policy & terms
              </label>
            </div>

            {/* Submit button */}
            <button
              type="submit"
              className="w-full bg-indigo-500 hover:shadow-indigo-500/50 hover:shadow-lg text-white py-2 px-7 mb-3 rounded-md"
            >
              Sign Up
            </button>

            {/* Redirect to login page */}
            <div className="mt-4 text-center text-sm">
              <p className="text-[#d0d2d6]">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="text-indigo-400 hover:text-indigo-300 transition duration-300"
                >
                  Sign in here
                </Link>
              </p>
            </div>

            {/* OR separator line */}
            <div className="w-full flex justify-center items-center mb-3">
              <div className=" w-[45%] bg-slate-700 h-[1px] "></div>
              <div className="w-[10%] flex justify-center items-center ">
                <span className="pb-1 ">Or</span>
              </div>
              <div className=" w-[45%] bg-slate-700 h-[1px] "></div>
            </div>

            {/* Social login options */}
            <div className="flex justify-center items-center gap-3">
              {/* Google login */}
              <div
                className="w-[35px] h-[35px] flex rounded-md bg-orange-700 
                shadow-lg hover:shadow-orange-700/50 justify-center
                cursor-pointer items-center overflow-hidden"
              >
                <span>
                  <AiOutlineGooglePlus />
                </span>
              </div>

              {/* Facebook login */}
              <div
                className="w-[35px] h-[35px] flex rounded-md bg-indigo-700 
                shadow-lg hover:shadow-indigo-700/50 justify-center
                cursor-pointer items-center overflow-hidden"
              >
                <span>
                  <FiFacebook />
                </span>
              </div>

              {/* Twitter login */}
              <div
                className="w-[35px] h-[35px] flex rounded-md bg-cyan-700 
                shadow-lg hover:shadow-cyan-700/50 justify-center
                cursor-pointer items-center overflow-hidden"
              >
                <span>
                  <CiTwitter />
                </span>
              </div>

              {/* GitHub login */}
              <div
                className="w-[35px] h-[35px] flex rounded-md bg-purple-700 
                shadow-lg hover:shadow-purple-700/50 justify-center
                cursor-pointer items-center overflow-hidden"
              >
                <span>
                  <AiOutlineGithub />
                </span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

// Exporting the Register component so it can be used in other parts of the application
export default Register;
