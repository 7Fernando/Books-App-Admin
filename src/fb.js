import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';


export const app = firebase.initializeApp({
    "projectId": "bookflix-admin",
    "appId": "1:1000615282577:web:f5a341e4a50a325fc83c30",
    "storageBucket": "bookflix-admin.appspot.com",
    "locationId": "us-central",
    "apiKey": "AIzaSyDMmASPowqCqZQzZzai-CTEAJurfBqqbUI",
    "authDomain": "bookflix-admin.firebaseapp.com",
    "messagingSenderId": "1000615282577"
  });