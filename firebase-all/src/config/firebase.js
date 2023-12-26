
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from 'firebase/firestore';
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAjw82SwHgXSCMh057bVO72xeMWest0W2g",
  authDomain: "auth-course-db50d.firebaseapp.com",
  projectId: "auth-course-db50d",
  storageBucket: "auth-course-db50d.appspot.com",
  messagingSenderId: "482553408029",
  appId: "1:482553408029:web:f12fb8fc1575bfeb7e34f4"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);