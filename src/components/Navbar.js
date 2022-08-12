import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
    return(
        <>
            <nav className="border-b-4  top-0 w-full justify-center text-center fixed 
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