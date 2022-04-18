import * as React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import './App.css';




export default function App() {
  return (
    
    <div className="container">

      <nav className="nav">
        <ul>
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item">
          <Link to="/Login">Login</Link>
          </li>
          <li className="nav-item">
            <Link to="/SignUp">SignUp</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="sign-up" element={<SignUp />} />
        
      </Routes>
    </div>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function Login() {
  return (
    <div>
      <h2>Login</h2>
    </div>
  );
}

function SignUp() {
  return (
    <div>
      <h2>SignUp</h2>
    </div>
  );
}