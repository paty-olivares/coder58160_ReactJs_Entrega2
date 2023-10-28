import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getProductos, getProductosbyCategoria } from "../../asyncMocks"
import ItemList from "../ItemList/ItemList"


const ItemListContainer = ({greetings}) => {
    const [productos, setProductos] = useState([])
    const { categoriaId } = useParams()
    
    console.log('Categoria ' + categoriaId)

    useEffect(() => {

      const asyncFunc = categoriaId ? getProductosbyCategoria : getProductos
      
      asyncFunc(categoriaId)
        .then(response => {
            setProductos(response)
        })
        .catch(error => {
            console.error(error)
        })
    },[categoriaId]
    )


        return (
            <div>
              <h1>{!categoriaId ? greetings : (greetings + categoriaId)}</h1>
                <ItemList productos={productos}/> 
            </div>
        )
}
export default ItemListContainer;