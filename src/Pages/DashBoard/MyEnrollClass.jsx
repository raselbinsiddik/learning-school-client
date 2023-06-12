import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { Helmet } from "react-helmet";
import { AuthContext } from "../../Provider/AuthProvider";
import SectionTitle from "../../SectionTitle/SectionTitle";



const MyEnrollClass = () => {
    
    const { user } = useContext(AuthContext);
    const { data: enrolled = [] } = useQuery(['payment'], async () => {
        const res = await fetch(`https://learning-school-server.vercel.app/payment?email=${user?.email}`)
        return res.json();
    });
    console.log(enrolled);
    return (
        <div className="overflow-x-auto  w-full">
            <Helmet>
                <title>Translang | my enroll class</title>
            </Helmet>
<SectionTitle subHeading={'enroll'} heading={'your enroll class'}></SectionTitle>
            <table className="table font-bold">
                {/* head */}

                <thead className="font-bold text-xl">
                    <tr>
                        <th>#</th>
                        <th>Date</th>
                        <th>Class Name</th>
                        <th>Email</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        enrolled.map((enroll, index) =>
                            <tr key={enroll._id}>
                                <th>{index + 1}</th>
                                <td>{enroll.date}</td>
                                <td>{enroll.className}</td>
                                <td>{enroll.email}</td>
                               
                            </tr>
                        )
                    }


                </tbody>
            </table>
        </div>
    );
};

export default MyEnrollClass;