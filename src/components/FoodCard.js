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
    <Card style={{ width: '20rem' }}> {/* Adjust the width here */}
      <Card.Img 
        variant="top" 
        src={item.imageUrl} 
        style={{ height: '200px', objectFit: 'cover' }} // Adjust image size and fit
      />
      <Card.Body>
        <Card.Title>{item.recpieName}</Card.Title>
        <Card.Text>
          {item.about}
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
