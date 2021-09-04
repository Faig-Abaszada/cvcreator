import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyA4LQ-mKQhNA3MWFILrTtnQUMix70ceapU",
    authDomain: "asan-cv.firebaseapp.com",
    projectId: "asan-cv",
    storageBucket: "asan-cv.appspot.com",
    messagingSenderId: "16930438885",
    appId: "1:16930438885:web:d917e560ee11c5bacc9e0c"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp();

export { timestamp };
export default firebaseApp.firestore();
