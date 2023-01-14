
const { initializeApp } = require('firebase/app');
const { getFirestore, collection, getDocs } = require('firebase/firestore/lite');
const x = requirec('firebase/database')
const admin = require('firebase-admin')


// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyBQp9ljmUgP1ZuxcaGaY3KJHb8h9GGRlS8",
    authDomain: "get-tam.firebaseapp.com",
    projectId: "get-tam",
    storageBucket: "get-tam.appspot.com",
    messagingSenderId: "8679519646",
    appId: "1:8679519646:web:85204f21b7074c3bd1528f",
    measurementId: "G-ZQYL5YN5TD"
};

const app = initializeApp(firebaseConfig);
console.log({app})

const db = getFirestore(app);
console.log({db})




