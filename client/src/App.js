import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import { useEffect, useState } from 'react';
import { fetchToken } from './pages/src/axios';
import axios from 'axios';

 const  App = () =>  {
  
    const [user, setUser] = useState(null);
  
    // useEffect(() => {
      // const getUser = () => {
      //   fetch("http://localhost:5000/auth/login/success", {
      //     method: "GET",
      //     credentials: "include",
      //     headers: {
      //       Accept: "application/json",
      //       "Content-Type": "application/json",
      //       "Access-Control-Allow-Credentials": true,
      //     },
      //   })
      //     .then((response) => {
      //       if (response.status === 200) return response.json();
      //       throw new Error("authentication has been failed!");
      //     })
      //     .then((resObject) => {
      //       setUser(resObject.user);
      //       console.log(resObject.user)
      //     })
      //     .catch((err) => {
      //       console.log(err);
      //     });
      // };
      // getUser();

      // fetchToken()
    // }, []);

    // const [user, setUser] = useState(null);

	const getUser = async () => {
		try {
			const url = `http://localhost:5000/auth/login/success`;
			const { data } = await axios.get(url, { withCredentials: true });
			setUser(data.user._json);
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		getUser();
	}, []);



    console.log(user)
  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Login/>}/>
    <Route path='/dashboard' element={user ? <Dashboard/> : <Login/>}/>
   </Routes>
   </BrowserRouter>
   
   </>
  );
}

export default App;