import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from '../slices/actions/auth.action';
import { Link } from 'react-router-dom';



function HomeScreen() {

  const dispatch= useDispatch()

  const user = useSelector((state) => state.user);
  

  const handleSubmit = () => {
    dispatch(logoutUser())
    // .then((res) => {
    //   console.log(res.payload);
    // })
  }

  return (
    <div>
      <button onClick={handleSubmit}><Link to="/login">Logout</Link></button>
    </div>
  )
}

export default HomeScreen