import { FaDollarSign, FaRegTrashAlt } from "react-icons/fa";
import useBooked from "../../hooks/useBooked";
import Swal from "sweetalert2";


const MySelectedClass = () => {
    const [book, refetch] = useBooked();

    const total = book?.reduce((sum, item) =>item.price + sum, 0)
    console.log(book);

    const handleDelete = _id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/booked/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                           
                        }

                    })

            }
        })

    }
    return (
         
        <div className="overflow-x-auto  w-full">
            <div className="flex justify-around"><span className="text-3xl font-semibold">My Selected classes: {book.length}</span>
                <span className="text-3xl font-semibold">Total price: ${total}</span>
            </div>
            
            <table className="table font-bold">
                {/* head */}
               
                <thead className="font-bold text-xl">
                    <tr>
                        <th>#</th>
                        <th>Image</th>
                        <th>Class Name</th>
                        <th>Instructor</th>
                        <th>Price</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {
                        book.map((b,index) =>
                            <tr key={b._id}>
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img className="w-60" src={b.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {b.language}
                                </td>
                                <td>{b.instructor}</td>
                                <td>${b.price}</td>
                                <th>
                                    <button className="btn btn-success"><FaDollarSign></FaDollarSign> Pay</button>
                                </th>
                                <th>
                                    <button onClick={() => handleDelete(b._id)} className="btn btn-outline"><FaRegTrashAlt></FaRegTrashAlt> Delete</button>
                                </th>
                            </tr>
                        )
                    }
                   
                   
                </tbody>
            </table>
        </div>
       
    );
};

export default MySelectedClass;