import React from 'react'
import { Outlet, useParams } from 'react-router-dom'

const UserDetails = () => {
    const {userId} = useParams()
  return (
      <>
    <div>UserDetails {userId}</div>
    <div>User1</div>
    <div>User2</div>
    <div>User3</div>

    <Outlet />

    </>
  )
}

export default UserDetails