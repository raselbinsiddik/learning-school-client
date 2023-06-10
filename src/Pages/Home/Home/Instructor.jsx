import { useEffect, useState } from "react";
import SectionTitle from "../../../SectionTitle/SectionTitle";


const Instructor = () => {
    const [teachers, setTeachears] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/instructor')
            .then(res => res.json())
            .then(data => setTeachears(data))
    }, [])
    return (
        <div className="my-8">
            <SectionTitle subHeading={'instructor'} heading={'Our instructor one of the best teacher'}></SectionTitle>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    teachers.slice(0, 6).map(teacher => <p key={teacher._id}>
                        <div className="card w-96 bg-base-100 shadow-xl mx-auto mt-4">
                            <figure><img className="h-72" src={teacher.image} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Teacher: {teacher.title}</h2>
                                <p className="card-title">Experience:{teacher.experience }</p>

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

export default Instructor;