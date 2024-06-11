import Logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { toast, Toaster } from "react-hot-toast";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { registerUser } from "../slices/actions/auth.action";
import RegisterSuccessPopUp from "../components/RegisterSuccessPopUp";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import Loader from "../components/Loader.jsx";

function RegisterScreen() {
  //registration states
  const [registerForm, setRegisterForm] = useState({
    fullName: "",
    email: "",
    userName: "",
    password: "",
    avatar: "",
    coverImage: "",
  });

  //redux
  const { loading, error } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  //for avatar and cover image preview
  const [avatarPreview, setAvatarPreview] = useState(null);
  const [coverPreview, setCoverPreview] = useState(null);
  const [showPass, setShowPass] = useState(false);

  const [isModalVisible, setModalVisible] = useState(false);

  const handleImageChange = (e, setImagePreview) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
      setRegisterForm({
        ...registerForm,
        [e.target.name]: file,
      });
    } else {
      setImagePreview(null);
      setRegisterForm({
        ...registerForm,
        [e.target.name]: "",
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegisterForm({
      ...registerForm,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = new FormData();
    for (const key in registerForm) {
      userData.append(key, registerForm[key]);
    }

    const resultAction = await dispatch(registerUser(userData));

    if (registerUser.fulfilled.match(resultAction)) {
      toast.success("Registration Successfull", { duration: 3000 });
      setModalVisible(true);
    } else if (registerUser.rejected.match(resultAction)) {
      toast.error("Username or email already exists");
      console.error("Error registering user: ", resultAction.error.message);
    }
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

            <form onSubmit={handleSubmit}>
              <div className="md:flex md:flex-col md:items-center space-y-3">
                <div className="md:w-2/3">
                  <label htmlFor="fullName" className="text-base font-medium ">
                    Full Name*
                  </label>
                  <div className="mt-2">
                    <input
                      className="signUp-signIn-input-field"
                      type="text"
                      placeholder="Full Name"
                      id="fullName"
                      name="fullName"
                      value={registerForm.fullName}
                      onChange={handleChange}
                      required
                    />
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
                      name="email"
                      value={registerForm.email}
                      onChange={handleChange}
                      required
                    ></input>
                  </div>
                </div>

                <div className="md:w-2/3">
                  <label htmlFor="userName" className="text-base font-medium ">
                    Username*
                  </label>
                  <div className="mt-2">
                    <input
                      className="signUp-signIn-input-field"
                      type="text"
                      placeholder="Username"
                      id="userName"
                      name="userName"
                      value={registerForm.userName}
                      onChange={handleChange}
                      required
                    ></input>
                  </div>
                </div>

                <div className="md:w-2/3">
                  <label
                    htmlFor="avatarImage"
                    className="text-base font-medium"
                  >
                    Avatar Image*
                  </label>
                  <div className="flex items-center space-x-10 h-[50px]">
                    <div className="mt-2 w-1/2">
                      <input
                        className="w-[200px] h-[25px]"
                        type="file"
                        id="avatarImage"
                        name="avatar"
                        accept="image/*"
                        onChange={(e) => handleImageChange(e, setAvatarPreview)}
                        required
                      />
                    </div>
                    <div className="w-1/2 text-right">
                      {avatarPreview && (
                        <img
                          className="w-[50px] h-[35px] rounded-md"
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
                        name="coverImage"
                        accept="image/*"
                        onChange={(e) => handleImageChange(e, setCoverPreview)}
                      />
                    </div>
                    <div className="w-1/2 text-right">
                      {coverPreview && (
                        <img
                          className="w-[70px] h-[35px] rounded-md"
                          src={coverPreview}
                          alt="Cover Preview"
                        />
                      )}
                    </div>
                  </div>
                </div>

                <div className="relative md:w-2/3">
                  <div className="flex items-center justify-between">
                    <label htmlFor="password" className="text-base font-medium">
                      Password*
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      className="signUp-signIn-input-field"
                      type={showPass ? "text" : "password"}
                      placeholder="Password"
                      id="password"
                      name="password"
                      value={registerForm.password}
                      onChange={handleChange}
                      required
                    ></input>
                    <div
                      className="absolute inset-y-0 right-0 pr-3 mt-[30px] flex items-center cursor-pointer"
                      onClick={toggleShowPass}
                    >
                      {showPass ? <FaRegEye /> : <FaRegEyeSlash />}
                    </div>
                  </div>
                </div>

                <div className="md:w-2/3">
                  <button type="submit" className="signUp-signIn-button">
                    Create Account
                  </button>
                </div>
              </div>
              {error && (
                <div className="mt-4 text-center text-red-500">
                  {"An error occurred. Please try again."}
                </div>
              )}
            </form>

            <p className="mt-2 text-center text-base mb-8">
              Already have an account?{" "}
              <Link to="/login" className="font-medium underline">
                Sign In
              </Link>
            </p>
          </div>
        </div>
      )}
      <RegisterSuccessPopUp
        isVisible={isModalVisible}
        onClose={() => setModalVisible(false)}
      />
    </motion.div>
  );
}

export default RegisterScreen;
