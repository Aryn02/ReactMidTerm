import React from "react";
import { Link } from "react-router-dom";
// import logo from './logo_home.png'

const Top = () => {
  return (
    <nav >
      <ul>
        <li>
          <Link to="/posts">Posts</Link>
        </li>
        <li>
          <Link to="/posts">Posts</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Top;


