import React, { useState } from "react";
// Importing Redux hooks for dispatching actions and selecting state
// eslint-disable-next-line no-unused-vars
import { useDispatch, useSelector } from "react-redux";
// Importing the admin login action from the authReducer
import {admin_login} from "../../store/reducers/authReducer";

const AdminLogin = () => {
  // Initializing the dispatch function to dispatch actions to the Redux store
  const dispatch = useDispatch();
  
  // Defining the state to store email and password input values
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  // Handling input changes and updating the state dynamically
  const inputHandle = (e) => {
    setState({
      ...state, // Keeping the existing state values
      [e.target.name]: e.target.value, // Updating the respective field dynamically
    });
  };

  // Handling form submission
  const submit = (e) => {
    e.preventDefault(); // Preventing the default form submission behavior
    dispatch(admin_login(state)); // Dispatching the admin_login action with the current state (email & password)
  };

  return (
    // Setting up the page layout with a full-screen background and centering the login form
    <div className="min-w-screen min-h-screen bg-[#161d31] flex justify-center items-center">
      <div className="w-[360px] text-[#d0d2d6] p-2">
        <div className="bg-[#283046] p-4 rounded-md">
          {/* Logo section */}
          <div className=" h-[70px] flex justify-center items-center ">
            <div className=" w-[180px] h-[50px] ">
              <img
                className=" w-full h-full "
                src="http://localhost:3000/images/logo.png"
                alt="img"
              />
            </div>
          </div>

          {/* Login Form */}
          <form onSubmit={submit}>
            {/* Email Input */}
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
            
            {/* Password Input */}
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

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-blue-500 hover:shadow-blue-500/50 hover:shadow-lg text-white py-2 px-7 mb-2 mt-5 rounded-md"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
