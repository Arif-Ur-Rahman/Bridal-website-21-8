import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import Homepage from "../Home/Homepage";
import OffDayManager from "../Admin/Offday";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";
const router = createBrowserRouter([
    {
      path: "/",
      element:  <Home></Home>,
      children: [
        {
            path: '/',
            element:  <Homepage></Homepage>,
      },
      {
        path: '/offday',
        element: <OffDayManager></OffDayManager>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
     
       
    ]
    },
  ]);

  export default router;