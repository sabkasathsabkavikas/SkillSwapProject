import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Search from "./pages/Search";
import Profile from "./pages/Profile";
import UserProfile from "./pages/UserProfile";
import Swaps from "./pages/Swaps";
import AdminDashboard from "./pages/AdminDashboard";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/login" element={<Login />} />
        <Route path="/search" element={<Search />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/user/:name" element={<UserProfile />} />
        <Route path="/swaps" element={<Swaps />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </>
  );
}

export default App;
