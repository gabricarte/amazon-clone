import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyD3HO5zOExjaJ1MixVPO8TjlzD3tOaE158",
    authDomain: "clone-f2b4a.firebaseapp.com",
    projectId: "clone-f2b4a",
    storageBucket: "clone-f2b4a.appspot.com",
    messagingSenderId: "447416765862",
    appId: "1:447416765862:web:683386dcd4aeab235e1367",
    measurementId: "G-W1R5RFFE63"
  };    

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore(); //to store the information of firebase

//authentication object
const auth = firebase.auth();

export {db, auth};