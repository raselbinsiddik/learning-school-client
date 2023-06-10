import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet";
import { FaRegTrashAlt, FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";


const AllUsers = () => {
    const {data: users=[], refetch} = useQuery(['users'], async() => {
        const res = await fetch('http://localhost:5000/users')
        return res.json();
    })

    const handlMakeAdmin = user => {
        fetch(`http://localhost:5000/users/admin/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Make admin successfull',
                        showConfirmButton: false,
                        timer: 1500
                    })

                }
        })
    }

    const handleDelete = user =>{
        fetch(`http://localhost:5000/users/admin/${user._id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Addmin delete successfull',
                        showConfirmButton: false,
                        timer: 1500
                    })

                }
            })
    }
    return (
            
           
            <div className="overflow-x-auto  w-full">
                <Helmet>
                <title>Translang | Allusers</title>
                </Helmet>
                <div className="flex justify-around"><span className="text-3xl font-semibold">Total users: {users.length}</span>
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
                            <th>Delete</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) =>
                                <tr key={user._id}>
                                    <th>
                                        {index + 1}
                                    </th>
                                    <td> {user.name}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        {user.role === 'admin' ? 'admin' : <button onClick={() => handlMakeAdmin(user)} className="btn btn-primary"><FaUserShield></FaUserShield></button>}
                                    </td>
                                    <th>
                                        <button onClick={() => handleDelete(user)} className="btn btn-outline"><FaRegTrashAlt></FaRegTrashAlt> Delete</button>
                                    </th>
                                </tr>
                            )
                        }


                    </tbody>
                </table>
            </div>

    );
};

export default AllUsers;