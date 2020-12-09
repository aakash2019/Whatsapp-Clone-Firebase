import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDpVmDMoq5p7EL4MY5fAhSRUnbYiH_-7Eo",
  authDomain: "whatsapp-clone-9b3e5.firebaseapp.com",
  databaseURL: "https://whatsapp-clone-9b3e5.firebaseio.com",
  projectId: "whatsapp-clone-9b3e5",
  storageBucket: "whatsapp-clone-9b3e5.appspot.com",
  messagingSenderId: "358407145618",
  appId: "1:358407145618:web:efa1f0064d5c4d23ec7e4b",
  measurementId: "G-KEG4JV3J7K"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;