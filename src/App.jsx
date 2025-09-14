import Login from "./pages/Login";
import Test from "./pages/Test";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/test" element={<Test />} />
    </Routes>
  );
}

export default App;
