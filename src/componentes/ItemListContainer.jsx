import { BotonBienvenida } from "./BotonBienvenida"
export const ItemListContainer = ({saludo}) => {

    return (
        <div className="catalogo-container">
            <h1>Bienvenido a la mejor botillería</h1>

            <h2 className="saludo">{saludo}</h2>
            <p></p>

            <BotonBienvenida>
                Aprétame
            </BotonBienvenida>
        </div>
    )
}