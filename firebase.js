import firebase from "firebase/compat/app"
import "firebase/compat/firestore"

var firebaseConfig = {
  apiKey: "AIzaSyBDPifNmacBiYNjy4J4Fdh_9QdWUWZiA2E",
  authDomain: "blog-comments-1516b.firebaseapp.com",
  projectId: "blog-comments-1516b",
  storageBucket: "blog-comments-1516b.appspot.com",
  messagingSenderId: "220577066601",
  appId: "1:220577066601:web:48aa069f2d4c0ddc2cfcf8",
  measurementId: "G-REMDWE6VTT",
}

firebase.initializeApp(firebaseConfig)

export const firestore = firebase.firestore()

export default firebase
