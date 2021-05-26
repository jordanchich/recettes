import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBvdI0LBWYm0GjHoyG9ZLY64-jPPeTIPlY",
  authDomain: "recettes-39205.firebaseapp.com",
  databaseURL: "https://recettes-39205-default-rtdb.europe-west1.firebasedatabase.app"
})

const base = Rebase.createClass(firebaseApp.database())

// This is a named export
export { firebaseApp }

// this is a default export
export default base
