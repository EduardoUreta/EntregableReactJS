import { Loader } from "./Loader"
import { ItemList } from "./ItemList"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { NavLink } from "react-router-dom"

import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../firebase/config'

export const Productos = () => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    
    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)

        // 1.- armar la referencia (sync)
        const productosRef = collection(db, "productos")
        const q = categoryId
                    ? query(productosRef, where('category', "==", categoryId) )
                    : productosRef
        // 2.- llamar a esa ref (async)
        getDocs(q)
            .then((resp) => {
                const docs = resp.docs.map((doc) => {
                    return {
                        id: doc.id,
                        ...doc.data()
                    }
                })
                
                setProductos(docs)
            })
            .catch(e => console.log(e))
            .finally(() => setLoading(false))

    }, [categoryId])

    return (
        <div>
          {loading ? (
            <Loader />
          ) : (
            <div className="container">
              <div className="row">
                <div className="col">
                  <br />
                  <h1 className="text-center text-uppercase">
                    <b>Filtra por categorias:</b>
                  </h1>
                </div>
              </div>
              <div className="row bg-black text-yellow-500 text-center">
                <div className="col">
                  <NavLink to="/productos/bebidas" className="mb-2 d-block">BEBIDAS</NavLink>
                </div>
                <div className="col">
                  <NavLink to="/productos/alcohol" className="mb-2 d-block">ALCOHOL</NavLink>
                </div>
                <div className="col">
                  <NavLink to="/productos/carniceria" className="mb-2 d-block">CARNES</NavLink>
                </div>
                <div className="col">
                  <NavLink to="/productos/verduleria" className="mb-2 d-block">VERDURAS</NavLink>
                </div>
                <div className="col">
                  <NavLink to="/productos/snack" className="mb-2 d-block">SNACKS</NavLink>
                </div>
                <div className="col">
                  <NavLink to="/productos/lacteos" className="mb-2 d-block">LACTEOS</NavLink>
                </div>
              </div>
              <ItemList productos={productos} />
              <br></br>
            </div>
          )}
        </div>
      )
    }