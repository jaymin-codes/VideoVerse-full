import React, { useState } from 'react';
import { RiMenuLine } from 'react-icons/ri'; // Import the Hamburger icon from React Icons

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage the collapse/expand

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`flex flex-col justify-between h-screen bg-gray-900 text-white lg:w-64 lg:block ${isOpen ? 'w-64' : 'w-16'}`}>
      <div className="px-4 py-6">
        <button className="md:hidden" onClick={toggleSidebar}>
          <RiMenuLine size={24} />
        </button>

        <span className={`grid h-10 w-full place-content-center rounded-lg bg-gray-100 text-xs text-gray-600 ${isOpen ? 'visible' : 'hidden lg:visible'}`}>
          Logo
        </span>

        <ul className={`mt-6 space-y-1 ${isOpen ? '' : 'hidden lg:block'}`}>
          <li>
            <a
              href="#"
              className="block rounded-lg bg-gray-800 px-4 py-2 text-sm font-medium text-gray-300"
            >
              General
            </a>
          </li>

          {/* Rest of the list items */}
        </ul>
      </div>

      {/* Bottom part with user info */}
      <div className="sticky inset-x-0 bottom-0 border-t border-gray-100">
        <a
          href="#"
          className="flex items-center gap-2 bg-gray-800 p-4 hover:bg-gray-700"
        >
          {/* User image and info */}
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
