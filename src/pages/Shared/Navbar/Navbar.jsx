import { NavLink } from "react-router-dom";
import user from "../../../assets/user.png"
const Navbar = () => {

    const links = <>
        <li className="font-semibold font-poppins text-base"><NavLink to={"/"}> Home </NavLink></li>
        <li className="font-semibold font-poppins text-base"><NavLink to={"/about"}> About </NavLink></li>
        <li className="font-semibold font-poppins text-base"><NavLink to={"/career"}> Career </NavLink></li>
    </>

    return (
        <div>
            <div className="navbar bg-base-100 container mx-auto px-5">
                <div className="navbar-start">
                    <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                    {links}
                    </ul>
                </div>
                <div className="navbar-end flex gap-3">
                    <img className="w-10" src={user} alt="User Icon" />
                    <button className="px-7 py-2 bg-blue-400 text-white text-lg font-bold">Login</button>
                </div>
            </div>
        </div>
    );
};



export default Navbar;