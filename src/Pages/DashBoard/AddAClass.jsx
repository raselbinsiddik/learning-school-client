import { Helmet } from "react-helmet";
import SectionTitle from "../../SectionTitle/SectionTitle";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";


const AddAClass = () => {
    const { user } = useContext(AuthContext);

    const handleAddAClass = event => {
        event.preventDefault();
        const form = event.target;

        const name = form.name.value;
        const price = form.price.value;
        const photo = form.photoURL.value;
        const availableSeats = form.availableSeats.value;
        const email = user?.email;
        const instructorName = user?.displayName;

        
        const addClass = { name, price, photo, email, availableSeats, instructorName }
        console.log(addClass);
        
            fetch('http://localhost:5000/addClass', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(addClass)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.insertedId) {
                        Swal.fire({
                            title: 'success',
                            text: 'user added successfully',
                            icon: 'success',
                            confirmButtonText: 'Cool'
                        })
                    }
                })
        }
    

    return (
        <div>
            <Helmet><title>Translang | Add a class</title></Helmet>
            <SectionTitle subHeading={'Add class'} heading={'Add a class for students'}></SectionTitle>
            <form onSubmit={handleAddAClass} className="form-control grid grid-cols-2 w-full">
                
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Class Name</span>
                    </label>
                    <input type="text" name="name" placeholder="class Name" className="input input-bordered w-full " required/>
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Class Image</span>
                    </label>
                    <input type="text" name="photoURL" placeholder="class photo url" className="input input-bordered w-full ml-3" required/>
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Instructor Name</span>
                    </label>
                    <input type="text" name="intructorName" defaultValue={user?.displayName} placeholder="Instructor Name" className="input input-bordered w-full" readOnly/>
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Instructor Email</span>
                    </label>
                    <input type="text" name="instructor email" defaultValue={user?.email} placeholder="Instructor Email" className="input input-bordered w-full ml-3" readOnly/>
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Available Seats</span>
                    </label>
                    <input type="text" name="availableSeats" placeholder="available Seats" className="input input-bordered w-full" />
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input type="text" name="price" placeholder="price" className="input input-bordered w-full ml-3" required/>
                </div>
                <div className="form-control mt-6 mb-5">
                    <input className="btn btn-primary" type="submit" value="Add Class" />
                </div>
            </form>
        </div>
    );
};

export default AddAClass;