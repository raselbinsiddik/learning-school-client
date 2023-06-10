import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";


const useBooked = () => {
    const { user } = useContext(AuthContext);

    const { refetch, data:book=[] } = useQuery({
        queryKey: ['booked', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/booked?email=${user?.email}`)
            return res.json();
        }
    })
    return [book, refetch]

};

export default useBooked;