import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../slices/actions/auth.action";
import { Link } from "react-router-dom";
import NavbarIn from "../components/NavbarIn";
import { motion } from "framer-motion";
import SideBar from "../components/SideBar";

function HomeScreen() {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);

  const handleSubmit = () => {
    dispatch(logoutUser());
    // .then((res) => {
    //   console.log(res.payload);
    // })
  };

  return (
    <>
      <NavbarIn />
      <SideBar />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <button onClick={handleSubmit}>
          <Link to="/login">Logout</Link>
        </button>
      </motion.div>
    </>
  );
}

export default HomeScreen;
