import React from 'react';
import { Button, Container, Navbar } from 'react-bootstrap';
import './Header.css'
import logo from '../../../Image/logo2.png'
import useAuth from '../../../hooks/useAuth';
import { Link } from 'react-router-dom';

const Header = () => {
  const  {user,logout} = useAuth();
    return (
        <div>
    <Navbar>
        <Container>
            <Link to="/">
                <img src={logo} style={{height:"38px"}} alt="" />
            </Link>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
            <Navbar.Text className="d-flex">
                <div>
                <i className=" cart fas fa-cart-arrow-down fw-25"></i>
                </div>
            
            <div>
           { !user?.email ? 
           <Link to="/login"> <Button className="me-2" variant="outline-warning">Login</Button></Link> :
          
           <Button onClick={logout} className="me-2" variant="outline-warning">Logout</Button>
           } 
          
           
           
           
          { !user.email && <Link to="/signup">
           <Button variant="outline-warning">Signup</Button>
           </Link>} 
            </div>
            </Navbar.Text>
            </Navbar.Collapse>   
            
        </Container>
</Navbar>
           
        </div>
    );
};

export default Header;