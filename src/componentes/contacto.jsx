
////// Eventos /////

import { useEffect } from "react"

export const Contacto = () => {

    const [a, setA] = useState(false)
    console.log(a);

    useEffect(() => {
        window.addEventListener("click", () => {
            console.log("Click");
            setA(true)
    }, [])
    })
    // Para que no se acumule en cada renderizado..
    // Uso el use Effect
    return(
        <div className="container my-5">
            <h2>Contacto</h2>
        </div>
    )
}