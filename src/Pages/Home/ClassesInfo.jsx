import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";
import UseAllUsers from "../../hooks/UseAllUsers";
import useBooked from "../../hooks/useBooked";
import useInstructor from "../../hooks/useInstructor";

const ClassesInfo = ({ popular }) => {
    const { image, language, available_seats, instructor, price, _id } = popular;
    const { user } = useContext(AuthContext);
    const [, refetch] = useBooked();
    const navigate = useNavigate();
    const location = useLocation();
    const [isAdmin] = UseAllUsers();
    const [isInstructor] = useInstructor();

    const handleBooked = popular => {
        console.log(popular);
        if (user) {
            const bookedClass = {itemId: _id, image, language, available_seats, instructor, price, email:user.email }
            fetch('https://learning-school-server.vercel.app/booked', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(bookedClass)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        refetch();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Class booked on the cart',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                });
        }
        else {
            Swal.fire({
                title: 'Please login to booked the class ?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'login now'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } });
                }
            })
        }
    }

    return (
        <div>
            <div className="bg-base-100 shadow-xl mx-auto grid grid-cols-1 md:grid-cols-2 mb-6">
                <figure><img className="h-96 w-full rounded-xl" src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <div>
                        <h2 className="card-title">Class Name: {language}</h2>
                        <h2 className="card-title">Instructor Name: {instructor}</h2>
                        <p className="card-title">Available Seats: {available_seats}</p>
                        <p className="card-title">Price: ${price}</p>
                    </div>
                    <div className="card-actions justify-end">
                        <button disabled={isAdmin || isInstructor} onClick={() => handleBooked(popular)} className={`btn btn-primary ${isAdmin || isInstructor ? 'bg-red-400':''}`}>start Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClassesInfo;