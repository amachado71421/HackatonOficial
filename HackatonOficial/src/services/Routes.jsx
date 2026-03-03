import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inicio from "../Pages/Inicio";
import Login from "../Pages/Login/Login";
import Registro from "../Pages/Login/Registro"; // Importar el nuevo componente
import ZonasFrancas from "../Components/ZonasFrancas/ZonasFrancas.jsx";

function Routing() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Inicio/>} />
                <Route path="/Login" element={<Login/>} />
                <Route path="/registro" element={<Registro/>} /> {/* Añadir la nueva ruta */}
                <Route path="/zonas-francas" element={<ZonasFrancas/>} />
            </Routes>
        </Router>
    );
}

export default Routing;