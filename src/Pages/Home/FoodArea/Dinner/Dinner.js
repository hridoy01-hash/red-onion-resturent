import React, { useEffect, useState } from 'react';
import { Container,Button, Row } from 'react-bootstrap';
import SingleDinner from '../SingleDinner/SingleDinner';

const Dinner = () => {
    const [dinners,setDinners] = useState([]);
    useEffect(()=>{
        fetch('fakeData.json')
        .then(response => response.json())
        .then(data=> setDinners(data))
    },[]);
    return (
        <div>
            <Container>
            <Row xs={1} md={3} className="g-4">

              {
                  dinners.slice(12,18).map(dinner=><SingleDinner dinner={dinner} key={dinner.id} ></SingleDinner>)
              }
  
           </Row>
           
           <div className="d-flex justify-content-center align-items-center mt-3 mb-5">
           <Button  variant="secondary">Checkout your order</Button>{' '}
           </div>

           </Container>
        </div>
    );
};

export default Dinner;