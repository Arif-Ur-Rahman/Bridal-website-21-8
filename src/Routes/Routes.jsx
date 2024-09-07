import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import Homepage from "../Home/Homepage";
import OffDayManager from "../Admin/Offday";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";
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
import AdminRoute from "./AdminRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: '/',
        element: <Homepage />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      // sub nav part page
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/about',
        element: <AboutSection />
      },
      {
        path: '/service',
        element: <SubService />
      },
      // shop part start
      {
        path: '/shop1',
        element: <Shop1 />
      },
      {
        path: '/shop2',
        element: <Shop2 />
      },
      // shop part end
      // Category part start
      {
        path: '/cat1',
        element: <Category1 />
      },
      {
        path: '/cat2',
        element: <Category2 />
      },
      {
        path: '/cat3',
        element: <Category3 />
      },
      // category part end
      // admin+user routes
      {
        path: '/dashboard',
        element: <Dashboard />,
        children: [
          {
            path: 'offday',
            element: (
              <PrivateRoute>
                <OffDayManager />
              </PrivateRoute>
            ),
          },
          {
            path: 'details/:date',
            element: (
              <PrivateRoute>
                <DayDetails />
              </PrivateRoute>
            ),
          },
          {
            path: 'open-details',
            element: (
              <PrivateRoute>
                <CalendarComponent />
              </PrivateRoute>
            ),
          },
          // User or Employee's Path
          {
            path: 'userpage',
            element: (
              <PrivateRoute>
                <UserDetails />
              </PrivateRoute>
            ),
          },
        ],
      },
    ],
  },
]);

export default router;
