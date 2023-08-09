import { memo } from "react";

export const EjemploMemo = memo(() => {
    // Proceso Pesado que se dispara en cada Render
    // Es mejor memorizarlo
    // Para eso, se envuelve con la funcion Memo
    // Y con esto, ya no se renderiza de nuevo
    for(let i = 0; i < 1000; i++){
        console.log(i);
    }
    return (
        <div>
            Soy un componente memo
        </div>
    )
    // Se puede colocar al final una funcion para determinar
    // Cuando será el proximo render
})