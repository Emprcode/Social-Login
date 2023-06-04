import express from "express";
import { signAccessJwt, signRefreshJwt } from "../jwt.js";
import { createUser } from "../model/user/UserModel.js";

const router = express.Router();

router.post('/api/v1/user/google', async(req, res, next) => {
  try {
    const { email, given_name, family_name} = req.body

    const obj = { email, given_name, family_name}
    // console.log(obj)
    const result = await createUser(obj)
console.log(result)
    result._id ? res.json({
      status:"success",
      message:"user register success"
    }) : res.json({
      status:"error",
      message:"error, Please try again later"
    })
  } catch (error) {
    next(error)
    
  }
})
router.get('/api/v1/user/google', async(req, res, next) => {
  try {
    console.log(req.body)
    const result = await findUser()

    result._id ? res.json({
      status:"success",
      message:"user fetch success"
    }) : res.json({
      status:"error",
      message:"error, Please try again later"
    })
  } catch (error) {
    next(error)
    
  }
})

export default router;
