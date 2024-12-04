import React from "react";

const Header = () => {
    return (
        <header className="w-full flex items-center justify-between p-4 border-b border-gray-300 bg-white">
            <div className="flex items-center space-x-2 ml-4">
                {/* Logo */}
                <img
                    src="/intualai-logo.png"
                    alt="IntualAI Logo"
                    className="w-6 h-6"
                />
                {/* Text */}
                <span className="font-bold text-xl font-sans text-black">IntualAI</span>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex space-x-6">
                <a href="/about" className="text-gray-600 hover:text-black">
                    About Us
                </a>
                <a href="/features" className="text-gray-600 hover:text-black">
                    Features
                </a>
                <a href="/pricing" className="text-gray-600 hover:text-black">
                    Pricing
                </a>
                <a href="/contact" className="text-gray-600 hover:text-black">
                    Contact
                </a>
            </nav>

            {/* Buttons */}
            <div className="flex space-x-4 mr-4">
                <a
                    href="/learn-more"
                    className="px-4 py-2 text-sm font-medium text-gray-800 bg-gray-100 rounded hover:bg-gray-200"
                >
                    Learn More
                </a>
                <a
                    href="/sign-up"
                    className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded hover:bg-blue-700"
                >
                    Sign Up
                </a>
            </div>
        </header>
    );
};

export default Header;
