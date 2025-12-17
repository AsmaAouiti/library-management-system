
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import DashboardUser from "./components/DashboardUser";
import DashboardAdmin from "./components/DashboardAdmin";
 
import "./App.css";
 
function App() {
  return (
    <Router>

      <div className="app-container">

        <Header />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/dashboard-user" element={<DashboardUser />} />
            <Route path="/dashboard-admin" element={<DashboardAdmin />} />
          </Routes>
        </main>
        
        <Footer />
      </div>

    </Router>
  );
}

export default App;


