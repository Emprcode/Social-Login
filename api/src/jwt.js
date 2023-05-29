import Jwt from 'jsonwebtoken'

export const signAccessJwt = (payload) => {
  return Jwt.sign(payload, process.env.ACCESS_JWT, {expiresIn: "60min"})
}
export const signRefreshJwt = (payload) => {
  return Jwt.sign(payload, process.env.REFRESH_JWT, {expiresIn:"30d"})
}