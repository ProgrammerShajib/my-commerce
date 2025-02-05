// Import the 'combineReducers' function from Redux Toolkit
import { combineReducers } from "@reduxjs/toolkit"; 

// Importing the authReducer, which is responsible for handling authentication (login/logout)
import authReducer from "./reducers/authReducer";  

// Now, we are creating a big box (rootReducer) where we can put multiple smaller boxes (reducers).
// A reducer is like a brain that tells our app what to do when something happens, like logging in or logging out.
const rootReducers = combineReducers({
    auth: authReducer  // Here, we put the authReducer inside our big box and name it 'auth'.
    // If we had more reducers (like cartReducer, userReducer), we would add them here.
});

// Finally, we send this big box (rootReducers) out so other parts of our app can use it.
export default rootReducers;
