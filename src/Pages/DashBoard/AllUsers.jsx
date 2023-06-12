import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";
import "./AllUsers.css";


const AllUsers = () => {
    
    const token = localStorage.getItem('access-token');
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch('https://learning-school-server.vercel.app/users',
            {
                headers: {
                    authorization: `bearer ${token}`
                }

            })
        return res.json();
    });

    const handleMakeAdmin = user => {
        fetch(`https://learning-school-server.vercel.app/users/admin/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Make admin successful',
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            });
    };

    const handleMakeInstructor = user => {
        fetch(`https://learning-school-server.vercel.app/users/instructor/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Make instructor successful',
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            });
    };

    
    return (
        <div className="overflow-x-auto w-full">
            <Helmet>
                <title>Translang | All Users</title>
            </Helmet>
            <div className="flex justify-around">
                <span className="text-3xl font-semibold">Total users: {users.length}</span>
                {/* <span className="text-3xl font-semibold">Total price: ${total}</span> */}
            </div>

            <table className="table font-bold">
                {/* head */}
                <thead className="font-bold text-xl">
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={user._id}>
                            <th>{index + 1}</th>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>
                                {user.role === "admin" ? "admin" :
                                    user.role === "instructor" ? "instructor" :
                                        (<div>
                                            <button
                                                onClick={() => handleMakeAdmin(user)}
                                                className="btn btn-primary"
                                            >
                                                Make Admin
                                            </button>{" "}
                                            <button
                                                onClick={() => handleMakeInstructor(user)}
                                                className="btn btn-primary"
                                            >
                                                Make Instructor
                                            </button>
                                        </div>)
                                }
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AllUsers;
