import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
// Pages
import ProfilePage from "./Pages/Profile/ProfilePage.jsx";
import LoginPage from "./Pages/Login/LoginPage.jsx";
import Register from "./Pages/Register/Register.jsx";
import ProtectedRoute from "./Components/ProtectedRoutes/ProtectedRoutes.jsx";

function App() {
  const storedUserData = localStorage.getItem("user");
  const userData = JSON.parse(storedUserData);

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute userData={userData}>
              <ProfilePage />
            </ProtectedRoute>
          }
        />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
