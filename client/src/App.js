import logo from './logo.svg';
import './App.css';

 const  App = () =>  {
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
    <div className="App">
     <div className="login">
      <h1 className="loginTitle">Choose a Login Method</h1>
   
        <div className="left">
          <div className="loginButton google" onClick={google}>
            <img src='' alt="" className="icon" />
            Google
          </div>
          <div className="loginButton facebook" onClick={facebook}>
            <img src='' alt="" className="icon" />
            Facebook
          </div>
          <div className="loginButton github" onClick={github}>
            <img src='' alt="" className="icon" />
            Github
          </div>
        </div>
        <div className="center">
          <div className="line" />
         
        </div>
        
      </div>



    </div>
  );
}

export default App;