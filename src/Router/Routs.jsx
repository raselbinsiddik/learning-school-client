import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import InstructorPage from "../Pages/InstructorPage";
import ClassesPage from "../Pages/Home/ClassesPage";
import DashBoard from "../layout/DashBoard";
import MySelectedClass from "../Pages/DashBoard/MySelectedClass";
import MyEnrollClass from "../Pages/DashBoard/MyEnrollClass";
import AllUsers from "../Pages/DashBoard/AllUsers";
import AddAClass from "../Pages/DashBoard/AddAClass";
import AddAClassInfo from "../Pages/DashBoard/AddAClassInfo";
import ManageClasses from "../Pages/DashBoard/ManageClasses";
// import DashBoard from "../Pages/DashBoard/DashBoard"

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element:<Home></Home>
            },
            {
                path: '/login',
                element:<Login></Login>
            },
            {
                path: 'signup',
                element:<SignUp></SignUp>
            },
            {
                path: 'instructorpage',
                element:<InstructorPage></InstructorPage>
            },
            {
                path: 'classpage',
                element:<ClassesPage></ClassesPage>
            }
        ]
    },
    {
        path: 'dashboard',
        element: <DashBoard></DashBoard>,
        children: [
            {
                path: 'myselectedclass',
                element:<MySelectedClass></MySelectedClass>
            },
            {
                path: 'myenrollclass',
                element:<MyEnrollClass></MyEnrollClass>
            },
            {
                path: 'allusers',
                element:<AllUsers></AllUsers>
            },
            {
                path: 'addaclass',
                element:<AddAClass></AddAClass>
            },
            {
                path: 'addclassinfo',
                element:<AddAClassInfo></AddAClassInfo>
            },
            {
                path: 'manageclass',
                element:<ManageClasses></ManageClasses>
            }
        ]
    }
]);

