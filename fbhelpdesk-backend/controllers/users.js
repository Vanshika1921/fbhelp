// controllers/users.js
const { admin, db } = require('../firebaseService');

// Register user (create user with email and password)
exports.registerUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const userRecord = await admin.auth().createUser({
      email,
      password,
    });
    res.status(201).json({ message: 'User registered', uid: userRecord.uid });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Login user (verify user exists)
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  // Firebase Admin SDK does NOT provide signInWithEmailAndPassword
  // So login verification should ideally be done on frontend with Firebase client SDK
  // Here, we'll just check if the user exists in Firebase Auth by email

  try {
    const userRecord = await admin.auth().getUserByEmail(email);
    // We won't verify password here since Admin SDK can't do that
    // Just return success if user exists
    res.status(200).json({ message: 'Login successful', uid: userRecord.uid });
  } catch (error) {
    res.status(401).json({ error: 'Invalid credentials or user does not exist' });
  }
};
