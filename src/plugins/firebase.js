import firebase from "firebase";

const config = {
  apiKey: "AIzaSyD9MQtEO8bvFse-tmlwMxm2xi8A1Wir3w0",
  authDomain: "red-smith.firebaseapp.com",
  databaseURL: "https://red-smith.firebaseio.com",
  projectId: "red-smith",
  storageBucket: "red-smith.appspot.com",
  messagingSenderId: "110135118362"
};
firebase.initializeApp(config);
export const functions = firebase.functions();