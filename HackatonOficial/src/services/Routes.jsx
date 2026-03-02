import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../Pages/Login";
import Registro from "../Pages/Registro"; // Importar el nuevo componente

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