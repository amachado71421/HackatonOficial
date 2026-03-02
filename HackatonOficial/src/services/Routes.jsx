import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../Pages/Login/Login";
import Registro from "../Pages/Login/Registro"; // Importar el nuevo componente

function Routing() {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login/>} />
                <Route path="/registro" element={<Registro/>} /> {/* Añadir la nueva ruta */}
            </Routes>
        </Router>
    );
}

export default Routing;