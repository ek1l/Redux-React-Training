import { useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../store/CartSlice';
import { getProducts } from '../store/productSlice';
const Product = () => {
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts());
    // api
    // fetch('https://fakestoreapi.com/products')
    //   .then((response) => response.json())
    //   .then((result) => setproducts(result));
  }, [dispatch]);
  const addToCart = (product) => {
    // dispatch action
    dispatch(add(product));
  };
  console.log(status);
  if (status === 'Loading') {
    return <h1>Loading...</h1>;
  }
  const cards = products.map((product) => (
    <div key={product.id} className="col-md-3" style={{ marginBottom: '10px' }}>
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
          <Button variant="primary" onClick={() => addToCart(product)}>
            Add to cart
          </Button>
        </Card.Footer>
      </Card>
    </div>
  ));
  return (
    <div>
      <h1>Product Dashboard</h1>
      <div className="row">{cards}</div>
    </div>
  );
};

export default Product;
