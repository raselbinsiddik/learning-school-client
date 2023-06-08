import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { FaGoogle } from 'react-icons/fa';


const SocialLogin = () => {
    const { googleSignIn } = useContext(AuthContext);

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const googleUser = result.user;
                console.log(googleUser);
            })
            .catch(error => {
            console.log(error);
        })
    }
    return (
        <div>
            <div className="divider"></div>
            <div className="w-ful text-center my-4">
                <button onClick={handleGoogleSignIn} className="btn btn-circle">
                    <FaGoogle></FaGoogle>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;