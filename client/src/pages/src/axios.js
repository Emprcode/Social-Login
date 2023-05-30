import axios from 'axios';

// Make an async function to fetch the token
export const fetchToken = async() =>  {
  try {
    // Make the request to the '/google/callback' route
    const response = await axios.get('/google/callback');
    console.log(response)
    // Extract the token from the response data
    const { tokens } = response.data;
    console.log(tokens)
    
    // Store the token in local storage or any other client-side storage mechanism
    localStorage.setItem('token', tokens);
    
    // Redirect or perform further actions with the token
    // Example: Redirect to the dashboard page
    window.location.href = '/dashboard';
  } catch (error) {
    // Handle any errors that occur during the request or response
    console.error(error);
  }
}

// Call the fetchToken function to initiate the process

