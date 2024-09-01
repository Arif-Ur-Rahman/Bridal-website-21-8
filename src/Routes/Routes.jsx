import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import Homepage from "../Home/Homepage";
import OffDayManager from "../Admin/Offday";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";
// import A from "../Pages/Admin/Homepage/A";
// import E from "../Pages/Employee/Homepage/E";
import Dashboard from "../Layout/Dashboard";
import PrivateRoute from "./PrivateRoute";
import DayDetails from "../Admin/DayDetails";
import CalendarComponent from "../Admin/CalenderComponent";
import UserDetails from "../Admin/UserDetails";
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
               
                <OffDayManager></OffDayManager>
               
            ),
          },
          {
            path: 'details/:date',
            element:  <DayDetails></DayDetails> 
          },
          {
            path: 'd',
            element:  <CalendarComponent></CalendarComponent>,
          },
          // User or Employee's Path
          {
            path: 'userpage', // Removed leading slash
            element: (
              <PrivateRoute>
                <UserDetails></UserDetails>
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
