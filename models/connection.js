import admin from 'firebase-admin';
import fireorm from 'fireorm';

export default function initializeFirestore() {
  // Initialize Firebase Admin
  admin.initializeApp({
    credential: admin.credential.cert('./serviceAccountKey.json'),
    databaseURL: `https://${process.env.FIREBASE_PROJECT_ID}.firebaseio.com`
  });

  const fireStore = admin.firestore();
  fireStore.settings({
    timestampsInSnapshots: true,
  });

  // Initialize Fireorm
  fireorm.initialize(fireStore);
}