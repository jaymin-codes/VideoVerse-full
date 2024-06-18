import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { USER_URL } from "../../constants";


export const updateUserInfo = createAsyncThunk(
  "user/updateUser",
  async (updatedData, { rejectWithValue }) => {
    try {
      const response = await axios.patch(`${USER_URL}/update-user`, updatedData);
      const updatedUserData = response.data.data;
      console.log(response.data.message);
      return updatedUserData;
    } catch (error) {
      const errorMessage = {
        message: error.message,
        statusText: error.response.statusText,
        data: error.response.data,
      };
      console.log("Update user error", errorMessage);
      return rejectWithValue(errorMessage);
    }
  }
);