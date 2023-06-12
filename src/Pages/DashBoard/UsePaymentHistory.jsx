import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";


const UsePaymentHistory = () => {
    const { user, loaiding } = useContext(AuthContext);

    const {data: payment = [] } = useQuery({
        queryKey: ['booked', user?.email],
        enabled: !loaiding && !!user?.email,
        queryFn: async () => {
            const res = await fetch('https://learning-school-server.vercel.app/payment')

            return res.json();


        }
    })
    return [payment]

};

export default UsePaymentHistory;