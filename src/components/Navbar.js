import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
    return(
        <>
            <nav style={{width:"60%",margin:"0px 20%", padding:"8px 0px"}} className="  top-0  justify-center text-center fixed 
            bg-gray-700 font-bold text-lg text-white ">
                <ul>
                    <li className="inline-block py-4">
                        <Link to="/" className="pl-6 pr-8" >Home</Link>
                    </li>
                    <li className="inline-block py-4">
                        <Link to="/about" className="pl-6 pr-8" >About</Link>
                    </li>
                    <li className="inline-block py-4">
                        <Link to="/articles-list" className="pl-6 pr-8" >Articles</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
};
export default Navbar;