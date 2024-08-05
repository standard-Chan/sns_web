
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


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
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);