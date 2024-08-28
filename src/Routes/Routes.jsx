import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import Homepage from "../Home/Homepage";
import OffDayManager from "../Admin/Offday";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";
// import A from "../Pages/Admin/Homepage/A";
import E from "../Pages/Employee/Homepage/E";
import Dashboard from "../Layout/Dashboard";
import PrivateRoute from "./PrivateRoute";
// import AdminRoute from "./AdminRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: '/',
        element: <Homepage></Homepage>,
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
      // ...........admin+user............
      {
        path: '/dashboard',
        element: <Dashboard></Dashboard>,
        children: [
          {
            path: 'apage', // Removed leading slash
            element: (
              <PrivateRoute>
                <OffDayManager></OffDayManager>
                </PrivateRoute>
            ),
          },
          // User or Employee's Path
          {
            path: 'epage', // Removed leading slash
            element: (
              <PrivateRoute>
                <E></E>
              </PrivateRoute>
            ),
          },
        ],
      },
      // ..........admin+user...............
    ],
  },
]);

export default router;
