import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import SectionTitle from "../../SectionTitle/SectionTitle";


const ClassesPage = () => {
    const [populars, setPopulars] = useState([]);

    useEffect(() => {
        fetch('school.json')
            .then(res => res.json())
            .then(data => setPopulars(data))
    }, [])
    return (
        <div>
            <Helmet>Translang | Instructor</Helmet>
            <SectionTitle subHeading={'instructor'} heading={'Our instructor one of the best teacher'}></SectionTitle>
            <div>
                {
                    populars.map(popular => <p key={popular._id}>
                        <div className="bg-base-100 shadow-xl mx-auto grid grid-cols-1 md:grid-cols-2 mb-6">
                            <figure><img className="h-96 w-full rounded-xl" src={popular.image} alt="Shoes" /></figure>
                            <div className="card-body">
                                <div>
                                    <h2 className="card-title">Class Name: {popular.name}</h2>
                                    <h2 className="card-title">Instructor Name: {popular.instructor}</h2>
                                    <p className="card-title">Available Seats: {popular.available_seats}</p>
                                    <p className="card-title">Price: {popular.price}</p>
                                </div>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">start Now</button>
                                </div>
                            </div>
                        </div>
                    </p>)
                }
            </div>
        </div>
    );
};

export default ClassesPage;