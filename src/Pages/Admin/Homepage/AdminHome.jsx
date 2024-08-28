// import { Helmet } from "react-helmet-async";
// import LimitStock from "./LimitStock";
// import PenReq from "./PenReq";
// import TopMostReq from "./TopMostReq";

import OffDayManager from "../../../Admin/Offday";
import A from "./A";

const AdminHome = () => {
    return (
        <div>
             {/* <Helmet>
                <title>Admin | Home</title>
            </Helmet> */}
            {/* <PenReq></PenReq>
            <TopMostReq></TopMostReq>
            <LimitStock></LimitStock> */}
            <OffDayManager></OffDayManager>
            
        </div>
    );
};

export default AdminHome;