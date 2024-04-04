import { useEffect, useState } from "react";

const LeftNavbar = () => {

    const [category, setCategory] = useState([]);

    useEffect(()=>{
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setCategory(data))
    }, [])

    return (
        <div>
            <h1 className="text-xl font-poppins font-bold mb-5">All Category</h1>
            <div className="px-5 py-3 bg-blue-100">
                <h1 className="text-xl font-poppins font-bold">National News</h1>
            </div>
            <div>
                {
                    category.map(item => <h1 key={item.id} className="mt-3 px-5 text-lg font-semibold text-gray-400"> {item.name}</h1>)
                }
            </div>
        </div>
    );
};

export default LeftNavbar;