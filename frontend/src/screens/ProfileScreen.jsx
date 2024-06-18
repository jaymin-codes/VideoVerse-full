import React, { useState } from "react";
import NavbarIn from "../components/NavbarIn";
import SideBar from "../components/SideBar";
import { useSelector } from "react-redux";
import ProfileInfo from "../components/profileScreenComp/ProfileInfo";
import ChannelStats from "../components/profileScreenComp/ChannelStats";
import ChangePassword from "../components/profileScreenComp/ChangePassword";
import { motion } from "framer-motion";

function ProfileScreen() {
  const [activeTab, setActiveTab] = useState("Profile");

  //redux
  const { user } = useSelector((state) => state.user);
  const data = user.user;

  return (
    <>
      <NavbarIn />
      <div className="flex">
        <SideBar />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full mt-16 ml-[18%] sm:ml-[20%] sm:p-4 p-2 relative "
        >
          <div className="sm:h-[230px] h-[140px]">
            <img
              src={data.coverImage}
              alt="Cover Image"
              className="w-full h-full object-center rounded-lg sm:min-h-[200px]"
            />
          </div>

          <div className="flex absolute top-0 sm:w-[120px] w-[80px] sm:mt-[180px] sm:ml-[20px] mt-[105px] ml-[10px]">
            <img
              src={data.avatar}
              alt="Avatar Image"
              className="w-full h-full object-center rounded-lg"
            />
            <div className="sm:mt-[70px] mt-[45px] ml-2 text-gray-300">
              <span className="text-base text-nowrap">@{data.userName}</span>
              <span className="text-base text-nowrap block">{data.fullName}</span>
            </div>
          </div>

          <div className="flex gap-4 mt-[80px]">
            <button
              className={`rounded-lg w-1/3 md:text-xl sm:p-2 text-sm px-2 
                 ${activeTab === "Profile" ? "bg-[#4d4d4d] border-b-[3px] border-teal-500 font-extrabold" : ""}`}
              onClick={() => setActiveTab("Profile")}
            >
              Profile
            </button>
            <button
              className={`rounded-lg w-1/3 md:text-xl sm:p-2 text-sm px-2 
                 ${activeTab === "Channel Stats" ? "bg-[#4d4d4d] border-b-[3px] border-teal-500 font-extrabold" : ""}`}
              onClick={() => setActiveTab("Channel Stats")}
            >
              Channel Stats
            </button>
            <button
              className={`rounded-lg w-1/3 md:text-xl sm:p-2 text-sm px-2 
                 ${activeTab === "Change Password" ? "bg-[#4d4d4d] border-b-[3px] border-teal-500 font-extrabold" : ""}`}
              onClick={() => setActiveTab("Change Password")}
            >
              Change Password
            </button>
          </div>

          <div className="mt-6">
            {activeTab === "Profile" && (
              <div className="bg-[#2d2d2d] p-4 rounded-lg">
                <h2 className="text-2xl font-bold text-center">Profile</h2>
                <ProfileInfo />
              </div>
            )}
            {activeTab === "Channel Stats" && (
              <div className="bg-[#2d2d2d] p-4 rounded-lg">
                <h2 className="text-2xl font-bold text-center">
                  Channel Stats
                </h2>
                <ChannelStats />
              </div>
            )}
            {activeTab === "Change Password" && (
              <div className="bg-[#2d2d2d] p-4 rounded-lg">
                <h2 className="text-2xl font-bold text-center">
                  Change Password
                </h2>
                <ChangePassword />
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default ProfileScreen;
