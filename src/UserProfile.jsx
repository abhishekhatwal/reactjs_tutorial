import React from 'react'
import {  useParams } from 'react-router-dom';


const UserProfile = () => {
    const params = useParams();
    const userId = params.id;
  return (
    <div>
       <h2>User Profile</h2>
      <p>Showing profile for user with ID: {userId}</p>
    </div>
  )
}

export default UserProfile;
