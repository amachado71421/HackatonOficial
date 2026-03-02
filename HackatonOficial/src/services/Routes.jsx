import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inicio from "../Pages/Inicio";
import Registro from "../Pages/Login/Registro"; // Importar el nuevo componente
import Login from "../Pages/Registro-Division/Login.jsx";
import Empleados from "../Pages/Registro-Division/Empleados";
import Administrativo from "../Pages/Registro-Division/Administrativo";
import Empresas from "../Pages/Registro-Division/Empresas";
import Pasantes from "../Pages/Registro-Division/Pasantes";
import Institution from "../Pages/Registro-Division/Institution";


function Routing() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Inicio/>} />
                <Route path="/Login" element={<Login/>} />
                <Route path="/registro" element={<Registro/>} /> {/* Añadir la nueva ruta */}
                <Route path="/Empleados" element={<Empleados/>} />
                <Route path="/Administrativo" element={<Administrativo/>} />
                <Route path="/Empresas" element={<Empresas/>} />
                <Route path="/Pasantes" element={<Pasantes/>} />
                <Route path="/Institution" element={<Institution/>} />
            </Routes>
        </Router>
    );
}

export default Routing;