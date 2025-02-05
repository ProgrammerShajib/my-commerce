// Importing necessary modules from React and other libraries
import React, { lazy, Suspense } from "react"; // React core library and lazy loading utilities
import ReactDOM from "react-dom/client"; // ReactDOM for rendering the app to the DOM
import "./index.css"; // Importing global styles for the application
import store from "./store/index"; // Redux store for state management
import { Provider } from "react-redux"; // Provider to connect Redux store to the React app
import { Toaster } from "react-hot-toast"; // Toaster for displaying toast notifications
import reportWebVitals from "./reportWebVitals"; // Utility for measuring app performance
import { BrowserRouter } from "react-router-dom"; // BrowserRouter for handling client-side routing

// Lazy loading the main App component to improve performance (loads only when needed)
const App = lazy(() => import("./App"));

// Creating a root element for rendering the React app
const root = ReactDOM.createRoot(document.getElementById("root"));

// Rendering the entire application
root.render(
  // Wrapping the app in BrowserRouter to enable routing
  <BrowserRouter>
    {/* Providing the Redux store to the entire app using the Provider component */}
    <Provider store={store}>
      {/* Suspense is used to show a fallback (loading message) while the App component is being lazy-loaded */}
      <Suspense fallback="loading...">
        {/* The main App component */}
        <App />
        {/* Toaster component for displaying toast notifications */}
        <Toaster
          toastOptions={{
            position: "top-right", // Position of the toast notifications
            style: {
              background: "#283046", // Background color of the toast
              color: "white", // Text color of the toast
            },
          }}
        />
      </Suspense>
    </Provider>
  </BrowserRouter>
);

// Reporting web vitals (performance metrics) for the app
reportWebVitals();