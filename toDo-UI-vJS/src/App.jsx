// App.jsx
import "./App.css";
import { TodoPage } from "./components/Todo/TodoPage";
import { HomePage } from "./components/Home/HomePage";
import { RegistrationPage } from "./components/User/RegistrationPage";
import { LoginPage } from "./components/User/LoginPage";
import { NavBar } from "./components/NavBar/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/todo" element={<TodoPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
