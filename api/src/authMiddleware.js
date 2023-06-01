import { signAccessJwt, verifyAccessJWT, verifyRefreshJWT } from "./jwt.js";
import { getSession } from "./model/session/SessionModel.js";
import { findUser } from "./model/user/UserModel.js";



export const UserAuth = async (req, res, next) => {
  try {
    //get access token

    const { authorization } = req.headers;

    //check if it is valid

    const { email } = verifyAccessJWT(authorization);
    if (email) {
      //check if email exist
      const { _id } = await getSession({ token: authorization });

      if (_id) {
        const user = await findUser({ email });

        if (user?._id && user?.status === "active") {
          //get the user and set in the req obj
          user.password = undefined;
          req.userInfo = user;
          return next();
        }
      }
    }
    res.status(403).json({
      status: "error",
      message: "Unauthorize",
    });
  } catch (error) {
    next(error);
  }
};

export const newAccessJwtAuth = async (req, res, next) => {
  try {
    //get access token

    const { authorization } = req.headers;

    //check if it is valid

    const { email } = verifyRefreshJWT(authorization);
    if (email) {
      //check if email exist
      const { _id } = await findUser({ email, refreshJWT: authorization });

      if (_id) {
        const accessJWT = await signAccessJwt({ email });

        if (accessJWT) {
          return res.json({
            status: "success",
            accessJWT,
          });
        }
      }
    }

    res.status(401).json({
      status: "error",
      message: "Unauthorize",
    });
  } catch (error) {
    next(error);
  }
};
