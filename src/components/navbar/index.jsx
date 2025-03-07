import { useState } from "react";
import Shah from "../../assets/image/shah.png";
import Sort from "../../assets/image/sort.png";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="flex justify-between items-center pt-10 lg:px-20 px-3 relative">
            {/* Mobile Menu Button */}
            <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
                <img src={Sort} alt="Menu Icon" className="w-7 h-7" />
            </button>

            {/* Logo */}
            <img src={Shah} alt="Logo" className="lg:w-16 lg:h-8 w-14 h-6" />

            {/* Navigation Links */}
            <ul
                className={`lg:flex lg:flex-row gap-14 items-center absolute lg:static bg-[#121212] lg:bg-transparent top-18 left-0 w-full lg:w-auto p-5 lg:p-0 shadow-md lg:shadow-none transition-all duration-300 ${
                    isOpen ? "flex flex-col items-center" : "hidden"
                }`}
            >
                <li className="text-[#0f76ecf5] lg:text-lg font-bold cursor-pointer font-lato">Home</li>
                <li className="text-[#959595] font-medium cursor-pointer font-lato">Services</li>
                <li className="text-[#959595] font-medium cursor-pointer font-lato">About Me</li>
                <li className="text-[#959595] font-medium cursor-pointer font-lato">Portfolio</li>
                <li className="text-[#959595] font-medium cursor-pointer font-lato">Contact Me</li>
            </ul>

            {/* Hire Me Button */}
            <button className="text-white font-lato font-bold bg-gradient-to-r from-[#00A0FA] to-[#0500FD] lg:px-6 px-4 lg:py-2 py-1 rounded-lg cursor-pointer">
                Hire Me
            </button>
        </nav>
    );
}

export default Navbar;
