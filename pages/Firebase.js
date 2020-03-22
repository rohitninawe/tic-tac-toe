import firebase from "firebase";
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAKaQByeBh_fmftC138OLjJWTWSGiO1-K0",
    authDomain: "digital-pagoda-235707.firebaseapp.com",
    databaseURL: "https://digital-pagoda-235707.firebaseio.com",
    projectId: "digital-pagoda-235707",
    storageBucket: "digital-pagoda-235707.appspot.com",
    messagingSenderId: "842933783599",
    appId: "1:842933783599:web:debb068cf829a2f9fb8ada",
    measurementId: "G-95G4N0WZP5"
};

// firebase.initializeApp(firebaseConfig);

// export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();

export default !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()

// export default firebase;