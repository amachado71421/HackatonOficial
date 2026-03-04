import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inicio from "../Pages/Inicio";
import Login from "../Pages/Login/Login";
import Registro from "../Pages/Login/Registro";
import ZonasFrancas from "../Components/ZonasFrancas/ZonasFrancas.jsx";
import EmpresaLima from "../Components/ZonasFrancas/EmpresasLima/EmpresaLima";

// Perfiles
import PAdministrativo from "../Components/Perfiles/PAdministrativo";
import PEmpleados from "../Components/Perfiles/PEmpleados";
import PEmpresas from "../Components/Perfiles/PEmpresas";
import PInstitution from "../Components/Perfiles/PInstitution";
import PPasantes from "../Components/Perfiles/PPasantes";

// Registro-Division
import RegistroEmpresas from "../Components/Registro-Division/Empresas";
import RegistroPasantes from "../Components/Registro-Division/Pasantes";
import RegistroEmpleados from "../Components/Registro-Division/Empleados";
import RegistroInstitucion from "../Components/Registro-Division/Institution";
import RegistroAdministrativo from "../Components/Registro-Division/Administrativo";

function Routing() {
    return (
        <Router>
            <Routes>
                {/* Rutas públicas */}
                <Route path="/" element={<Inicio/>} />
                <Route path="/Login" element={<Login/>} />
                <Route path="/registro" element={<Registro/>} />
                <Route path="/empresas" element={<PEmpresas/>} />
                
                {/* Zonas Francas */}
                <Route path="/zonas-francas" element={<ZonasFrancas/>} />
                <Route path="/zonas-EmpresaLima" element={<EmpresaLima/>} />
                
                {/* Rutas de Perfiles */}
                <Route path="/perfil/administrativo" element={<PAdministrativo/>} />
                <Route path="/perfil/empleados" element={<PEmpleados/>} />
                <Route path="/perfil/empresas" element={<PEmpresas/>} />
                <Route path="/perfil/institucion" element={<PInstitution/>} />
                <Route path="/perfil/pasantes" element={<PPasantes/>} />
                
                {/* Rutas de Registro */}
                <Route path="/registro/empresas" element={<RegistroEmpresas/>} />
                <Route path="/registro/pasantes" element={<RegistroPasantes/>} />
                <Route path="/registro/empleados" element={<RegistroEmpleados/>} />
                <Route path="/registro/institucion" element={<RegistroInstitucion/>} />
                <Route path="/registro/administrativo" element={<RegistroAdministrativo/>} />
            </Routes>
        </Router>
    );
}

export default Routing;
