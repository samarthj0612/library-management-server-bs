require('dotenv').config(); // Load environment variables from .env file
const { initializeApp, cert } = require('firebase-admin/app');
const { getAuth } = require('firebase-admin/auth');
const { getDatabase } = require('firebase-admin/database');
const { getFirestore } = require('firebase-admin/firestore');
const path = require('path');

// Load the service account key JSON file
const serviceAccountPath = process.env.FIREBASE_SERVICE_ACCOUNT_KEY_PATH;
const serviceAccount = require(path.resolve(serviceAccountPath));

// Initialize the Firebase app with the service account key
const app = initializeApp({
  credential: cert(serviceAccount),
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_DATABASE_URL
});

const auth = getAuth(app);
const database = getDatabase(app);
const firestore = getFirestore(app);

console.log("Firebase successfully connected");

module.exports = { auth, firestore, database };
