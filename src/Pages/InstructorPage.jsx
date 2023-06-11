import { useEffect, useState } from "react";

import { Helmet } from "react-helmet";
import SectionTitle from "../SectionTitle/SectionTitle";


const InstructorPage = () => {
    const [teachers, setTeachears] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/instructor')
            .then(res => res.json())
            .then(data => setTeachears(data))
    }, [])
        

    return (
        <div>
            <Helmet><title>Translang | Instructor</title></Helmet>
            <SectionTitle subHeading={'instructor'} heading={'Our instructor one of the best teacher'}></SectionTitle>
            <div>
                {
                    teachers.map(teacher => <p key={teacher._id}>
                        <div className="bg-base-100 shadow-xl mx-auto grid grid-cols-1 md:grid-cols-2 mb-6">
                            <figure><img className="h-96 w-full rounded-xl" src={teacher.image} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Name: {teacher.name}</h2>
                                <h2 className="card-title">Teacher: {teacher.title}</h2>
                                <p className="card-title">Experience: {teacher.experience}</p>
                                <p className="card-title">Classes taken : {teacher.taken_clsses}</p>
                                <p className="card-title">Class Name: {teacher.name_classes }</p>
                                <p className="card-title">Email: {teacher.email }</p>
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

export default InstructorPage;