// import { NavLink, Outlet } from "react-router-dom";
// import {  Zoom } from "react-awesome-reveal";
// import { FaAddressBook, FaHome, FaSellcast } from "react-icons/fa";
// import { Helmet } from "react-helmet";

// const DashBoard = () => {

//     const isAdmin = true;
//     return (
//         <div className="drawer lg:drawer-open">
//             <Helmet>
//                 <title>Translang | Dashboard</title>
//             </Helmet>
//             <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
//             <div className="drawer-content flex flex-col items-center justify-center">
//                 {/* Page content here */}
//                 <Outlet></Outlet>
//                 <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

//             </div>
//             <div className="drawer-side ">
//                 <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
//                 <ul className="menu p-4 w-80 h-full bg-[#d1a054] text-xl font-bold">
//                     {/* Sidebar content here */}
//                     <h1 className="font-bold text-3xl mb-5">Dash Board</h1>

//                     {
//                         isAdmin ?
//                             <>
//                             <li><NavLink to="/dashboard/home"><Zoom duration={1000} count={2}><FaSellcast></FaSellcast></Zoom>Admin Home</NavLink></li>
//                             <li><NavLink to="/dashboard/myenrollclass"><Zoom><FaAddressBook></FaAddressBook></Zoom>Manage users</NavLink></li>
//                             <li><NavLink to="/dashboard/allusers"><Zoom><FaAddressBook></FaAddressBook></Zoom>All users</NavLink></li>
//                             <div className="divider"></div>
                           
//                         </> :
//                             <>
//                                 <li><NavLink to="/dashboard/myselectedclass"><Zoom duration={1000} count={2}><FaSellcast></FaSellcast></Zoom>My selected class</NavLink></li>
//                                 <li><NavLink to="/dashboard/myenrollclass"><Zoom><FaAddressBook></FaAddressBook></Zoom>My Enrolled classes</NavLink></li>
//                                 <div className="divider"></div>
//                                 <li><NavLink to="/dashboard/pay">Payment</NavLink></li>
//                                 <li><NavLink to="/"><Zoom><FaHome></FaHome></Zoom> Home</NavLink></li>

//                             </>
//                     }
//                 </ul>

//             </div>
//         </div>
//     );
// };

// export default DashBoard;



import { NavLink, Outlet } from "react-router-dom";
import { Zoom } from "react-awesome-reveal";
import { FaAddressBook, FaHome, FaSellcast } from "react-icons/fa";
import { Helmet } from "react-helmet";

const DashBoard = () => {
    const role = "instructor"; // Replace with the actual role value based on user login

    const renderAdminSidebar = () => (
        <>
            <li>
                <NavLink to="/dashboard/home">
                    <Zoom duration={1000} count={2}>
                        <FaSellcast />
                    </Zoom>
                    Admin Home
                </NavLink>
            </li>
            <li>
                <NavLink to="/dashboard/myenrollclass">
                    <Zoom>
                        <FaAddressBook />
                    </Zoom>
                    Manage users
                </NavLink>
            </li>
            <li>
                <NavLink to="/dashboard/allusers">
                    <Zoom>
                        <FaAddressBook />
                    </Zoom>
                    All users
                </NavLink>
            </li>
            <div className="divider"></div>
        </>
    );

    const renderInstructorSidebar = () => (
        <>
            <li>
                <NavLink to="/dashboard/instructor-info">
                    <Zoom duration={1000} count={2}>
                        <FaSellcast />
                    </Zoom>
                    Instructor Information
                </NavLink>
            </li>
            <div className="divider"></div>
        </>
    );

    const renderUserSidebar = () => (
        <>
            <li>
                <NavLink to="/dashboard/myselectedclass">
                    <Zoom duration={1000} count={2}>
                        <FaSellcast />
                    </Zoom>
                    My Selected Class
                </NavLink>
            </li>
            <li>
                <NavLink to="/dashboard/myenrollclass">
                    <Zoom>
                        <FaAddressBook />
                    </Zoom>
                    My Enrolled Classes
                </NavLink>
            </li>
            <div className="divider"></div>
            <li>
                <NavLink to="/dashboard/pay">Payment</NavLink>
            </li>
            <li>
                <NavLink to="/">
                    <Zoom>
                        <FaHome />
                    </Zoom>
                    Home
                </NavLink>
            </li>
        </>
    );

    return (
        <div className="drawer lg:drawer-open">
            <Helmet>
                <title>Translang | Dashboard</title>
            </Helmet>
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* Page content here */}
                <Outlet />
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
                    Open drawer
                </label>
            </div>
            <div className="drawer-side ">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-[#d1a054] text-xl font-bold">
                    {/* Sidebar content here */}
                    <h1 className="font-bold text-3xl mb-5">Dashboard</h1>

                    {role === "admin" && renderAdminSidebar()}
                    {role === "instructor" && renderInstructorSidebar()}
                    {role !== "admin" && role !== "instructor" && renderUserSidebar()}
                </ul>
            </div>
        </div>
    );
};

export default DashBoard;
