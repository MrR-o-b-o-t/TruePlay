// App.jsx
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import ProfilePage from "./Pages/Profile/ProfilePage.jsx";
import LoginPage from "./Pages/Login/LoginPage.jsx";
import Register from "./Pages/Register/Register.jsx";
import ProtectedRoute from "./Components/ProtectedRoutes/ProtectedRoutes.jsx";
import Account from "./Pages/Account/Account";
import Navigation from "./Components/Nav/Navigation";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true" ? true : false
  );

  return (
    <>
      <Navigation isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
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
            path="/account"
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <Account />
              </ProtectedRoute>
            }
          />
          <Route
            path="/login"
            element={<LoginPage setIsLoggedIn={setIsLoggedIn} />}
          />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
