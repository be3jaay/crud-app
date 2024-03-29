import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCAuE5JPmQrXgo7RYPCv4ktO_eLOWiJ504",
    authDomain: "auth-2d0b4.firebaseapp.com",
    projectId: "auth-2d0b4",
    storageBucket: "auth-2d0b4.appspot.com",
    messagingSenderId: "305068344245",
    appId: "1:305068344245:web:d44980c96d7c18dbd74ffc"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)



export { app, auth };
