import React from "react";
import { Link } from "react-router-dom";
import { IoMdHome, IoMdVideocam } from "react-icons/io";
import { AiFillLike } from "react-icons/ai";
import { MdHistory } from "react-icons/md";
import { BsCollectionPlayFill } from "react-icons/bs";
import { FaUserFriends } from "react-icons/fa";

function SideBar() {
  return (
    <div className="fixed sm:hidden h-screen w-[20%] flex-col bg-[#2d2d2d] hidden md:flex">
      <div className="">
        <ul className="mt-6 space-y-4">

          <li className="flex items-center mx-2 rounded-lg px-4 py-2 bg-teal-600 transition hover:font-semibold hover:bg-teal-500/60">
            <Link
              href="#"
              className="relative w-full ml-8 text-xl tracking-wide font-medium"
            >
              Home
            </Link>
            <div className="absolute text-2xl">
              <IoMdHome />
            </div>
          </li>

          <li className="flex items-center mx-2 rounded-lg px-4 py-2 bg-teal-600 transition hover:font-semibold hover:bg-teal-500/60">
            <Link
              href="#"
              className="relative w-full ml-8 text-xl tracking-wide font-medium"
            >
              Liked Videos
            </Link>
            <div className="absolute text-2xl">
              <AiFillLike />
            </div>
          </li>

          <li className="flex items-center mx-2 rounded-lg px-4 py-2 bg-teal-600 transition hover:font-semibold hover:bg-teal-500/60">
            <Link
              href="#"
              className="relative w-full ml-8 text-xl tracking-wide font-medium"
            >
              History
            </Link>
            <div className="absolute text-2xl">
              <MdHistory />
            </div>
          </li>
          
          <li className="flex items-center mx-2 rounded-lg px-4 py-2 bg-teal-600 transition hover:font-semibold hover:bg-teal-500/60">
            <Link
              href="#"
              className="relative w-full ml-8 text-xl tracking-wide font-medium"
            >
             Collections
            </Link>
            <div className="absolute text-2xl">
              <BsCollectionPlayFill />
            </div>
          </li>
          
          <li className="flex items-center mx-2 rounded-lg px-4 py-2 bg-teal-600 transition hover:font-semibold hover:bg-teal-500/60">
            <Link
              href="#"
              className="relative w-full ml-8 text-xl tracking-wide font-medium"
            >
              My Content
            </Link>
            <div className="absolute text-2xl">
              <IoMdVideocam />
            </div>
          </li>
          
          <li className="flex items-center mx-2 rounded-lg px-4 py-2 bg-teal-600 transition hover:font-semibold hover:bg-teal-500/60">
            <Link
              href="#"
              className="relative w-full ml-8 text-xl tracking-wide font-medium"
            >
              Subscribers
            </Link>
            <div className="absolute text-2xl">
              <FaUserFriends />
            </div>
          </li>

        </ul>
      </div>
    </div>
  );
}

export default SideBar;
