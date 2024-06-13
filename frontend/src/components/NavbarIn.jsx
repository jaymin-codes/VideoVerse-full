import React, { useState, useEffect, useRef } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { IoSearchSharp } from "react-icons/io5";
// import { useSelector } from "react-redux";

function NavbarIn() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef(null);

  // //redux state
  // const user = useSelector((state) => state.user);
  // console.log(user);

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
    <header className="bg-[#2d2d2d]">
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
            <div className="relative flex items-center md:ml-10 md:w-[450px] w-[300px] p-1 mx-auto mb-2 md:mb-0">
              <input
                type="text"
                className="signUp-signIn-input-field tracking-wide font-medium md:text-xl text-md"
                placeholder="Search..."
              />
              <div className="absolute flex items-center right-0 py-2 px-4 text-xl">
                <button>
                  <IoSearchSharp />
                </button>
              </div>
            </div>
          </nav>

          <div className="flex items-center gap-4">
            <div className="flex gap-5">
              {/* {user.user ? (
                <img src={user.user.user.avatar} alt="user" />
              ) : (
                <Link className="navbar-btn " to="/login">
                  Login
                </Link>
              )} */}
            </div>
            <button
              className="block rounded  p-2.5 transition hover:text-gray-600/75 md:hidden border-2"
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

export default NavbarIn;
