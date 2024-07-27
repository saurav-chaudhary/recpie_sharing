import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';

function FoodCard({ item }) {
  const [isFavorited, setIsFavorited] = useState(false);

  const toggleFavorite = () => {
    setIsFavorited(!isFavorited);
  };

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={item.imageUrl} />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </Card.Text>
      </Card.Body>
      <Card.Footer className="d-flex justify-content-between align-items-center">
        <FontAwesomeIcon
          icon={isFavorited ? solidHeart : regularHeart}
          style={{ color: isFavorited ? 'red' : 'black', cursor: 'pointer' }}
          onClick={toggleFavorite}
        />
        <Button variant="primary">Show More</Button>
      </Card.Footer>
    </Card>
  );
}

export default FoodCard;
