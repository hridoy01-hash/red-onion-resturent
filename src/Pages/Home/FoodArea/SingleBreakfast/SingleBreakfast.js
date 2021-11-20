import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SingleBreakfast = (props) => {
    const {id,foodName,price,img,discription} = props.breakfast
    return (
        <div> 
        <Col>
      <Card className="shadow p-3 mb-5 bg-white rounded">
        <Card.Img variant="top" src={img} />
        <Card.Body className="text-center">
          <Card.Title>{foodName}</Card.Title>
          <Card.Text>
           {discription}
          </Card.Text>
          <Card.Title className="fw-bold"><small>{price}</small></Card.Title>
         <Link to={`/mealdetails/${id}`}>
         <button className="btn btn-outline-warning">See Meal Details</button>
         </Link>
        </Card.Body>
      </Card>
    </Col>
            
        </div>
    );
};

export default SingleBreakfast;