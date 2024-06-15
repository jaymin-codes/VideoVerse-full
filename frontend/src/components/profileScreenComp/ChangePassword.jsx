import React from 'react'
import { useSelector } from "react-redux";


function ChangePassword() {
  const {user} = useSelector((state) => state.user);

  return (
    <div>ChangePassword</div>
  )
}

export default ChangePassword