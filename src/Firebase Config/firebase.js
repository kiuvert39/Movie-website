import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDElz0RmdMCdakkzAInNGAx450GsyrvTdg",
  authDomain: "movie-zone-6861f.firebaseapp.com",
  projectId: "movie-zone-6861f",
  storageBucket: "movie-zone-6861f.appspot.com",
  messagingSenderId: "826069190321",
  appId: "1:826069190321:web:062f364634d626dfc00490",
  measurementId: "G-D91RYJ0T0P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app)

