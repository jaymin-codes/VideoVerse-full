import React from "react";
import { Link } from "react-router-dom";
import { IoMdHome, IoMdVideocam } from "react-icons/io";
import { AiFillLike } from "react-icons/ai";
import { MdHistory } from "react-icons/md";
import { BsCollectionPlayFill } from "react-icons/bs";
import { FaUserFriends } from "react-icons/fa";

function SideBar() {
  return (
    <div className="fixed h-screen w-[18%] sm:w-[20%] bg-[#2d2d2d] pt-16">
      <div className="relative">
        <ul className="mt-6 space-y-4 ml-[5px] sm:ml-0">
          <li className="mx-1 sm:mx-2 p-2 rounded-lg bg-teal-600 transition hover:bg-teal-500/60">
            <Link to="/" className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-2 sm:gap-4">
              <div className="text-3xl sm:text-2xl">
                <IoMdHome />
              </div>
              <div className="hidden sm:inline text-xl">
                <span>Home</span>
              </div>
            </Link>
          </li>
          <li className="mx-1 sm:mx-2 p-2 rounded-lg bg-teal-600 transition hover:bg-teal-500/60">
            <Link to="" className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-2 sm:gap-4">
              <div className="text-3xl sm:text-2xl">
                <AiFillLike />
              </div>
              <div className="hidden sm:inline text-xl">
                <span>Liked Videos</span>
              </div>
            </Link>
          </li>
          <li className="mx-1 sm:mx-2 p-2 rounded-lg bg-teal-600 transition hover:bg-teal-500/60">
            <Link to="" className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-2 sm:gap-4">
              <div className="text-3xl sm:text-2xl">
                <MdHistory />
              </div>
              <div className="hidden sm:inline text-xl">
                <span>History</span>
              </div>
            </Link>
          </li>
          <li className="mx-1 sm:mx-2 p-2 rounded-lg bg-teal-600 transition hover:bg-teal-500/60">
            <Link to="" className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-2 sm:gap-4">
              <div className="text-3xl sm:text-2xl">
                <BsCollectionPlayFill />
              </div>
              <div className="hidden sm:inline text-xl">
                <span>Collections</span>
              </div>
            </Link>
          </li>
          <li className="mx-1 sm:mx-2 p-2 rounded-lg bg-teal-600 transition hover:bg-teal-500/60">
            <Link to="" className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-2 sm:gap-4">
              <div className="text-3xl sm:text-2xl">
                <IoMdVideocam />
              </div>
              <div className="hidden sm:inline text-xl">
                <span>My Content</span>
              </div>
            </Link>
          </li>
          <li className="mx-1 sm:mx-2 p-2 rounded-lg bg-teal-600 transition hover:bg-teal-500/60">
            <Link to="" className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-2 sm:gap-4">
              <div className="text-3xl sm:text-2xl">
                <FaUserFriends />
              </div>
              <div className="hidden sm:inline text-xl">
                <span>Subscribers</span>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SideBar;
