import React from 'react'

const Login = () => {
    const google = () => {
        window.open("http://localhost:5000/auth/google", "_self");
      };
    
      const github = () => {
        window.open("http://localhost:5000/auth/github", "_self");
      };
    
      const facebook = () => {
        window.open("http://localhost:5000/auth/facebook", "_self");
      };
  return (

    
    
    <div className="container">
    <h1>Login Page</h1>
    <div className="button-container">
      <Button className="btn-3d btn-primary">Button 1</Button>
      <Button className="btn-3d btn-success">Button 2</Button>
      <Button className="btn-3d btn-danger">Button 3</Button>
    </div>
  </div>

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