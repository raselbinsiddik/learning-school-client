

import { NavLink, Outlet } from "react-router-dom";
import { Zoom } from "react-awesome-reveal";
import { FaAddressBook, FaHome, FaRegAddressBook, FaSellcast,} from "react-icons/fa";
import { Helmet } from "react-helmet";
import UseAllUsers from "../hooks/UseAllUsers";
import useInstructor from "../hooks/useInstructor";

const DashBoard = () => {
    const [isAdmin] = UseAllUsers();
    const [isInstructor] = useInstructor();
    console.log(isAdmin);
    console.log(isInstructor);

    const renderAdminSidebar = () => (
        <>
            <li>
                <NavLink to="/dashboard/manageclass">
                    <Zoom>
                        <FaAddressBook />
                    </Zoom>
                    Manage Classes
                </NavLink>
            </li>
            <li>
                <NavLink to="/dashboard/allusers">
                    <Zoom>
                        <FaRegAddressBook/>
                    </Zoom>
                    Manage users
                </NavLink>
            </li>
            <div className="divider"></div>
            <li>
                <NavLink to="/">
                    <Zoom>
                        <FaHome/>
                    </Zoom>
                    Home
                </NavLink>
            </li>
        </>
    );

    const renderInstructorSidebar = () => (
        <>
            <li>
                <NavLink to="/dashboard/addaclass">
                    <Zoom duration={1000} count={2}>
                        <FaSellcast />
                    </Zoom>
                    Add a class
                </NavLink>
            </li>
            <li>
                <NavLink to="/dashboard/addclassinfo">
                    <Zoom duration={1000} count={2}>
                        <FaSellcast />
                    </Zoom>
                    My Classes
                </NavLink>
            </li>
            <div className="divider"></div>
            <li>
                <NavLink to="/">
                    <Zoom duration={1000} count={2}>
                        <FaSellcast />
                    </Zoom>
                    Home
                </NavLink>
            </li>
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
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-[#d16051] text-xl font-bold">
                    {/* Sidebar content here */}
                    <h1 className="font-bold text-3xl mb-5">Dashboard</h1>

                    {isAdmin && renderAdminSidebar()}
                    {isInstructor && renderInstructorSidebar()}
                    {!isAdmin && !isInstructor &&  renderUserSidebar()}
                </ul>
            </div>
        </div>
    );
};

export default DashBoard;

