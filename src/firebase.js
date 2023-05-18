import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";


const app=firebase.initializeApp( {
  apiKey: "AIzaSyAzit2zuo_iFAKKGe9Pj3XLnWtuaNCSJIA",
  authDomain: "car-sharing-9f4ff.firebaseapp.com",
  projectId: "car-sharing-9f4ff",
  storageBucket: "car-sharing-9f4ff.appspot.com",
  messagingSenderId: "602536244344",
  appId: "1:602536244344:web:6ac3c3a1185ed7a320e98d"
})
export const auth=app.auth()
export default app
