
const { initializeApp } = require('firebase/app');
const { getFirestore, collection, getDocs } = require('firebase/firestore/lite');
const { getDatabase, ref, set, child, update, remove, push, get } = require('firebase/database')
const admin = require('firebase-admin')

//console.log({ref})

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
//console.log({app})

//const db = getFirestore(app);
const db = getDatabase(app)
const reference = ref(db);

var leaderboard = ref(db, 'Leaderboard');

console.log([leaderboard])

var games = get(child(reference, 'TotalGamesPlayed')).then((snapshot) => {
    var temp = snapshot.val();
    set(game, temp+1);
  });

//get(child(reference, 'Leaderboard')).then((snapshot) => {
//    console.log(snapshot)
    // var temp = snapshot.val();
    // for(let i = 0; i < temp.length; i ++) {
    //    const name = temp[i] ? temp[i].name : false;
    //    console.log(name)
    // //   if(!name || name == "" || name == " " || temp[i].name.length < 3 || temp[i].name.length > 20) {
    // //     temp.splice(i, 1);
    // //     temp.push({name: '', score: 0, id: 'aaa000'});
    // //   }
    // }
    // for(let i = 0; i < 50; i ++) {
    //     temp.push({name: '', score: 0, id: 'aaa000'});
    // }
    // set(leaderboard, temp);
 // });


