import "../component/Styles/style.css";
import Layout from "./Layout";
import Login from "./pages/Login";
import Quiz from "./pages/Quiz";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Result from "./pages/Result";
import { AuthProvider } from "../context/AuthContext";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="signup" element={<Signup />} />
            <Route exact path="login" element={<Login />} />
            <Route exact path="quiz" element={<Quiz />} />
            <Route exact path="result" element={<Result />} />
          </Routes>
        </Layout>
      </AuthProvider>
    </Router>
  );
}

export default App;
