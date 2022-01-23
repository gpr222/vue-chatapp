


import firebase from "firebase/app";
import "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const config = {

    apiKey: "",

    authDomain: "",
  
    projectId: "",
  
    storageBucket: "",
  
    messagingSenderId: "",
  
    appId: ""
  
};


// Initialize Firebase

const db = firebase.initializeApp(config);
export default db;
