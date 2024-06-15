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
        data: error.response.data,
      }; // payload of rejected action
      console.log("Login Error", errorMessage);
      return rejectWithValue(errorMessage);
    }
  }
);

export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${USER_URL}/register`, userData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      const registeredUserData = response.data.data;
      console.log(response.data.message);
      // localStorage.setItem("user", JSON.stringify(registeredUserData));
      return registeredUserData;
    } catch (error) {
      const errorMessage = {
        message: error.message,
        statusText: error.response.statusText,
        data: error.response.data,
        status: error.response.status
      }; // payload of rejected action
      console.log("Registration Error", errorMessage);
      return rejectWithValue(errorMessage);
    }
  }
);

export const logoutUser = createAsyncThunk(
  "user/logoutUser",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${USER_URL}/logout`);
      console.log(response.data.message);
      return response.data;
    } catch (error) {
      const errorMessage = {
        message: error.message,
        statusText: error.response.statusText,
        data: error.response.data,
      };
      console.log("Logout Error", errorMessage);
      return rejectWithValue(errorMessage);
    }
  }
);

