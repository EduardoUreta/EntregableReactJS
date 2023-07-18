import { useEffect, useState } from "react"

// Sirve para reutilizar codigo

export const useFetch = (url, array = []) => {

    const [data, setData] = useState(null)

    useEffect(() => {
        fetch(url)
            .then(resp => resp.json())
            .then(data => setData(data))
            .catch(error => console.log(error))
    }, array)

    return {data}
}