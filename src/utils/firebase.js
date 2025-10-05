// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyA-gLhHxwMnYeweL8MyVREA9RqCIeUSOfc',
  authDomain: 'netflixgpt-c976e.firebaseapp.com',
  projectId: 'netflixgpt-c976e',
  storageBucket: 'netflixgpt-c976e.appspot.com', // ✅ Fixed here
  messagingSenderId: '755966994064',
  appId: '1:755966994064:web:ac250b12d3847955af9a15',
  measurementId: 'G-GPFNH5XXRC',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export default app
