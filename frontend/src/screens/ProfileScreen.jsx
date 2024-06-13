import React from "react";
import NavbarIn from "../components/NavbarIn";
import SideBar from "../components/SideBar";

function ProfileScreen() {
  return (
    <>
      <NavbarIn />

      <div className="flex">
        <SideBar />
        <div>Profile screen</div>
      </div>
    </>
  );
}

export default ProfileScreen;
