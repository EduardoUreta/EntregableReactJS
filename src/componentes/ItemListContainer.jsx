import { useEffect, useState } from "react";
import { BotonBienvenida } from "./BotonBienvenida"

import { pedirDatos } from "../helpers/pedirDatos"
import { useProductos } from "../hooks/useProductos"
import { Link } from "react-router-dom";



// // Promesa recibe función de 2 parametro
//     // La promesa comienza en pendiente
//     // Se resuelve o se rechaza con alguno de los llamados a resolve o reject
//     const promesa = new Promise((resolve, reject) => {
//         // Cuerpo de la promesa
//             // resolve("Promesa resuelta") // Full Filled
//             // reject("Promesa Rechazada") // Rejected
        
//         setTimeout(() => {
//             resolve("Promesa Resuelta")
//         }, 2000)
//     });

//     // La promesa nos ofrece .then(fn)
//     // Se ejecuta cuando la promesa de resuelva
//     promesa
//         .then(() => {
//         console.log("Promesa Resuelta");
//         })
//     // También ofrece el catch
//     // Se ejecuta cuando la promesa sea rechazada
//         .catch(() => {
//         console.log("Promesa Rechazada");
//         });

    /////// Mejor hacerlo así:
    // const pedirDatos = (bool) => {
    //     return new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             if(bool){
    //                 resolve("Promesa Resuelta")
    //             }else{
    //                 reject("Promesa Rechazada")
    //             }
    //         }, 2000)
    //     })
    // }

    // pedirDatos(true)
    //     .then((resolve) => {
    //         console.log(resolve);
    //     })
    //     .catch((reject) => {
    //         console.log(reject);
    //     })

    //////////// Simular carga asincrónica de datos




export const ItemListContainer = ({saludo}) => {

    // const [productos, setProductos] = useState([])
    // //// Con esto genero al inicio solo array vacios
    // // Debe haber coincidencia con lo que espero tener después
    // // Si pongo null, va a explotar

    // /// PAra que no caiga en ciclos infinito, se usa el useEffect
    // useEffect(() => {
    //     pedirDatos(true)
    //     //// Con esto cargo los productos
    //         .then((resolve) => {
    //             setProductos(resolve);
    //         })
    //         .catch((reject) => {
    //             console.log(error);
    //         })
    // }, [])        

    ///////// Abstraigo todo con CUSTOM HOOKS

    const {productos, loading} = useProductos()
    console.log(loading, productos);


    // console.log(params); //Si pongo /productos/verduleria, 
    // me retorna categoryId: Verduleria

    //////////////////// API //////////////
    // useEffect(() => {
    //     // Fetch irá siempre de un useEffect, para que
    //     // se renderice solo al inicio
    //     fetch('https://jsonplaceholder.typicode.com/posts/')
    //         // .then((res) => console.log(res))
    //         // Me genera un objeto de tipo response
    //         // Pero no es la información que necesito
    //         // el status 200 significa que esta OK
    //         .then((res) => res.json())
    //         // Para Parsear la información
    //         .then((data) => console.log(data))
    //         // con data puedo obtener la info
    //         .catch((error) => console.log(error));
    // },[])

    
    const usuarios = [
        {id: 1, nombre: "Edu"},
        {id: 2, nombre: "Pau"},
        {id: 3, nombre: "Matildita"},
    ]
    //// El metodo MAP retorna un nuevo array, a partir de otro
    //  Donde cada elemento de cada array es el retorno de lo que le pase
    // const resultado = usuarios.map((user) => user.nombre )
    // console.log(resultado);

    return (
        <div className="catalogo-container">
            <h1>Bienvenido a la mejor botillería</h1>

            <h2 className="saludo">{saludo}</h2>
            <p></p>

            <BotonBienvenida>
                Aprétame
            </BotonBienvenida>

            {/* RENDERIZAR LOS PRODUCTOS */}
            {/* Hay que buscar la forma para que sea leido por JSX */}
            {/* Los objetos no se transpilan en JSX */}
            {/* Por lo tanto, No sirve poner {productos} */}
            {/* {[42, 61]}
            {["Me","Renderiza","Un","Elemento","Al","Lado","De","Otro"]} */}
            {/* {[<h1>Eduardo</h1>,<h2>Paula</h2>,<h3>Matildita</h3>]} */}

            {/* Con el map, puedo transformarlo en una representación en JSX */}
            {usuarios.map((el) => <li><h1>{el.nombre}</h1></li>)}

            <div className="row">
            {
                loading ? <h2>Cargando....</h2> : 
                // Aqui condiciono y puedo mostrar un cargando

                productos.map((prod) => (
                <div key={prod.id} className="col-3 m-2 justify-content-end ">
                    <h2>{prod.nombre}</h2>
                    <img src={prod.img}></img>
                    <p>{prod.descripcion}</p>
                    <p>Precio: ${prod.precio}</p>
                    <Link to={`/detail/${prod.id}`} className="btn btn-primary">Ver Mas</Link>
                </div>
                )
            )
            }
        </div>
        </div>
    )}