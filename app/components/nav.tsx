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
        <a href="https://vyoma-books.vercel.app/" className="text-white font-semibold hover:text-gray-200">
            Books
        </a>
         <a href="https://vyomaco.wordpress.com/?_gl=1*sh83pk*_gcl_au*MTI4MTE4MTQ1Ny4xNzY0NzYyNDMyLjE2NTUwNjM0MDIuMTc2NDg1NTgwNC4xNzY0ODU2MDYx" className="text-white font-semibold hover:text-gray-200">
            Magzine
        </a>
            <a href="https://vyoma-os.vercel.app/" className="text-white font-semibold hover:text-gray-200">
            All in one toolkit
        </a>
         <a href="https://github.com/psjdeveloper/vyomaco/releases/tag/vyoma" className="text-white font-semibold hover:text-gray-200">
            Android app
        </a>
        </li>
    </ul>           
          </nav>
    );
};