import React, { useEffect, useState } from 'react';
import { Container, Row,Button } from 'react-bootstrap';
import SingleBreakfast from '../SingleBreakfast/SingleBreakfast';

const Breakfast = () => {
    const [brekfasts,setBreakfasts] = useState([]);
    useEffect(()=>{
        fetch('fakeData.json')
        .then(response => response.json())
        .then(data => setBreakfasts(data));
    },[]);
    
    return (
        <div>
            <Container>
            <Row xs={1} md={3} className="g-4">

              {
                  brekfasts.slice(0,6).map(breakfast=><SingleBreakfast breakfast={breakfast} key={breakfast.id} ></SingleBreakfast>)
              }
  
           </Row>
           
           <div className="d-flex justify-content-center align-items-center mt-3 mb-5">
           <Button  variant="secondary">Checkout your order</Button>{' '}
           </div>

           </Container>
        </div>
    );
};

export default Breakfast;