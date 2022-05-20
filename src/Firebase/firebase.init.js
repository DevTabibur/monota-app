import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAQvQcbP1aNIzLx1qkqElFJNHJlHf84MpY",
  authDomain: "assignment12-mern.firebaseapp.com",
  projectId: "assignment12-mern",
  storageBucket: "assignment12-mern.appspot.com",
  messagingSenderId: "310789869363",
  appId: "1:310789869363:web:ef535d74a101aa8e6a3846"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;