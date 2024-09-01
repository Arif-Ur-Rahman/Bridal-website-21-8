import Navbar from "../Home/Shared/ANavbar";
import useAdmin from "../Hook/useAdmin";
import UNavbar from "../Home/Shared/UNavbar";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
    const [isAdmin] = useAdmin();
    console.log(isAdmin);
    
    return (
        <div className="">
            <div className="flex-1 max-w-7xl mx-auto">
                {isAdmin ? 
                    <Navbar /> : 
                    <UNavbar />
                }
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;
