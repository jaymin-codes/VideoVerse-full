import React, { useState, useEffect, useRef } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

function NavbarOt() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef(null);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleOutsideClick = (event) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isMenuOpen]);

  return (
    <header className="fixed top-0 w-full z-50 bg-[#2d2d2d]">
      <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
        <Link className="block w-[130px] md:w-[150px] p-1" to="/">
          <span className="sr-only">Home</span>
          <img src={logo} alt="logo" />
        </Link>

        <div
          className="flex flex-1 items-center justify-end md:justify-between"
          ref={navRef}
        >
          <nav
            aria-label="Global"
            className={`md:block ${isMenuOpen ? "max-h-screen" : "max-h-0"} absolute top-16 left-0 w-full bg-[#2d2d2d] transition-all ease-in-out duration-500 overflow-hidden md:static md:w-auto md:max-h-full`}
          >
            <ul className="flex flex-col md:pt-1 md:flex-row items-center gap-4 text-[18px] md:gap-6 md:pb-0 pb-2">
              <li>
                <Link className="transition hover:font-semibold" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="transition hover:font-semibold" to="/">
                  About
                </Link>
              </li>
              <li>
                <Link className="transition hover:font-semibold" to="/">
                  Contact
                </Link>
              </li>
              <li>
              <Link className="navbar-btn md:hidden" to="/register">
                Register
              </Link>
              </li>
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            <div className="flex gap-5">
              <Link className="navbar-btn " to="/login">
                Login
              </Link>
              <Link className="navbar-btn hidden md:flex sm:flex" to="/register">
                Register
              </Link>
            </div>
            <button
              className="block rounded  p-2.5 transition hover:text-gray-600/75 md:hidden "
              onClick={handleMenuToggle}
            >
              <span className="sr-only">Toggle menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="white"
                strokeWidth="3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default NavbarOt;
