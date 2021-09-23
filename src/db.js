


import firebase from "firebase/app";
import "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const config = {

    apiKey: "AIzaSyDVXEfeHbJtbqpDnrdKozhh44KAjJIKoGs",

    authDomain: "vuechat-e98a5.firebaseapp.com",
  
    projectId: "vuechat-e98a5",
  
    storageBucket: "vuechat-e98a5.appspot.com",
  
    messagingSenderId: "797779588323",
  
    appId: "1:797779588323:web:4f160b96e2a41cf26dc1d6"
  
};


// Initialize Firebase

const db = firebase.initializeApp(config);
export default db;