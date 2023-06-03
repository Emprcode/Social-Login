import React, { useEffect } from 'react'
import {Button, Col, Container, Row} from 'react-bootstrap'
import { fetchToken } from './src/axios'
const Login = () => {

  // const handleGoogleSuccess = (response) => {
  //   // Send the response to the backend for verification
  //   fetch('/api/auth/google', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(response),
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       // Handle the response from the backend
  //       if (data && data.token) {
  //         // Store the token and redirect to the dashboard
  //         localStorage.setItem('token', data.token);
  //         window.location.href = '/dashboard';
  //       } else {
  //         // Handle authentication failure
  //         console.log('Authentication failed');
  //       }
  //     })
  //     .catch((error) => {
  //       console.error('Error:', error);
  //     });
  // };

 
    const google = () => {
      // fetchToken()
        window.open("http://localhost:5000/auth/google", "_self");
        
      };
    
      const github = () => {
        window.open("http://localhost:5000/auth/github", "_self");
      };
    
      const linkedin = () => {
        window.open("http://localhost:5000/auth/linkedin", "_self");
      };


      
  return (

    
    
    <Container className="d-flex flex-column align-items-center shadow-container mt-4">
      <h1>3D Button Page</h1>
      <Row className="mt-4">
        <Col>
          <Button className="btn-3d btn-primary" onClick={google}>Google</Button>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <Button className="btn-3d btn-success" onClick={linkedin}>LinkedIn</Button>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <Button className="btn-3d btn-danger" onClick={github}>Github</Button>
        </Col>
      </Row>
    </Container>

 
  )
}

export default Login

