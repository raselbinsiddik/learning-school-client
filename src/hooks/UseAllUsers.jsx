import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";


const UseAllUsers = () => {
    const { user } = useContext(AuthContext);

    const {data: isAdmin, isLoading: isAdminLoading} = useQuery({
        queryKey: ['isAdmin', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/users/admin/${user?.email}`)
            const result = await res.json();
            return result.admin;
        }
    })
    return [isAdmin, isAdminLoading]

};

export default UseAllUsers;