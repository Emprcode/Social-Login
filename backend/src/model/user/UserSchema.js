import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    
    given_name: {
      type: String,
      // required: true,
    },
    family_name: {
      type: String,
      // required: true,
    },
    email: {
      type: String,
      // required: true,
      unique: true, 
      index: 1
    },
    password: {
      type: String,
      default:""
      // required: true,
    },
   
    verificationCode: {
      type: String,
      default: null,
    },
    refreshJWT: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);
