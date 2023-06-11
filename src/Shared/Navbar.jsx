import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));

    }
    const navPage =
        <>
            <Link to="/"><li><a>Home</a></li></Link>
           <Link to="/classpage"> <li><a>Classes</a></li></Link>
            {
                user ? <Link to="/dashBoard"><li><a>Dash Board</a></li></Link>:''
            }
            <Link to="/instructorpage"><li><a>Instructor</a></li></Link>
            
            {
                user ? <>
                    <li><button onClick={handleLogout} className="btn btn-ghost">Logout</button></li>
                    <img className='w-10 rounded-full' src={user.photoURL} alt="" />
                    <Link><li><a>{user?.displayName}</a></li></Link>
                </>
                  : <Link to="/login"><li><a>Login</a></li></Link>
            }
            
        </>
    return (
        <div className="navbar fixed z-10 bg-black bg-opacity-30 max-w-screen-xl mx-auto text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow rounded-box w-52 bg-black">
                        {navPage}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">Forign Language Learning School</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 ">
                        {navPage}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Button</a>
            </div>
        </div>
    );
};

export default Navbar;