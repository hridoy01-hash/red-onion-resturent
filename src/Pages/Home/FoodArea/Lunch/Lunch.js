import React, { useEffect, useState } from 'react';
import { Container, Row,Button } from 'react-bootstrap';
import SingleLunch from '../SingleLunch/SingleLunch';

const Lunch = () => {
    const [lunchs,setLunchs] = useState([]);
    useEffect(()=>{
        fetch('fakeData.json')
        .then(response => response.json())
        .then(data=> setLunchs(data))
    },[]);
    return (
        <div>
            <Container>
            <Row xs={1} md={3} className="g-4">

              {
                  lunchs.slice(6,12).map(lunch=><SingleLunch lunch={lunch} key={lunch.id}></SingleLunch>)
              }
  
           </Row>
           
           <div className="d-flex justify-content-center align-items-center mt-3 mb-5">
           <Button  variant="secondary">Checkout your order</Button>{' '}
           </div>

           </Container>
        </div>
    );
};

export default Lunch;