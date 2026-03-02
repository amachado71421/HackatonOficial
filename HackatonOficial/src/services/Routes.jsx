import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inicio from "../Pages/Inicio";
import Login from "../Pages/Login/Login";
import Registro from "../Pages/Login/Registro"; // Importar el nuevo componente
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "../Pages/Login/Login";
import Empleados from "../Pages/Registro-Division/Empleados";
import Administrativo from "../Pages/Registro-Division/Administrativo";
import Empresas from "../Pages/Registro-Division/Empresas";
import Pasantes from "../Pages/Registro-Division/Pasantes";
import Institution from "../Pages/Registro-Division/Institution";


function Routing() {
    return (
        <Router>
            <Routes>
                <Route path="/Login" element={<Login/>} />
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