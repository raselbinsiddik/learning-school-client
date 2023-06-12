import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import SectionTitle from "../../SectionTitle/SectionTitle";
import ClassesInfo from "./ClassesInfo";


const ClassesPage = () => {
    const [populars, setPopulars] = useState([]);

    useEffect(() => {
        fetch('https://learning-school-server.vercel.app/studentClass')
            .then(res => res.json())
            .then(data => setPopulars(data))
    }, [])
    return (
        <div>
            <Helmet><title>Translang | Instructor</title></Helmet>
            <SectionTitle subHeading={'instructor'} heading={'Our instructor one of the best teacher'}></SectionTitle>
            <div>
                {
                    populars.map(popular => <ClassesInfo key={popular._id}popular={popular}>
                       </ClassesInfo>)
                }
            </div>
        </div>
    );
};

export default ClassesPage;