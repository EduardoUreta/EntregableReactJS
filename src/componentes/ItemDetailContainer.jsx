import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ItemDetail } from "./ItemDetail"
import { Loader } from "./Loader"
import { NotFound } from "./NotFound"

import { doc, getDoc } from "firebase/firestore"
import { db } from "../firebase/config"

export const ItemDetailContainer = () => {
    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true)
    const [itemExists, setItemExists] = useState(true)

    const {itemId} = useParams()

    useEffect(() => {
        setLoading(true)
        setItemExists(true)

        // 1- Armar la Ref
        const itemRef = doc(db, "productos", itemId)
        // 2- Llamar la Ref
        getDoc(itemRef)
            .then((doc) => {
                if (doc.exists()) {
                setItem({
                    id: doc.id,
                    ...doc.data()
                });
                } else {
                setItemExists(false); 
                }
            })
            .catch(e => console.log(e))
            .finally(() => setLoading(false))
    }, [itemId])

    return (
        
        <div>
            {
            loading 
            ? (<Loader/>
                ) : itemExists ? (
                    <ItemDetail item={item}/>
                ) : (
                    <NotFound/>
                )
            }
        </div>
    )
}