import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../firebase/AuthProvider";
import { Navigate } from "react-router-dom";

const Login = () => {
    const {logInUser, loginStatus, setLoginStatus, user, setUser} = useContext(AuthContext);

    const handleLogin = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget)
        const email = form.get('email');
        const password = form.get('password');

        setLoginStatus(null)
        logInUser(email, password)
        .then(result =>{
            setUser(result.user)
            setLoginStatus('Login Successfully')
        })
        .catch((error)=>{
            console.log(error);
            setLoginStatus("Login Failed")
        })

    }

    return (
        <div>
            {
                user ? 
                <Navigate to={'/'}></Navigate>
                :
                <>
                <Navbar></Navbar>
                <div className="flex justify-center items-center mt-20">
                    <form onSubmit={handleLogin} className="w-[95%] md:w-3/4 lg:w-1/2 mx-auto">
                        <label className="input input-bordered flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                            <input type="text" className="grow" placeholder="Email" name="email" />
                        </label>
                        <label className="input input-bordered flex items-center gap-2 mt-5">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                            <input type="password" placeholder="Password" className="grow" name="password" />
                        </label>
                        <button type="submit" className="btn w-full mt-5">Login</button>
                        <p className="text-center mt-3 text-gray-500 font-bold">{loginStatus}</p>
                        <h3 className="text-center mt-3">Do not have any account? Please <Link to={'/register'} className="text-blue-600 font-bold">Register</Link> Now.</h3>
                    </form>
                </div>
                </>
            }
        </div>
    );
};

export default Login;