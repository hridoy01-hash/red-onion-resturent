import React from 'react';
import { Card, Col } from 'react-bootstrap';

const SingleDinner = (props) => {
    const {foodName,price,img,discription} = props.dinner
    return (
        <div>
            <Col>
      <Card className="shadow p-3 mb-5 bg-white rounded h-100">
        <Card.Img variant="top" src={img} />
        <Card.Body className="text-center">
          <Card.Title>{foodName}</Card.Title>
          <Card.Text>
           {discription}
          </Card.Text>
          <Card.Title className="fw-bold"><small>{price}</small></Card.Title>
          <button className="btn btn-outline-warning">See Meal Details</button>
        </Card.Body>
      </Card>
    </Col>
        </div>
    );
};

export default SingleDinner;