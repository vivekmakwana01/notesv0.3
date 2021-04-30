import firebase from "firebase/app";

import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyApl2JR_VBdhHgh07zkinAnehdq4SiiGIo",
  authDomain: "notes-61687.firebaseapp.com",
  projectId: "notes-61687",
  storageBucket: "notes-61687.appspot.com",
  messagingSenderId: "315071382938",
  appId: "1:315071382938:web:daba99792dcf5d30c4a623"
};
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth()
export const provider = new firebase.auth.GoogleAuthProvider();
export default firebase;