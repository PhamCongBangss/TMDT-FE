import Login from "./pages/Login";
import { Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Authen from "./pages/Authen";
import Test from "./pages/Test";
import ForgotPassword from "./pages/ForgotPassword";

function App() {
  return (
    <Routes>
      <Route path="/test" element={<Test />} />
      <Route path="/" element={<Authen />}>
        <Route index path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Route>
    </Routes>
  );
}

export default App;
