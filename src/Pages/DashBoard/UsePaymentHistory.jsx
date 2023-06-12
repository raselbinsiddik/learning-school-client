import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";


const UsePaymentHistory = () => {
    const { user, loaiding } = useContext(AuthContext);

    const {data: payment = [] } = useQuery({
        queryKey: ['booked', user?.email],
        enabled: !loaiding && !!user?.email,
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/payment')

            return res.json();


        }
    })
    return [payment]

};

export default UsePaymentHistory;