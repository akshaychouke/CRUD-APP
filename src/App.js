import "./App.css";
import Navbar from "./components/Navbar";
import AllUsers from "./components/AllUsers";
import AddUser from "./components/AddUser";
import MyApp from "./components/MyApp";

import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<MyApp />} />
        <Route path="/all" element={<AllUsers />} />
        <Route path="/add" element={<AddUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
