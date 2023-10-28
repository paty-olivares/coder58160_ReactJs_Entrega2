import ItemCount from "../ItemCount/ItemCount"
import Card from 'react-bootstrap/Card';
const ItemDetail =({nombre, img, descripcion, precio, stock}) => {
    return(

    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={img} />
    <Card.Body>
      <Card.Title>{nombre}</Card.Title>
      <Card.Text>
      {descripcion}
      </Card.Text>
      <Card.Text>
       Precio: MXN$ {precio}
      </Card.Text>
      <Card.Text>
       Stock: {stock}
      </Card.Text>
      <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log('item agregado: ' + quantity)} />
    </Card.Body>
  </Card>



   )
}
export default ItemDetail