import React from 'react';
import { Form,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Signup = () => {
   const {handlePassword,handleEmail,handleRegister,handleName} = useAuth();
    return (
        <div>
             <Form className="w-50 mx-auto">
             <Form.Group className="mb-3">
                <Form.Label>User Name</Form.Label>
                <Form.Control onChange={handleName} type="text" placeholder="Enter Name" />
            </Form.Group>
            <Form.Group className="mb-3" >
                <Form.Label>Email address</Form.Label>
                <Form.Control onBlur={handleEmail} type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Label>Password</Form.Label>
                <Form.Control onBlur={handlePassword} type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" >
                <Form.Label>Re-Enter-Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
    </Form>
     
                
    
                    
        <div className="text-center text-muted justify-content-center">
        <Button onClick={handleRegister} variant="danger" type="submit">Signup </Button>
        <p className="text-center text-muted"><br /> <Link to="login">All ready have an account?</Link> </p>
        <Button className=" justify-content-center me-2">  <i className="fab fa-google"></i> Google</Button>
        <Button  className=" justify-content-center me-2 "> <i className="fab fa-github"></i> Github</Button>
        <Button  className=" justify-content-center me-2"> <i className="fab fa-facebook-square"></i> Facebook</Button>
        <Button  className=" justify-content-center"><i className="fab fa-linkedin"></i> linkdin</Button>
      </div>  
        </div>
    );
};

export default Signup;