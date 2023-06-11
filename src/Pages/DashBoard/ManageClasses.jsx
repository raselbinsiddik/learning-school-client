import { Helmet } from "react-helmet";
import SectionTitle from "../../SectionTitle/SectionTitle";

import { useQuery } from "@tanstack/react-query";


const ManageClasses = () => {
   
    const { data: addClass = [] } = useQuery(['addClass'], async () => {
        const res = await fetch('http://localhost:5000/addClass')
        return res.json();
    });

    return (
        <div>
            <SectionTitle subHeading={'classes'} heading={'Manage added classes'}></SectionTitle>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Helmet><title>translang | manage classes</title></Helmet>

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
                                <p className="card-title">Intsructor email: {a.email}</p>
                                <p className="card-title">Available Seats: {a.availableSeats}</p>
                                <div className="card-actions justify-end text-lg font-bold">
                                    <button className="badge badge-success">pending</button>
                                    <button className="badge badge-primary">Approved</button>
                                    <button className="badge badge-ghost">Denied</button>

                                </div>
                            </div>
                        </div>
                    </p>)
                }
            </div>
        </div>
    );
};

export default ManageClasses;