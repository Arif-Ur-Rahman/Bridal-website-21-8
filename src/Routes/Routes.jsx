import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import Homepage from "../Home/Homepage";
import OffDayManager from "../Admin/Offday";
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
      }
     
       
    ]
    },
  ]);

  export default router;