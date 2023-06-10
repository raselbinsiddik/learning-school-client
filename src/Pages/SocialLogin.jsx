import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { FaGoogle } from 'react-icons/fa';
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";


const SocialLogin = () => {
    const { googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const googleUser = result.user;
                console.log(googleUser);

                const saveUser = { name: googleUser.displayName, email: googleUser.email }

                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.insertedId) {
                            Swal.fire({
                                position: 'top-end',
                                icon: 'success',
                                title: 'your login successfull',
                                showConfirmButton: false,
                                timer: 1500
                            })
                           
                        }
                        navigate(from, { replace: true });
                    });
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