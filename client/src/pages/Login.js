import React, { useEffect } from 'react'
import {Button, Col, Container, Row} from 'react-bootstrap'
import { fetchToken } from './src/axios'
const Login = () => {

  
 
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

    // <div className="App">
    //  <div className="login">
    //   <h1 className="loginTitle">Choose a Login Method</h1>
   
    //     <div className="left">
    //       <div className="loginButton google" onClick={google}>
    //         <img src='' alt="" className="icon" />
    //         Google
    //       </div>
    //       <div className="loginButton facebook" onClick={facebook}>
    //         <img src='' alt="" className="icon" />
    //         Facebook
    //       </div>
    //       <div className="loginButton github" onClick={github}>
    //         <img src='' alt="" className="icon" />
    //         Github
    //       </div>
    //     </div>
    //     <div className="center">
    //       <div className="line" />
         
    //     </div>
        
    //   </div>



    // </div>
  )
}

export default Login