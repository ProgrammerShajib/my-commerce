// Importing createSlice and createAsyncThunk from Redux Toolkit.
// - `createSlice` helps us create a part of the app's memory (state) easily.
// - `createAsyncThunk` allows us to perform actions that take time (like talking to a server).
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Importing an API helper (probably used for sending requests to a server).
// eslint-disable-next-line no-unused-vars
import api from '../../api/api';

// 🔵 Creating an async function (admin_login) to log in an admin user.
// - `createAsyncThunk` is like a special messenger that talks to a server and waits for a reply.
export const admin_login = createAsyncThunk(
    "auth/admin_login",  // This is the **name** of the action, like a tag for Redux to recognize it.
    
    async (info) => {  // This function receives `info`, which is the admin's login details.
        console.log(info); // Just printing the login info in the browser's console.
        
        try {
            // Here, we are **supposed** to send a request to the server (but it's commented out).
            // const {data} = await api.post('/admin-login',info, {withCredentials:true})
            // console.log(data) // This would print the server's response.
        } catch (error) {
            // If something goes wrong (like wrong password), we would handle the error here.
        }
    }
);

// 🔵 Creating another example of an async function (someAsyncAction).
export const someAsyncAction = createAsyncThunk(
  "auth/someAsyncAction",  // Just a name for Redux to track this action.
  
  async (arg, thunkAPI) => {  
    // This function could do something time-consuming, like getting data from a server.
    
    return "some data"; // Here, we just return some dummy data instead.
  }
);

// 🔴 Creating the "auth" slice (a piece of the app's memory).
export const authReducer = createSlice({
  name: "auth",  // Giving a name to this slice of memory: "auth" (used for authentication-related data).

  // 🧠 Initial state: This is where we store important data related to authentication.
  initialState: {
    successMessage: "",  // Stores success messages (like "Login successful!").
    errorMessage: "",  // Stores error messages (like "Wrong password!").
    loader: false,  // Shows a loading spinner while waiting for a response from the server.
    userInfo: "",  // Stores user information after login.
  },

  // 🔹 `reducers` is where we define normal functions that change the state.
  reducers: {
    // We haven't added any reducers here yet.
  },

  // 🔹 `extraReducers` is where we handle async actions (like admin_login).
  extraReducers: (builder) => {
    // We will handle async login responses here later.
  },
});

// 🔵 Exporting only the reducer part of the slice so we can use it in our Redux store.
export default authReducer.reducer;
