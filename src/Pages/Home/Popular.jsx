import { useEffect, useState } from "react";
import SectionTitle from "../../SectionTitle/SectionTitle";


const Popular = () => {
    const [populars, setPopulars] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/studentClass')
            .then(res => res.json())
            .then(data => setPopulars(data))
    },[])
    return (
        <div className="my-8">
            <SectionTitle subHeading={'our class'}heading={'we are popular for our class'}></SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    populars.slice(0, 6).map(popular => <p key={popular._id}>
                        <div className="card w-96 bg-base-100 shadow-xl mx-auto mt-4">
                            <figure><img className="h-72" src={popular.image} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Language: {popular.language}</h2>
                                <p className="card-title">Students:{popular.numbers }</p>
                                
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

export default Popular;
