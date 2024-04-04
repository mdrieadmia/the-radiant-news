import { FaGoogle, FaFacebook , FaGithub} from "react-icons/fa";
import qZone1 from '../../assets/qZone1.png'
import qZone2 from '../../assets/qZone2.png'
import qZone3 from '../../assets/qZone3.png'

const RightContent = () => {
    return (
        <div className="">
            <div>
                <h1 className="text-xl font-bold text-center font-poppins mt-5">Login With</h1>
                <div className="">
                    <div className="flex justify-center items-center gap-2 py-2 px-5 bg-blue-50 border rounded-lg mt-5 cursor-pointer hover:bg-blue-200 duration-200 text-base font-poppins font-semibold">
                        <FaGoogle />
                        <span>Login with Google</span>
                    </div>
                    <div className=" flex justify-center items-center gap-2 py-2 px-5 bg-blue-50 border rounded-lg mt-2 cursor-pointer hover:bg-blue-200 duration-200 text-base font-poppins font-semibold">
                        <FaGithub  />
                        <span>Login with Github</span>
                    </div>
                    <div className=" flex justify-center items-center gap-2 py-2 px-5 bg-blue-50 border rounded-lg mt-2 cursor-pointer hover:bg-blue-200 duration-200 text-base font-poppins font-semibold">
                        <FaFacebook />
                        <span>Login with Facebook</span>
                    </div>
                </div>
            </div>
            <div>
                <h1 className="text-xl font-bold text-center font-poppins mt-5">Find Us On</h1>
                <div className="">
                    <div className="flex justify-start items-center gap-2 py-2 px-5 border rounded-t-lg mt-5 cursor-pointer hover:bg-blue-200 duration-200 text-base font-poppins font-semibold">
                        <div className="p-2 bg-blue-100 rounded-full">
                            <FaGoogle />
                        </div>
                        <span>Facebook</span>
                    </div>
                    <div className=" flex justify-start items-center gap-2 py-2 px-5 border-x cursor-pointer hover:bg-blue-200 duration-200 text-base font-poppins font-semibold">
                        <div className="p-2 bg-blue-100 rounded-full">
                            <FaGithub  />
                        </div>
                        <span>Instagram</span>
                    </div>
                    <div className=" flex justify-start items-center gap-2 py-2 px-5 border rounded-b-lg cursor-pointer hover:bg-blue-200 duration-200 text-base font-poppins font-semibold">
                        <div className="p-2 bg-blue-100 rounded-full">
                            <FaFacebook />
                        </div>
                        <span>Twitter</span>
                    </div>
                </div>
            </div>
            <div className="">
                <div className="bg-blue-50 mt-5 rounded-lg pt-5">
                    <h1 className="text-xl font-bold text-center font-poppins ">Q Zone</h1>
                    <div className="flex justify-center items-center mt-3">
                        <img className="w-[90%]" src={qZone1} alt="QZone Image" />
                    </div>
                    <div className="flex justify-center items-center mt-3">
                        <img className="w-[90%]" src={qZone2} alt="QZone Image" />
                    </div>
                    <div className="flex justify-center items-center mt-3">
                        <img className="w-[90%]" src={qZone3} alt="QZone Image" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RightContent;