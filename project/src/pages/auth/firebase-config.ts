import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDTaK8Cb4OrXzQmHcMKyj3XZzMiClsyeAc",
  authDomain: "tongue-29e65.firebaseapp.com",
  projectId: "tongue-29e65",
  storageBucket: "tongue-29e65.firebasestorage.app",
  messagingSenderId: "1068118944119",
  appId: "1:1068118944119:web:cd9bb99251e9c33b68d972",
  measurementId: "G-SVERPYHERE" // Ensure this is the correct ID
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Get auth instance
export const auth = getAuth(app);

// Create Google provider
export const googleProvider = new GoogleAuthProvider();
