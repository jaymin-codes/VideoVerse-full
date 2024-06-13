import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/reducers/auth.reducer";


export const store = configureStore({
  reducer: {
    user: userReducer // name of slice: name of reducer
  }
});



/*
store -> single source of truth
reducer -> changes made in any store are handled by reducers/functions

useSelector -> select value from store
useDispatch -> send valur from store

configure store -> make reducer -> make actions inside reducer


* STEP 1 -> configure your store
* STEP 2 -> make reducers aka slices(in redux toolkit) folder 
* STEP 3 -> make loginSlice.js(example) in the slices folder
? each slice takes an object
const userSlice = createSlice({
  name: "anything you want",
  initialState: {
    here we define our states for this slice
    loading: false,
    user: null,
    error: null
    these 3 are the states for user login 
  }
})
export default userSlice.reducer

* STEP 4 -> import <Provider> from react-redux and store in app.jsx to access state from anywhere
? provider takes in store prop 

* STEP 5 -> collect details of login form and use useDispatch to give login credentials as payload to loginUser in step 6

dispatch(loginUser(userCredentials)) //this will be given to user state in our slice and also to api

* STEP 6 -> make a function to call API inside userSlice.js using createAsyncThunk
? whenever we have an async task like api calls or interacting with db we use createAsyncThunk
 const loginUser = createAsyncThunk(
  'user/login', string as first argument
  async(userCrendentials) => {  //arrow function is second arg
    const req = 
  }
 )

*/