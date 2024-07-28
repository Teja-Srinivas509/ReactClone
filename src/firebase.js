
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCtPX4ep0-kkoq5r90Ai2SO_NcWlvpBrF4",
  authDomain: "register-8f435.firebaseapp.com",
  projectId: "register-8f435",
  storageBucket: "register-8f435.appspot.com",
  messagingSenderId: "252148103432",
  appId: "1:252148103432:web:ec56bda825d80f079114bd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const db = getFirestore(app)
export default app