// Importing `useRoutes` from "react-router-dom".
// 🛤️ `useRoutes` is a special function that helps React know which page to show when the user clicks a link.
import { useRoutes } from "react-router-dom";

// 🔵 Creating a component called `Router`. 
// - This component will decide which page to show based on the given routes.
const Router = ({ allRoutes }) => {  
    // 📜 `useRoutes([...allRoutes])` takes a list of routes (pages) and makes React understand them.
    // - It helps React know: "If the user goes to /home, show the Home page, if /login, show the Login page."
    const routes = useRoutes([...allRoutes]);  
    
    // 🚀 Returning the selected page (React will show it in the browser).
    return routes;  
}

// 🔴 Exporting `Router` so we can use it in other files.
export default Router;
