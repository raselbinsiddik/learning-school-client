import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet";
import SectionTitle from "../../SectionTitle/SectionTitle";
import { FaFedex, FaUserAstronaut } from "react-icons/fa";
import { Zoom } from "react-awesome-reveal";


const AddAClassInfo = () => {
    const { user } = useContext(AuthContext);
    const { data: addClass = []} = useQuery(['addClass'], async () => {
        const res = await fetch(`http://localhost:5000/addClass?email=${user?.email}`)
        return res.json();
    });
    console.log(addClass);
    return (
        <div>
            <SectionTitle subHeading={'classes'} heading={'my added classes'}></SectionTitle>
            <p>Total Added CLass: {addClass.length}</p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Helmet><title>translang | add a class</title></Helmet>

                {
                    addClass.map(a => <p key={a._id}>
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <figure><img className="h-72 w-full" src={a.photo} alt="Shoes" /></figure>
                            <div className="card-body">
                                <p className="card-title">Class Name: {a.name}  <div className="badge badge-secondary">NEW</div></p>
                                <h2 className="card-title">
                                   Fee: {a.price}
                                    <div className="badge badge-secondary">NEW</div>
                                </h2>
                                <p className="card-title">Available Seats: {a.availableSeats}</p>
                                <p className="card-title">Total Enrolled Students: {a.availableSeats}</p>
                                <div className="card-actions justify-end">
                                    <button className="badge badge-outline"><Zoom><FaUserAstronaut /></Zoom> Status</button>
                                    <button className="badge badge-outline"><Zoom><FaFedex /></Zoom> Feedbak</button>
                                    <button className="badge badge-outline"><Zoom><FaFedex /></Zoom>update</button>
                                </div>
                            </div>
                        </div>
                    </p>)
                }
            </div>
       </div>
    );
};

export default AddAClassInfo;