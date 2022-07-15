import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
const firebaseConfig = {
    apiKey: "AIzaSyC4ndtWb-aQIN6lpX6MuugSgCMcfvAGvQI",
    authDomain: "blog-8b5fe.firebaseapp.com",
    projectId: "blog-8b5fe",
    storageBucket: "blog-8b5fe.appspot.com",
    messagingSenderId: "648447013875",
    appId: "1:648447013875:web:3d5ee08253e1c8041c5886"
  };

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);