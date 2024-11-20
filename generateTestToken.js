// const admin = require('firebase-admin');
// const serviceAccount = require('./serviceAccountKey.json');
// const firebase = require('firebase/app');
// const { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } = require('firebase/auth');


// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   databaseURL: `https://recently-viewed-products-81b06.firebaseio.com`
// });

// const firebaseConfig = {
//   apiKey: "AIzaSyDj7hE38Ey0VSu7EKZVRHN66YQHcSyscD0",
//   authDomain: "recently-viewed-products-81b06.firebaseapp.com",
//   projectId: "recently-viewed-products-81b06",
//   storageBucket: "recently-viewed-products-81b06.firebasestorage.app",
//   messagingSenderId: "820117582504",
//   appId: "1:820117582504:web:a13fae1850c18d369f489d",
//   measurementId: "G-CVNY5N8X9F"
// };

// firebase.initializeApp(firebaseConfig);
// const db = admin.firestore();

// async function createTestUser() {
//   // const user = await admin.auth().createUser({
//   //   email: 'testuser@example.com',
//   //   password: 'password123'
//   // });

//   const userCredential = await firebase.auth().signInWithEmailAndPassword('testuser@example.com', 'password123');
//   const idToken = await userCredential.user.getIdToken();
//   console.log(idToken)
// }

// async function addMockProducts() {
//   const products = [
//     { name: 'Product 1', description: 'Description 1', price: 100 },
//     { name: 'Product 2', description: 'Description 2', price: 200 },
//     { name: 'Product 3', description: 'Description 3', price: 300 },
//     { name: 'Product 4', description: 'Description 4', price: 400 },
//     { name: 'Product 5', description: 'Description 5', price: 500 },
//     { name: 'Product 6', description: 'Description 6', price: 600 },
//     { name: 'Product 7', description: 'Description 7', price: 700 },
//     { name: 'Product 8', description: 'Description 8', price: 800 },
//     { name: 'Product 9', description: 'Description 9', price: 900 },
//     { name: 'Product 10', description: 'Description 10', price: 1000 },
//   ];

//   const batch = db.batch();
//   products.forEach((product, index) => {
//     const docRef = db.collection('products').doc(`product${index + 1}`);
//     batch.set(docRef, product);
//   });

//   await batch.commit();
//   console.log('Mock products added to Firestore');
// }

// async function main() {
//   await createTestUser();
//   // await addMockProducts();
// }

// main().catch(console.error);


import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

// Initialize Firebase App
const firebaseConfig = {
  apiKey: '***********************',
  authDomain: '****************************',
  projectId: '******************',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Sign in and retrieve token
signInWithEmailAndPassword(auth, 'testuser@example.com', 'password123')
  .then((userCredential) => {
    return userCredential.user.getIdToken();
  })
  .then((idToken) => {
    console.log('User ID Token:', idToken);
  })
  .catch((error) => {
    console.error('Error:', error.message);
  });
