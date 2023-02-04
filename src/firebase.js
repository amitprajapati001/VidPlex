import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyClVNYU52l43I_iQnR8pTUWpP5qDf89cto",
  authDomain: "vidplex-375715.firebaseapp.com",
  projectId: "vidplex-375715",
  storageBucket: "vidplex-375715.appspot.com",
  messagingSenderId: "476574015821",
  appId: "1:476574015821:web:ca821e145338764a74d704"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export { auth, db };