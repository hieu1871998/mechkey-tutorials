import { initializeApp } from 'firebase/app';
import { getFirestore} from 'firebase/firestore';

export const firebaseApp = initializeApp({
  apiKey: "AIzaSyAHE3T431eor2ae1RT8L-qioI53hBXN-j4",
  authDomain: "faerievn.firebaseapp.com",
  databaseURL: "https://faerievn-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "faerievn",
  storageBucket: "faerievn.appspot.com",
  messagingSenderId: "640666239395",
  appId: "1:640666239395:web:885459a4487721ef3dda16",
  measurementId: "G-GNNZZS0M79"
})

export const database = getFirestore(firebaseApp);