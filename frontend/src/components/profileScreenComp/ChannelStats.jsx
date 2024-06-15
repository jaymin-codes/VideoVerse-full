import React from 'react'
import { useSelector } from "react-redux";


function ChannelStats() {
  const {user} = useSelector((state) => state.user);

  return (
    <div>ChannelStats</div>
  )
}

export default ChannelStats