import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";


const useBooked = () => {
    const { user, loaiding } = useContext(AuthContext);
    const token = localStorage.getItem('access-token')

    const { refetch, data:book=[] } = useQuery({
        queryKey: ['booked', user?.email],
        enabled: !loaiding,
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/booked?email=${user?.email}`, {
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