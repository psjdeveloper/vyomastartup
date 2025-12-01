"use client";

export default function Nav(){
    return(
        <nav className="p-1 border-8 shadow-blue-500
          bg-blue-500 ">
    <ul className="flex justify-center space-x-8">
        <li>
        <a href="/" className="text-white font-semibold hover:text-gray-200">
            Home
        </a>
        </li>
        <li>
        <a href="/about" className="text-white font-semibold hover:text-gray-200">
            About
        </a>
        </li>
        <li>
        <a href="/contact" className="text-white font-semibold hover:text-gray-200">
            Contact
        </a>
        </li>
         <li>
        <a href="https://vyomaco.substack.com/" className="text-white font-semibold hover:text-gray-200">
            newslette
        </a>
        </li>
    </ul>           
          </nav>
    );
};