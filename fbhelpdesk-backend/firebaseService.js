const admin = require('firebase-admin');
const serviceAccount = require('./firebase-adminsdk.json');

// Check if any app is already initialized
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

const db = admin.firestore();

module.exports = { admin, db };
