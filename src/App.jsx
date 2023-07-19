import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
// Pages
import ProfilePage from "./Pages/Profile/ProfilePage.jsx";
import LoginPage from "./Pages/Login/LoginPage.jsx";
import Register from "./Pages/Register/Register.jsx";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ProfilePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
