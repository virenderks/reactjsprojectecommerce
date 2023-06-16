import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import ProductCard from './ProductCard';
import Cart from './Cart';
import CartContextProvider from './CartContext';

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
    },
    {
      title: 'Black and white Colors',
      price: 50,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    },
    {
      title: 'Yellow and Black Colors',
      price: 70,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    },
  ];

  return (
    <CartContextProvider>
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
    </CartContextProvider>
  );
};

export default App;
