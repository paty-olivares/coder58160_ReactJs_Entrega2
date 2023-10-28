import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { getProductosbyId } from "../../asyncMocks"
import { useParams } from "react-router-dom"


const ItemDetailContainer = () => {
const [producto, setProducto] = useState(null)
const  {itemId} = useParams()

useEffect(() => {
    getProductosbyId(itemId)
    .then(response => { 
        setProducto(response)
    })
    .catch(error => {
        console.error(error)
    })
},[itemId])
    return (
        <div>
            <h1> Detalle de Producto </h1>
             <ItemDetail {...producto}/>
        </div>
    )
}
export default ItemDetailContainer;