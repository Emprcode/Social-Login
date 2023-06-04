import Jwt from 'jsonwebtoken'
import { createSession } from './model/session/SessionModel.js';

export const signAccessJwt = async(payload) => {
  return Jwt.sign(payload, process.env.ACCESS_JWT, {expiresIn: "60min"})

  // await createSession({ token });

  // return token;
}
export const signRefreshJwt = (payload) => {
  return Jwt.sign(payload, process.env.REFRESH_JWT, {expiresIn:"30d"})
}



//verify token

export const verifyAccessJWT = (token) => {
  try {
    return Jwt.verify(token, process.env.ACCESS_JWT);
  } catch (error) {
    return error.message;
  }
};

export const verifyRefreshJWT = (token) => {
  try {
    return Jwt.verify(token, process.env.ACCESS_JWT);
  } catch (error) {
    return error.message;
  }
};