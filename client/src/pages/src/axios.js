import axios from 'axios';

const googleCallbackUrl = "http://localhost:5000/auth/login/success"
// Make an async function to fetch the token
export const fetchToken = async() =>  {
  try {
    // Make the request to the '/google/callback' route
    const response = await axios.get(googleCallbackUrl);
    console.log(response)
    // Extract the token from the response data
    const { status, message, tokens } = response.data;
    console.log(tokens)
    
    if (tokens) {
      const {accessJWT, refreshJWT} = tokens
      sessionStorage.setItem("accessJWT", accessJWT)
      localStorage.setItem("refreshJWT", refreshJWT)
    }
    // Redirect or perform further actions with the token
    // Example: Redirect to the dashboard page
    window.location.href = '/dashboard';
  } catch (error) {
    // Handle any errors that occur during the request or response
    console.error(error);
  }
}

// Call the fetchToken function to initiate the process

