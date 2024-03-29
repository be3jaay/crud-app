import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/auth/login/login";
import Register from "./components/auth/register/register";
import Home from "./components/home/home";
import { AuthProvider } from "./contexts/authContext";
import "./App.css";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
