import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch, useParams } from 'react-router-dom';


const UserList = () => {
  return (
    <div>
           <h2>User List</h2>
      <ul>
        <li>
          <Link to="/users/1">User 1</Link>
        </li>
        <li>
          <Link to="/users/2">User 2</Link>
        </li>
        <li>
          <Link to="/users/3">User 3</Link>
        </li>
      </ul>
    </div>
  )
}

export default UserList;
