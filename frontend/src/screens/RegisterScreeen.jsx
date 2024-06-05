import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";

function RegisterScreeen() {
  const [avatarPreview, setAvatarPreview] = useState(null);
  const [coverPreview, setCoverPreview] = useState(null);

  const handleImageChange = (e, setImagePreview) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setImagePreview(null);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="flex md:flex-row flex-col md:space-x-5 p-2 h-screen">
        <div className="md:w-1/2 flex items-center justify-center">
          <img src={Logo} alt="logo" />
        </div>

        <div className="md:w-1/2 p-4 pt-8 md:overflow-y-auto scrollbar-hide">
          <h2 className="text-center text-2xl font-bold">
            Sign up to create account
          </h2>
          <div className="flex justify-center mt-5">
            <div className="flex md:w-2/3 space-y-3">
              <button
                type="button"
                className="signUp-signIn-button bg-white text-black"
              >
                <span className="mr-2 inline-block">
                  <svg
                    className="h-6 w-6 text-[#4285F4]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"></path>
                  </svg>
                </span>
                Sign up with Google
              </button>
            </div>
          </div>

          <div className="text-center p-3 my-4">
            <p className="text-xl font-semibold text-gray-400">OR</p>
          </div>

          <form action="#" method="POST">
            <div className="md:flex md:flex-col md:items-center space-y-3">
              <div className="md:w-2/3">
                <label htmlFor="name" className="text-base font-medium ">
                  Full Name*
                </label>
                <div className="mt-2">
                  <input
                    className="signUp-signIn-input-field"
                    type="text"
                    placeholder="Full Name"
                    id="name"
                  ></input>
                </div>
              </div>

              <div className="md:w-2/3">
                <label htmlFor="email" className="text-base font-medium">
                  Email address*
                </label>
                <div className="mt-2">
                  <input
                    className="signUp-signIn-input-field"
                    type="email"
                    placeholder="Email"
                    id="email"
                  ></input>
                </div>
              </div>

              <div className="md:w-2/3">
                <label htmlFor="username" className="text-base font-medium ">
                  Username*
                </label>
                <div className="mt-2">
                  <input
                    className="signUp-signIn-input-field"
                    type="text"
                    placeholder="Username"
                    id="username"
                  ></input>
                </div>
              </div>

              <div className="md:w-2/3">
                <label htmlFor="avatarImage" className="text-base font-medium">
                  Avatar Image*
                </label>
                <div className="flex items-center space-x-10 h-[50px]">
                  <div className="mt-2 w-1/2">
                    <input
                      className="w-[200px] h-[25px]"
                      type="file"
                      id="avatarImage"
                      accept="image/*"
                      onChange={(e) => handleImageChange(e, setAvatarPreview)}
                    />
                  </div>
                  <div className="w-1/2 text-right">
                    {avatarPreview && (
                      <img
                        className="w-[80px] rounded-md"
                        src={avatarPreview}
                        alt="Avatar Preview"
                      />
                    )}
                  </div>
                </div>
              </div>

              <div className="md:w-2/3">
                <label htmlFor="coverImage" className="text-base font-medium">
                  Cover Image
                </label>
                <div className="flex items-center space-x-10 h-[50px]">
                  <div className="mt-2 w-1/2">
                    <input
                      className="w-[200px] h-[25px]"
                      type="file"
                      id="coverImage"
                      accept="image/*"
                      onChange={(e) => handleImageChange(e, setCoverPreview)}
                    />
                  </div>
                  <div className="w-1/2 text-right">
                    {coverPreview && (
                      <img
                        className="w-[80px] rounded-md"
                        src={coverPreview}
                        alt="Cover Preview"
                      />
                    )}
                  </div>
                </div>
              </div>

              <div className="md:w-2/3">
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="text-base font-medium">
                    Password*
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    className="signUp-signIn-input-field"
                    type="password"
                    placeholder="Password"
                    id="password"
                  ></input>
                </div>
              </div>

              <div className="md:w-2/3">
                <button type="button" className="signUp-signIn-button">
                  Create Account
                </button>
              </div>
            </div>
          </form>

          <p className="mt-2 text-center text-base mb-8">
            Already have an account?{" "}
            <Link to="/login" className="font-medium underline">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default RegisterScreeen;
