
import { BotonBienvenida } from "./BotonBienvenida"
export const ItemListContainer = ({saludo}) => {

    return (
        <div className="catalogo-container">
            <h2 className="saludo">{saludo}</h2>
            <p></p>

            <BotonBienvenida>
                Aprétame
            </BotonBienvenida>
            
        </div>
    )}