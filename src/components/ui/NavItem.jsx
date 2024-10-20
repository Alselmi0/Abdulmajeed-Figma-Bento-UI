import React from 'react';

function NavItem() {
  return (
    <nav className="flex justify-center items-center sticky top-2 z-20 mt-6 pt-2 md:pt-4 lg:pt-6">
      <ul className="flex items-center space-x-2 md:space-x-4 lg:space-x-6 px-2 py-2 md:px-4 md:py-3 lg:px-6 lg:py-4 border-[1px] border-white bg-white bg-opacity-10 backdrop-blur-xl rounded-full shadow-lg z-10">
        {/* Nav Items */}
        <li className="dark:text-white text-black text-sm md:text-base lg:text-lg hover:text-gray-200 transition font-light cursor-pointer">
          <a href="#product">Product</a>
        </li>
        <li className="dark:text-white text-black text-sm md:text-base lg:text-lg hover:text-gray-200 transition font-light cursor-pointer">
          <a href="#integration">Integration</a>
        </li>
        <li className="dark:text-white text-black text-sm md:text-base lg:text-lg hover:text-gray-200 transition font-light cursor-pointer">
          <a href="#demo">Demo</a>
        </li>
        <li className="dark:text-white text-black text-sm md:text-base lg:text-lg hover:text-gray-200 transition font-light cursor-pointer">
          <a href="#pricing">Pricing</a>
        </li>

        {/* Login Button */}
        <li>
          <a
            href="#login"
            className="bg-white text-black font-semibold px-3 py-1 md:px-4 md:py-2 lg:px-6 lg:py-2 cursor-pointer rounded-full hover:bg-gray-100 transition"
          >
            Login
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavItem;
