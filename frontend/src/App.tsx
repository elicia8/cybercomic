import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Course from "./Course";
export default function ButtonDemo() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Course />} />
      </Routes>
    </BrowserRouter>
  );
}
