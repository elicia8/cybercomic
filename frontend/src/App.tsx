import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Courses from "./Courses";
import Course from "./Course";
import Profile from "./Profile";
import Instruments from "./Instruments";
import Login from "./Login";
import Register from "./Register";
export default function ButtonDemo() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/course/:id" element={<Course />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/tes" element={<Instruments />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}
