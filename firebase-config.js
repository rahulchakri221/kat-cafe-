// ============================================================
// KAT MULTICUISINE RESTAURENT
// FIREBASE CONFIGURATION
// ============================================================
//
// IMPORTANT:
// Replace the values below with the Firebase Web App config
// from your own Firebase project.
//
// Firebase Console:
// Project Settings → Your apps → Web app → Config
// ============================================================

import { initializeApp } from
    "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";

import {
    getFirestore
} from
    "https://www.gstatic.com/firebasejs/12.2.1/firebase-firestore.js";


// ============================================================
// PASTE YOUR FIREBASE CONFIG HERE
// ============================================================

const firebaseConfig = {

    apiKey: "PASTE_YOUR_API_KEY_HERE",

    authDomain:
        "PASTE_YOUR_PROJECT_ID.firebaseapp.com",

    projectId:
        "PASTE_YOUR_PROJECT_ID_HERE",

    storageBucket:
        "PASTE_YOUR_STORAGE_BUCKET_HERE",

    messagingSenderId:
        "PASTE_YOUR_MESSAGING_SENDER_ID_HERE",

    appId:
        "PASTE_YOUR_APP_ID_HERE"

};


// ============================================================
// INITIALIZE FIREBASE
// ============================================================

const app = initializeApp(firebaseConfig);


// ============================================================
// FIRESTORE DATABASE
// ============================================================

const db = getFirestore(app);


// ============================================================
// EXPORT
// ============================================================

export {
    app,
    db
};
