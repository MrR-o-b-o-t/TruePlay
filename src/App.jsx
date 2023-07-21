import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
// Pages
import ProfilePage from "./Pages/Profile/ProfilePage.jsx";
import LoginPage from "./Pages/Login/LoginPage.jsx";
import Register from "./Pages/Register/Register.jsx";
import ProtectedRoute from "./Components/ProtectedRoutes/ProtectedRoutes.jsx";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn" === "true")
  );

  useEffect(() => {
    localStorage.setItem("isLoggedIn", isLoggedIn);
  }, [isLoggedIn]);

  return (
    <>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <ProfilePage />
              </ProtectedRoute>
            }
          />
          <Route
            path="login"
            element={<LoginPage setIsLoggedIn={setIsLoggedIn} />}
          />
          <Route path="register" element={<Register />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
