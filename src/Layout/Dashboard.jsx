// import Navbar from "../Pages/Shared/Employee/Navbar";
import Navbar from "../Home/Shared/NavbarNew";
import useAdmin from "../Hook/useAdmin";
// import Navbar_A from "../Pages/Shared/Admin/Navbar_A";
import { Outlet } from "react-router-dom";
 
const Dashboard = () => {
    const [isAdmin] = useAdmin();
    console.log(isAdmin);
    return (
       <div className="">
         <div className="flex-1 max-w-7xl mx-auto">
                <Outlet></Outlet>
           </div>
         
             
            
        </div>
        
       
    );
};

export default Dashboard;