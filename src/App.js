import Login from "./components/login"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./components/home"
import Dashboard from "./components/dashboard";
import Register from "./components/register";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home title="HOME PAGE" />} />
        <Route path="/dashboard" element={<Dashboard title="DASHBOARD" />} />
        <Route path="/login" element={<Login title="LOGIN PAGE" description="MINI ABSENSI APPS" />} />
        <Route path="/register" element={<Register title="REGISTER PAGE" description="MINI ABSENSI APPS" />} />
        <Route path="*" element={<h1>PAGE NOT FOUND</h1>} />
      </Routes>
    </Router>
  );
}

export default App;