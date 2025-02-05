// Importing 'configureStore' from Redux Toolkit, which helps us create a central storage for our app.
import { configureStore } from "@reduxjs/toolkit"; 

// Importing our rootReducers, which combines all the small brains (reducers) of our app.
import rootReducers from "./rootReducers"; 

// Creating a big storage box (Redux store) where we keep all the important data of our app.
const store = configureStore({

    // Adding our reducers (brains) inside the storage box.
    reducer: rootReducers,

    // Middleware is like security guards that check every action before it goes to the reducers.
    middleware: getDefaultMiddleware => {
        return getDefaultMiddleware({
            // We are turning off a security rule (serializableCheck: false) 
            // because Redux normally likes only simple objects inside actions,
            // but sometimes we need to store complex data (like functions or special objects).
        serializableCheck: false  
        });
    },

    // Enabling Redux DevTools, which helps developers see and debug the store’s data.
    devTools: true  
});

// Exporting the store so other parts of the app can use it.
export default store;
