import React from 'react';
import { Form,Button} from 'react-bootstrap';
import { Link,useLocation,useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const Login = () => {
 const {sighInWithGoogle,githubSignin,handlePassword,handleEmail,handleLogin} = useAuth();
 const location = useLocation();
 const history = useHistory();
 const redirect_uri = location.state?.Form || '/home';
 
 const handleGoogleSign=()=>{
    sighInWithGoogle()
     .then(result =>{
         history.push(redirect_uri);
     });
 }
    return (
        <div>
           <Form className="w-50 mx-auto">
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control onBlur={handleEmail} type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control onBlur={handlePassword} type="password" placeholder="Password" />
            </Form.Group>
    </Form>
              
        <div className="text-center text-muted justify-content-center">
        <Button onClick={handleLogin} variant="danger" type="submit">Login</Button>
        <p className="text-center text-muted">Login or new User <Link to="/signup">Register</Link> </p>
        
        <Button onClick={handleGoogleSign} className=" justify-content-center me-2">  <i className="fab fa-google"></i> Google</Button>

        <Button onClick={githubSignin} className=" justify-content-center me-2 "> <i className="fab fa-github"></i> Github</Button>
        <Button  className=" justify-content-center me-2"> <i className="fab fa-facebook-square"></i> Facebook</Button>
        <Button  className=" justify-content-center"><i className="fab fa-linkedin"></i> linkdin</Button>
      </div>            
        </div>
    );
};

export default Login;