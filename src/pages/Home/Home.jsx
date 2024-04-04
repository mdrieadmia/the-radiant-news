import LeftNavbar from "../../components/LeftNavbar/LeftNavbar";
import RightContent from "../../components/RightContent/RightContent";
import Header from "../Shared/Header/Header";
import Navbar from "../Shared/Navbar/Navbar";


const Home = () => {
    return (
        <div>
            <Header></Header>
            <div className="container mx-auto px-5">
                <div className="flex mt-2 bg-blue-100 p-3">
                    <button className="bg-blue-300 py-3 px-5 text-lg font-bold text-nowrap">Latest News</button>
                    <marquee className="text-lg font-semibold bg-blue-100 py-3 flex"><p className="inline-block mr-10">Metro rail commute to get costlier as NBR declines to extend VAT exemption...</p><p className="inline-block mr-5">Abducted Ruma Sonali Bank manager rescued...</p></marquee>
                </div>
            </div>
            <Navbar></Navbar>
            <div className="container mx-auto px-5 grid grid-cols-4 gap-6">
                <div className="border">
                    <LeftNavbar></LeftNavbar>
                </div>
                <div className="col-span-2 border">
                    
                </div>
                <div>
                    <RightContent></RightContent>
                </div>
            </div>
        </div>
    );
};

export default Home;