import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyBRIE3_ZJ7Kb5TdCQzNOXmQVTMe8BXh1_U",
  authDomain: "clone-3e564.firebaseapp.com",
  projectId: "clone-3e564",
  storageBucket: "clone-3e564.appspot.com",
  messagingSenderId: "980447030591",
  appId: "1:980447030591:web:8777cf87918ce6cfdcf78a"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db,auth};