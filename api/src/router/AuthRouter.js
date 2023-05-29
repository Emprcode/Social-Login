import express from 'express';
import passport from 'passport';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose'

const router = express.Router();
const clientURL = 'http://localhost:3000'
// Google login route
router.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

// Google callback route
router.get(
  '/auth/google/callback',
  passport.authenticate('google', { session: false }),
  (req, res) => {
    // Redirect or respond with the JWT token
    res.redirect(`/auth/google/success?token=${req.user.token}`);
  }
);

// Protected route example
router.get('/protected', authenticateJWT, (req, res) => {
  // Access the authenticated user through req.user
  res.json({ message: 'Protected route', user: req.user });
});
router.get('/auth/google/success', (req, res) => {
  const { token } = req.query;
console.log(token)
  // Handle the successful authentication process
  // You can store the token in local storage or a cookie on the frontend
  // or perform any other actions required after successful authentication

  res.redirect( clientURL +'/dashboard'); // Redirect to a desired route on the frontend
});


// Verify JWT token middleware
function authenticateJWT(req, res, next) {
  const token = req.headers.authorization?.split(' ')[1];

  if (token) {
    jwt.verify(token, jwtSecret, (err, user) => {
      if (err) {
        return res.sendStatus(403); // Invalid token
      }
      req.user = user;
      next();
    });
  } else {
    res.sendStatus(401); // Missing token
  }
}

// Protected route example
router.get('/protected', authenticateJWT, (req, res) => {
  // Access the authenticated user through req.user
  res.json({ message: 'Protected route', user: req.user });
});


// MongoDB User model and schema (using Mongoose)


const userSchema = new mongoose.Schema({
  googleId: String,
  name: String,
  email: String,
});

const user = mongoose.model('abc', userSchema);

// Google callback route
router.get(
  '/auth/google/callback',
  passport.authenticate('google', { session: false }),
  (req, res) => {
    const { token } = req.user;

    // Send the token as a response to the frontend
    res.json({ token });
  }
);

export default router;
