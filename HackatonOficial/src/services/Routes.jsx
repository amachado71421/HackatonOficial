import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inicio from "../Pages/Inicio.jsx";
import Login from "../Pages/Login.jsx";

function Routing() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/Login" element={<Login />} />
            </Routes>
        </Router>
    );
}

export default Routing;