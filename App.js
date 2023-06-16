import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import ProductCard from './ProductCard';
import { CartContext } from './CartContext';
import Cart from './Cart'; 

const App = () => {
  const [showCart, setShowCart] = useState(false);

  const handleToggleCart = () => {
    setShowCart(!showCart);
  };

  const cartElements = [
    {
      title: 'Colors',
      price: 100,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
      quantity: 2,
    },
    {
      title: 'Black and white Colors',
      price: 50,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
      quantity: 3,
    },
    {
      title: 'Yellow and Black Colors',
      price: 70,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
      quantity: 1,
    },
  ];

  return (
    <CartContext.Provider value={{ cartElements }}>
      <Container>
        <Row>
          {cartElements.map((product, index) => (
            <Col key={index} md={4}>
              <ProductCard {...product} />
            </Col>
          ))}
        </Row>
        <Button variant="primary" onClick={handleToggleCart}>
          {showCart ? 'Close Cart' : 'Open Cart'}
        </Button>
        {showCart && <Cart />}
      </Container>
    </CartContext.Provider>
  );
};

export default App;
