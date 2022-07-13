// Import the functions you need from the SDKs you need
// import firebase from 'firebase/app';
// import firebase from "firebase/compat/app";
// import "firebase/storage";
import { getStorage} from "firebase/storage";

// import "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

//  Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAkL8xLZ9uKs4qfKq6eKR2Dfn-YD2jHLPE",
    authDomain: "uttam-firegram.firebaseapp.com",
    projectId: "uttam-firegram",
    storageBucket: "uttam-firegram.appspot.com",
    messagingSenderId: "490045361336",
    appId: "1:490045361336:web:0055883fc7fdc33242f84d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// const projectStorage = firebase.storage();
const projectStorage = getStorage(app);
const projectFirestore = getFirestore(app); //firebase.firestore();
// const timestamp= firebase.firestore.FieldValue.serverTimestamp;

// export { projectStorage, projectFirestore ,timestamp};
export { projectStorage, projectFirestore };
