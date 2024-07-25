import "./App.css";
import { TodoPage } from "./components/Todo/TodoPage";
import { HomePage } from "./components/Home/HomePage";
import { NavBar } from "./components/NavBar/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    // <AuthProvider>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/todo" element={<TodoPage />} />
      </Routes>
    </BrowserRouter>
    // </AuthProvider>
  );
}

export default App;
