import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";


const useBooked = () => {
    const { user, loaiding } = useContext(AuthContext);
    const token = localStorage.getItem('access-token')

    const { refetch, data:book=[] } = useQuery({
        queryKey: ['booked', user?.email],
        enabled: !loaiding && !!user?.email,
        queryFn: async () => {
            const res = await fetch(`https://learning-school-server.vercel.app/booked?email=${user?.email}`, {
                headers: {
                    authorization: `bearer ${token}`
                }
            })
           
            return res.json();
            
           
        }
    })
    return [book, refetch]

};

export default useBooked;