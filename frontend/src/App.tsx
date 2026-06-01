import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Courses from "./Courses";
import Course from "./Course";
import Profile from "./Profile";
import Login from "./Login";
import Register from "./Register";
import Tes from "./Tes";
import Welcome from "./Welcome";
import Subscription from "./Subscription";
import Professional from "./Professional";
import Services from "./Services";
import Leaderboard from "./Leaderboard";
import Achievements from "./Achievements";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/course/:id" element={<Course />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/tes" element={<Tes />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/subscription" element={<Subscription/>} />
        <Route path="/professional" element={<Professional/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/leaderboard" element={<Leaderboard/>} />
        <Route path="/achievements" element={<Achievements/>} />
      </Routes>
    </BrowserRouter>
  );
}
