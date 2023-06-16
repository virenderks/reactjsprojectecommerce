import React, { useContext } from 'react';
import { Card, Button } from 'react-bootstrap';
import { CartContext } from './CartContext';

const Cart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  const handleRemoveFromCart = (product) => {
    removeFromCart(product);
  };

  return (
    <div>
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map((product, index) => (
          <Card key={index} style={{ marginBottom: '1rem' }}>
            <Card.Img variant="top" src={product.imageUrl} />
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>Price: ${product.price}</Card.Text>
              <Button variant="danger" onClick={() => handleRemoveFromCart(product)}>
                Remove
              </Button>
            </Card.Body>
          </Card>
        ))
      )}
    </div>
  );
};

export default Cart;
