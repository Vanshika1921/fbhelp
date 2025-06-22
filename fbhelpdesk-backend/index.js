const express = require('express');
const cors = require('cors');
const admin = require('firebase-admin');
const bodyParser = require('body-parser');
const path = require('path');

const serviceAccount = require('./firebase-adminsdk.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());  // ya app.use(express.json()); agar body-parser nahi use karte ho

// Import routes
const userRoutes = require('./routes/users');
const webhookRouter = require('./webhook');  // <-- Add this line

// Health check
app.get('/', (req, res) => {
  res.send('✅ Firebase backend is running!');
});

// Use webhook router
app.use('/', webhookRouter);  // <-- Add this line

// Existing message routes etc...
app.post('/api/messages', async (req, res) => {
  // ...your code
});

app.get('/api/conversations', async (req, res) => {
  // ...your code
});

app.use('/api/users', userRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
