import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import Login from "./pages/auth/Login";
import Home from "./pages/home/Home";
import { LoginModel } from "./pages/auth/models/login.model";
import { AuthService } from "./pages/auth/services/auth-service";
import Register from "./pages/auth/Register";
import BoardList from "./pages/boards/BoardList";
import Layout1 from "./pages/layouts/Layout1";

function App() {
  const [islogedIn, setIslogedIn] = useState(false);
  const navigate = useNavigate();
  function login(loginModel: LoginModel) {
    AuthService.login(loginModel)
      .then((res) => {
        console.error(res);
        setIslogedIn(true);
        localStorage.setItem("token", res.data.token);
        navigate("/board");
      })
      .catch((resss) => {
        console.error("hata");
      });
  }
  function logOut() {
    setIslogedIn(false);
    localStorage.removeItem("token");
    navigate("/");
  }
  useEffect(() => {
    var login = localStorage.getItem("token");
    if (login) {
      setIslogedIn(true);
    }
    return () => {};
  }, []);

  return (
    <>
      {!islogedIn ? (
        <Routes>
          <Route path="/" element={<Login login={login} />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      ) : (
        <Layout1 />
      )}
    </>
  );
}

export default App;
