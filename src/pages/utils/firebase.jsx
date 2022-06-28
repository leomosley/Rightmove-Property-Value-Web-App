import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBI64rFL-pJjK4ZdTJULqZdQLOCifLp1bg",
    authDomain: "rightmove-property-scraper.firebaseapp.com",
    databaseURL: "https://rightmove-property-scraper-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "rightmove-property-scraper",
    storageBucket: "rightmove-property-scraper.appspot.com",
    messagingSenderId: "870951751769",
    appId: "1:870951751769:web:bdf2d79e6909b4d5922148"
};

firebase.initializeApp(firebaseConfig);

export default firebase;