import React, { useContext } from 'react';
import { Card, Button } from 'react-bootstrap';
import { CartContext } from './CartContext';

const ProductCard = ({ title, price, imageUrl }) => {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart({ title, price, imageUrl, quantity: 1 });
  };

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imageUrl} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>Price: ${price}</Card.Text>
        <Button variant="primary" onClick={handleAddToCart}>
          Add to Cart
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
