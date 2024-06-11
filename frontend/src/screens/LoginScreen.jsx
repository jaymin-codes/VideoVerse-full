import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/logo.png";
import { motion } from "framer-motion";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../slices/actions/auth.action.js";
import ForgotPassword from "../components/ForgotPassword.jsx";
import Loader from "../components/Loader.jsx";

function LoginScreen() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);

  //redux state
  const { loading, error } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    let userCredentials = {
      userName: login,
      email: login,
      password,
    };
    dispatch(loginUser(userCredentials)).then((result) => {
      if (result.payload) {
        console.log(result.payload);
        setLogin("");
        setPassword("");
        navigate("/");
      }

      if (error) {
        toast.error("Inavlid user credentials");
      }
    });
  };

  const toggleShowPass = () => {
    setShowPass(!showPass);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Toaster />
      {loading ? (
        <Loader />
      ) : (
        <div className="flex items-center justify-center my-14">
          <div className="md:w-1/3">
            <div className="mb-2 flex justify-center">
              <img src={Logo} alt="videoverse" className="h-[130px]" />
            </div>

            <h2 className="text-center text-2xl font-bold">
              Sign in to your account
            </h2>

            <form className="mt-8" onSubmit={handleSubmit}>
              <div className="space-y-5">
                <div>
                  <label htmlFor="" className="text-base font-medium ">
                    Email or Username
                  </label>
                  <div className="mt-2">
                    <input
                      className="signUp-signIn-input-field"
                      type="text"
                      placeholder="Email"
                      onChange={(e) => setLogin(e.target.value)}
                      value={login}
                    ></input>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label htmlFor="password" className="text-base font-medium">
                      Password
                    </label>
                  </div>
                  <div className="mt-2 relative">
                    <input
                      className="signUp-signIn-input-field w-full pr-10"
                      type={showPass ? "text" : "password"}
                      placeholder="Password"
                      onChange={(e) => setPassword(e.target.value)}
                      value={password}
                      id="password"
                    />
                    <div
                      className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                      onClick={toggleShowPass}
                    >
                      {showPass ? <FaRegEye /> : <FaRegEyeSlash />}
                    </div>
                  </div>
                  <div className="text-right pt-1">
                    <button onClick={() => setModalVisible(true)} type="button">
                      Forgot password?
                    </button>
                  </div>
                </div>

                <div>
                  <button type="submit" className="signUp-signIn-button">
                    Get Started
                  </button>
                </div>
              </div>

              {error && (
                <div className="mt-4 text-center text-red-500">
                  {error === "Request failed with status code 400"
                    ? "Username/Email and password are required"
                    : error}
                </div>
              )}
            </form>

            <p className="mt-2 text-center text-base">
              Don't have an account?{" "}
              <Link to="/register" className="font-medium underline">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      )}
      <ForgotPassword
        isVisible={isModalVisible}
        onClose={() => setModalVisible(false)}
      />
    </motion.div>
  );
}

export default LoginScreen;
