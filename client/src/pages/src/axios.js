import axios from 'axios';


const postUrl = 'http://localhost:8000/api/v1/user/google'

export const postUser =async (userObj)=> {

  try {
    const {data } = await axios.post(postUrl, userObj)
    console.log(data)
    return data
  } catch (error) {
    return({
      status:"error"
    })
  }
 
}
export const getUser =async ()=> {

  try {
    const {data } = await axios.get(postUrl)
    console.log(data)
    return data
  } catch (error) {
    return({
      status:"error"
    })
  }
 
}