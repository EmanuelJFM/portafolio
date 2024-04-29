import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
export const firebaseConfig = {
  apiKey: "AIzaSyDgOs4thWWjtX0DfHNpn9JYsrDjoSCsJl0",
  authDomain: "portafolio-4b054.firebaseapp.com",
  projectId: "portafolio-4b054",
  storageBucket: "portafolio-4b054.appspot.com",
  messagingSenderId: "492764937403",
  appId: "1:492764937403:web:fcc8bbbbcdaefac597bd9e",
  measurementId: "G-NYXKQ6TQM1"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
  