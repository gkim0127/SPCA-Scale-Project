import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC1IRzEM2vyEjJjEqmMIlJtdodiTw7vF_Y",
  authDomain: "capstone-3ef1c.firebaseapp.com",
  projectId: "capstone-3ef1c",
  storageBucket: "capstone-3ef1c.appspot.com",
  messagingSenderId: "35613052048",
  appId: "1:35613052048:web:a0833dc73dd06c27129c15",
  measurementId: "G-F84NYCXVJ5"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;