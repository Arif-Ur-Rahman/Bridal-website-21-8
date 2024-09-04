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
import Contact from "../Pages/Contact/Contact";
import AboutSection from "../Pages/AboutSection";
import SubService from "../Pages/SubService";
import Category1 from "../Pages/Category/Category1";
import Category2 from "../Pages/Category/Category2";
import Category3 from "../Pages/Category/Category3";
import Shop1 from "../Pages/Shop/Shop1";
import Shop2 from "../Pages/Shop/Shop2";
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
      // sub nav part page........
      {
        path: '/contact',
        element: <Contact></Contact>,
      },
      {
        path: '/about',
        element: <AboutSection></AboutSection>
      },
      {
        path: '/service',
        element: <SubService></SubService>
      },
        // shop part start
      {
        path: '/shop1',
        element: <Shop1></Shop1>
      },
      {
        path: '/shop2',
        element: <Shop2></Shop2>
      },
      // shop part end
      // Category part start
      {
        path: '/cat1',
        element: <Category1></Category1>
      },
      {
        path: '/cat2',
        element: <Category2></Category2>
      },
      {
        path: '/cat3',
        element: <Category3></Category3>
      },
      // category part end
      // ...........admin+user............
      {
        path: '/dashboard',
        element: <Dashboard></Dashboard>,
        children: [
          {
            path: 'offday', // Removed leading slash
            element: (
               
                <OffDayManager></OffDayManager>
               
            ),
          },
          {
            path: 'details/:date',
            element:  <DayDetails></DayDetails> 
          },
          {
            path: 'open-details',
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
