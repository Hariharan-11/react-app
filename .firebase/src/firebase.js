import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDsn1L4tsjKPWLU5Cz19V_jkRhm8x300Bg",
  authDomain: "reality-shoppee.firebaseapp.com",
  databaseURL: "https://reality-shoppee.firebaseio.com",
  projectId: "reality-shoppee",
  storageBucket: "reality-shoppee.appspot.com",
  messagingSenderId: "934844138973",
  appId: "1:934844138973:web:854cc98a0d9dd891cfa234",
  measurementId: "G-G8QJDJFRRL"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  
  export { db, auth};