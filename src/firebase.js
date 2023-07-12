// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCxDSGDiXVYHsE9CJakV-kC9s7JartyGrw',
  authDomain: 'hiremegames.firebaseapp.com',
  projectId: 'hiremegames',
  storageBucket: 'hiremegames.appspot.com',
  messagingSenderId: '756282810877',
  appId: '1:756282810877:web:810d0aa74cb36cfca03994',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export default app;
