// Importing the `useState` hook from React.
// `useState` is used for managing state in a functional component.
import { useState } from "react"; 

// Importing the `Router` component from the `router` folder.
// This component is responsible for handling navigation between different routes in the application.
import Router from "./router/Router";

// Importing the `publicRoutes` array from the `router/routes/publicRoutes` file.
// This file likely contains an array of route objects that define the public routes in the application.
import publicRoutes from "./router/routes/publicRoutes";

function App() {
  // Creating a state variable `allRoutes` and its setter function `setAllRoutes` using `useState` hook.
  // Initializing `allRoutes` with a copy of the `publicRoutes` array.
  // This state will store all the routes used in the application.
  // (This comment disables the ESLint warning about an unused variable `setAllRoutes`.)
  // eslint-disable-next-line no-unused-vars 
  const [allRoutes, setAllRoutes] = useState([...publicRoutes]);

  // Logging the current state of `allRoutes` to the console.
  // This helps in debugging by checking which routes are stored in `allRoutes`.
  console.log(allRoutes);

  // Rendering the `Router` component and passing `allRoutes` as a prop.
  // The `Router` component will use these routes to handle navigation.
  return <Router allRoutes={allRoutes} />;
}

// Exporting the `App` component as the default export.
// This allows other files to import and use the `App` component.
export default App;
