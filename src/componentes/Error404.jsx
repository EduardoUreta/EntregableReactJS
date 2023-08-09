import { Link } from "react-router-dom";
export const Error404 = () => {
    return (
        <div>
            <h1 className="text-center">Error 404 - Página no encontrada <br></br><Link to ="/">Volver atras</Link></h1>
            <img className="img-fluid w-25 m-auto w" src="https://img.freepik.com/vector-premium/404-error-no-encontrado-gato-sentado-sosteniendo-enchufe-tomacorriente_626340-65.jpg?w=2000"></img>
        </div>
    )
}