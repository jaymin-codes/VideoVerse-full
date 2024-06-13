import { createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";
import axios from "axios";
import { USER_URL } from "../../constants";

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (userCredentials, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${USER_URL}/login`, userCredentials);
      const userData = response.data.data;
      console.log(response.data.message);
      localStorage.setItem("user", JSON.stringify(userData));
      return userData; //payload of fulfillled action
    } catch (error) {
      const errorMessage = {
        message: error.message,
        statusText: error.response.statusText,
        data: error.response.data
      }; // payload of rejected action
      console.log(errorMessage);
      return rejectWithValue(errorMessage);
    }
  }
);

export const logoutUser = createAsyncThunk(
  "user/logoutUser",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.post(`${USER_URL}/logout`);
      return res.data;
    } catch (error) {
      return thunkAPI;
    }
  }
);

export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (userData, { rejectWithValue }) => {
    try {
      const res = await axios.post(`${USER_URL}/register`, userData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      const data = res.data.data;
      localStorage.setItem("user", JSON.stringify(data));
      return data;
    } catch (error) {
      console.error("Error registering user:", error.message);
      return rejectWithValue(error.res?.data?.message || error.message);
    }
  }
);
