import mongoose from 'mongoose'

 const mongoURL = 'mongodb://127.0.0.1:27017/test-social-login'
 export const connectDB = ()=> {
     const conn = mongoose.connect(mongoURL)
    

    conn && console.log(`mongo Connected`)
} 