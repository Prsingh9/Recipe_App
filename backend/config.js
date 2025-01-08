const firebaseAdmin = require('firebase-admin');
const mongoose = require('mongoose');

// Firebase Admin Initialization
firebaseAdmin.initializeApp({
  credential: firebaseAdmin.credential.applicationDefault(),
});

const mongooseConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};

module.exports = {
  mongooseConnect, // Export as part of an object
  firebaseAdmin,
};
