import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID,
};

const getAppName = () => {
  if (typeof window === "undefined") {
    return "[DEFAULT]";
  }
  return "NextJSApp";
};

const app = !getApps().length
  ? initializeApp(firebaseConfig, getAppName())
  : getApp(getAppName());
  
const db = getFirestore(app);
const auth = getAuth(app);

export { auth, app, db };
