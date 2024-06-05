import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { USER_URL } from "../../constants";

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (userCredentials) => {
    const res = await axios.post(`${USER_URL}/login`, userCredentials);
    const data = res.data.data;
    // console.log(data); //gets full user data
    localStorage.setItem("user", JSON.stringify(data)); //saving res to redux state
    return data;
  }
);

export const logoutUser = createAsyncThunk(
  "user/logoutUser",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.post(`${USER_URL}/logout`);
      return res.data;
    } catch (error) {
      console.log(error.name, error.message);
      return rejectWithValue(error.res?.data?.message || error.message);
    }
  }
);

export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (userData) => {
    try {
      const res = await axios.post(`${USER_URL}/register`, userData, {
        headers: {
          "Content-Type": "multipart/form-data", // Tell the server we're sending files
        },
      });
      const data = res.data.data;
      localStorage.setItem("user", JSON.stringify(data));
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);
