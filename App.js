import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from './ProductCard';
import productsArr from './productsArr';

const App = () => {
  return (
    <Container>
      <Row>
        {productsArr.map((product, index) => (
          <Col key={index} md={4}>
            <ProductCard {...product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default App;
