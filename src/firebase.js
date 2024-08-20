
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA35doUIbX0STT1eLccLwtf7-RxYB_wkF0",
  authDomain: "sns-firebase-f68e2.firebaseapp.com",
  projectId: "sns-firebase-f68e2",
  storageBucket: "sns-firebase-f68e2.appspot.com",
  messagingSenderId: "396143078945",
  appId: "1:396143078945:web:8bf27eccf8aa54beb63d60",
  measurementId: "G-W801Q3NPKT"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage();