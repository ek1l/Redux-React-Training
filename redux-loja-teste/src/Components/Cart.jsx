import { useSelector, useDispatch } from 'react-redux';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { remove } from '../store/CartSlice';
const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart);

  const cards = products.map((product) => (
    <div
      key={product.id}
      className="col-md-12"
      style={{ marginBottom: '10px' }}
    >
      <Card style={{ width: '18rem' }} className="h-100">
        <div className="text-center">
          <Card.Img
            variant="top"
            src={product.image}
            style={{ width: '100px', height: '130px' }}
          />
        </div>
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>R$ {product.price}</Card.Text>
        </Card.Body>
        <Card.Footer style={{ background: 'white' }}>
          <Button
            variant="primary"
            style={{ background: 'red' }}
            onClick={() => dispatch(remove(product))}
          >
            Remove Item
          </Button>
        </Card.Footer>
      </Card>
    </div>
  ));
  return (
    <>
      <div className="row"> {cards}</div>
    </>
  );
};

export default Cart;
