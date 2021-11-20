import React from 'react';
import { FormControl, InputGroup,Button } from 'react-bootstrap';
import './Baner.css'
const Baner = () => {
    return (
        <div className="baner">

          <div>
          <div>
          <h3 className="text-center">Best food waiting for your belly </h3>
          </div>
          <div>
          <InputGroup className="mb-3 mt-3 mx-auto">
            <FormControl
            placeholder="Search your meal"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            />
            <Button className="rounded" variant="warning" id="button-addon2">
            Search
            </Button>
         </InputGroup>
          </div>
          </div>
        </div>
    );
};

export default Baner;