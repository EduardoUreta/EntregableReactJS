import { useContext, useRef, useState } from "react";
import { CartContext } from "../context/CartContext";

import { collection, addDoc, updateDoc, doc, getDoc, writeBatch, where, query, documentId, getDocs} from "firebase/firestore";
import { db } from "../firebase/config";

import { Link, Navigate } from "react-router-dom"; 

import { Formik, Form, Field, ErrorMessage } from "formik";

import * as Yup from "yup";

const schema = Yup.object().shape({
    nombre: Yup.string()
        .min(3, "El nombre es demasiado corto")
        .max(25,"El nombre es demasiado largo")
        .required("Este campo es obligatorio"),
    direccion: Yup.string()
        .min(3, "El nombre es demasiado corto")
        .max(25,"El nombre es demasiado largo")
        .required("Este campo es obligatorio"),
    email: Yup.string()
        .email("El email es invalido")
        .required("Este campo es obligatorio"),
        // escribir 2 veces el correo
        // Validar que sean los mismos
})

export const Checkout = () => {

    // const [nombre, setNombre] = useState('')
    // const [direccion, setDireccion] = useState('')
    // const [email, setEmail] = useState('')

    // const handleNombre = (e) => {
    //     setNombre(e.target.value);
    // }
    // const handleDireccion = (e) => {
    //     setDireccion(e.target.value);
    // }
    // const handleEmail = (e) => {
    //     setEmail(e.target.value);
    // }
    const { cart, totalCompra, vaciarCarrito } = useContext(CartContext)

    const [ loading, setLoading ] = useState(false) 

    const [orderId, setOrderId] = useState(null)

    const handleSubmit = async (values) => {

        const orden = {
            cliente: values,
            items: cart.map(item => ({id: item.id, nombre: item.nombre, precio: item.precio, cantidad: item.cantidad})),
            total: totalCompra(),
            fyh: new Date()
        }

        console.log(orden);

        // Enviar a FireBase

        const batch = writeBatch(db)
        const ordersRef = collection(db, "orders")
        const productosRef = collection(db, "productos")
        const q = query(productosRef, where(documentId(), "in", cart.map(item => item.id)))

        const productos = await getDocs(q)
        const outOfStock = []

        productos.docs.forEach((doc) => {
            const item = cart.find(prod => prod.id === doc.id)
            const stock = doc.data().stock

            if (stock >= item.cantidad){
                batch.update(doc.ref, {
                    stock: stock - item.cantidad
                })
            } else {
                outOfStock.push(item)
            }
        })

        if (outOfStock.length === 0){
            await batch.commit()
            const doc = await addDoc(ordersRef, orden)

            vaciarCarrito()
            setOrderId(doc.id)
        } else {
            alert("Hay items sin stock")
        }
    setLoading(false)



            // orden.items.forEach(item => {

            //     const docRef = doc(db, "productos", item.id)

            //     getDoc(docRef)
            //         .then((doc)=>{
            //             const stock = doc.data().stock

            //             if (stock >= item.cantidad){
            //                 updateDoc(docRef, {
            //                     stock: stock - item.cantidad
            //             })
            //             } else{
            //                 alert(`No hay stock de ${item.nombre}`)
            //             }
            //     })
            // })

        // const ordersRef = collection(db, "orders")

        // addDoc(ordersRef, orden)
        //     .then((doc) => {
        //         console.log(doc.id);
        //         vaciarCarrito();
        //         setOrderId(doc.id)
        //     })
    }

    if (orderId){
        return(
            <div className="container my-5">
                <h2 className="text-center text-success text-4x1">Tu compra se registró exitosamente</h2>
                <hr/>
                <h3 className="text-center">Tu numero de orden es: <strong>{orderId}</strong></h3>

                <Link to="/">Volver</Link>
            </div>
        )
    }

    if (cart.length === 0){
        return <Navigate to="/"/>
    }


    return (
        <div className="container">
            <h2>Checkout</h2>
            <hr/>

            <Formik
                initialValues={{
                    nombre: '',
                    direccion: '',
                    email: ''
                }}
                onSubmit={handleSubmit}
                validationSchema={schema}
            >
                {() =>(
                    <Form>
                        <Field className="form-control my-2" type="text" name="nombre" placeholder="Ingresa tu nombre..."/>
                        <ErrorMessage name="nombre" component="p"/>
                        <Field className="form-control my-2" type="text" name="direccion" placeholder="Ingresa tu dirección..."/>
                        <ErrorMessage name="direccion" component="p"/>
                        <Field className="form-control my-2" type="email" name="email" placeholder="Ingresa tu email..."/>
                        <ErrorMessage name="email" component="p"/>
                        <button className="btn btn-success" disabled={loading}>Enviar</button>
                    </Form>
                )}

            </Formik>
            
        </div>
    )
}