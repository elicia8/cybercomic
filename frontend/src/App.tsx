import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Courses from "./Courses";
import Course from "./Course";
import Profile from "./Profile";
export default function ButtonDemo() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/course/:id" element={<Course />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}
