import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";


const useInstructor = () => {
    const { user } = useContext(AuthContext);
    console.log(user);
    const token = localStorage.getItem('access-token');
    const { data: isInstructor, isLoading: isInstructorLoading } = useQuery({
        queryKey: ['isInstructor', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://learning-school-server.vercel.app/users/instructor/${user?.email}`,
                {
                    headers: {
                        authorization: `bearer ${token}`
                    }

                })
            console.log("fff",res);
            const result = await res.json();
            return result.instructor;
        }
    })
    return [isInstructor, isInstructorLoading]

};

export default useInstructor;