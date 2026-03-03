import InicioLayer1 from "../Components/Inicio/InicioLayer1.jsx";
import InicioLayer2 from "../Components/Inicio/InicioLayer2.jsx";
import InicioLayer3 from "../Components/Inicio/InicioLayer3.jsx";
import BarraNav from "../Components/BarraNav.jsx";

function Inicio() {
  return (
    <div>
      <BarraNav/>
      <InicioLayer1/>
      <InicioLayer2/>
      <InicioLayer3/>
    </div>
  );
}

export default Inicio;