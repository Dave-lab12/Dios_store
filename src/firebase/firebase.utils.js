import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyB3R6cyHBRv6nex6S03AffzkCyacnw9NAY",
  authDomain: "dios-db.firebaseapp.com",
  projectId: "dios-db",
  storageBucket: "dios-db.appspot.com",
  messagingSenderId: "278068309757",
  appId: "1:278068309757:web:869ea61e512ec05e1bd894",
  measurementId: "G-RCE68ZWVEV",
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
