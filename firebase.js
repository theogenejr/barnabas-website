import firebase from "firebase/compat/app"
import "firebase/compat/firestore"

var firebaseConfig = {
  apiKey: "AIzaSyB43yXIIdWCXI_xTortcrON7a7AZeriQCE",
  authDomain: "barnabas-one.firebaseapp.com",
  projectId: "barnabas-one",
  storageBucket: "barnabas-one.appspot.com",
  messagingSenderId: "845335343827",
  appId: "1:845335343827:web:d430d4b5b3169aa344da26",
  measurementId: "G-0XF0HNERPL",
}

firebase.initializeApp(firebaseConfig)

export const firestore = firebase.firestore()

export default firebase
