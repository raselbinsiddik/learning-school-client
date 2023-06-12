import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";


const UseAllUsers = () => {
    const { user } = useContext(AuthContext);
    const token = localStorage.getItem('access-token');
    const {data: isAdmin, isLoading: isAdminLoading} = useQuery({
        queryKey: ['isAdmin', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://learning-school-server.vercel.app/users/admin/${user?.email}`,
                {
                    headers: {
                        authorization: `bearer ${token}`
                    }
                    
                })
            const result = await res.json();
            return result.admin;
        }
    })
    return [isAdmin, isAdminLoading]

};

export default UseAllUsers;