// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCfECP5H-GsE3sgHnXiJHKQ1Fjumeq4n3M",
  authDomain: "translive-caf59.firebaseapp.com",
  projectId: "translive-caf59",
  storageBucket: "translive-caf59.firebasestorage.app",
  messagingSenderId: "426032359943",
  appId: "1:426032359943:web:c517b7396e69628f0598a2",
  measurementId: "G-GYBEEGCXHB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app };