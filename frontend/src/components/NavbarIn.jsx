import React, { useState, useEffect, useRef } from "react";
import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { IoSearchSharp } from "react-icons/io5";
import { useSelector, useDispatch } from "react-redux";
import { motion } from "framer-motion";
import { FaAngleDown, FaRegUserCircle } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { logoutUser } from "../slices/actions/auth.action";

function NavbarIn() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const navRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //redux state
  const { loading, user } = useSelector((state) => state.user);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleOutsideClick = (event) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      setIsMenuOpen(false);
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    if (isMenuOpen || showDropdown) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isMenuOpen, showDropdown]);

  const handleAvatarClick = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-[#2d2d2d]">
      <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-3 sm:px-6 lg:px-8">
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
            className={`md:block ${isMenuOpen ? "max-h-screen" : "max-h-0"} absolute top-16 left-0 w-full bg-[#2d2d2d] transition-all ease-in-out duration-300 overflow-hidden md:static md:w-auto md:max-h-full`}
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
          <button
            className="text-2xl pr-4 md:hidden"
            onClick={handleMenuToggle}
          >
            <IoSearchSharp />
          </button>

          <div className="flex items-center gap-4 md:pr-0 pr-2">
            <div className="relative flex gap-5 w-10 items-center">
              <img
                src={user.user.avatar}
                alt="user-avatar"
                onClick={handleAvatarClick}
                className="cursor-pointer"
              />
              <div
                className="absolute ml-10 pt-1 text-base cursor-pointer"
                onClick={handleAvatarClick}
              >
                <FaAngleDown />
              </div>
              {showDropdown && (
                <motion.div
                  initial={{ opacity: 0, y: -30 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute right-0 mt-[160px] w-48 bg-[#2c2c2c]  rounded-lg border-2"
                >
                  <ul className="py-1 text-[14px] md:text-[16px]">
                    <li
                      className="relative px-2 flex items-center cursor-pointer"
                      onClick={() => navigate("/profile")}
                    >
                      <div className="absolute text-xl text-teal-500">
                        <FaRegUserCircle />
                      </div>
                      <button className="w-full pl-[30px] py-2 text-left border-b">
                        Profile
                      </button>
                    </li>

                    <li
                      className="relative px-2 flex items-center cursor-pointer"
                      onClick={() => {
                        dispatch(logoutUser());
                      }}
                    >
                      <div className="absolute text-xl text-teal-500">
                        <FiLogOut />
                      </div>
                      <button className="w-full pl-[30px] py-2 text-left ">
                        Logout
                      </button>
                    </li>
                  </ul>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default NavbarIn;
