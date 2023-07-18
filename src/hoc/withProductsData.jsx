// // HOC --> es como una High Order Function

// import { useEffect } from "react"
// import { useState } from "react"
// import { pedirDatos } from "../helpers/pedirDatos"

// // Es una función, que recibe una función por parametro
// //  o que puede retornar una función

// // function fn(fn){
// //     return fn2
// // }

// // HOC --> Recibe componente por parametro, retorna 
// // otro componente
// // El CPM retornado envuelve al recibido con funcionalidad

// // function hoc(Componente){
//     // return Componente2}

// export const withProductsData =(Componente) => {
//     // Función a reutilizar:
//     const WithProductsData = () => {
//         const [productos, setProductos] = useState([])
//         const [loading, setLoading] = useState(true)

//         useEffect(() => {
//             setLoading(true)

//             pedirDatos()
//                 .then(respuesta => setProductos(respuesta))
//                 .catch(error => log(error))
//                 .finally(() => {
//                     setLoading(false)
//                 })
//         }, [])

//         return <Componente productos={productos} loading={loading} />
//     }

//     return WithProductsData
// }
