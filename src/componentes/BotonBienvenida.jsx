import { useState } from "react";

export const BotonBienvenida = ({children}) => {

  const [saludo, setSaludo] = useState(true)
  const saludar = () => {
    setSaludo(saludo === true ? false : true)
  };

    return (
        <div>
            <button className="boton" onClick={saludar}>
                {children}
                <p></p>
                <p className="text-warning">{saludo ? "¡Las mejores ofertas en Alcohol!":"¡Los precios más bajos!"}</p>
            </button>
        </div>
    )
}