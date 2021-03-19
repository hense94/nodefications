const firebaseAdmin = require("firebase-admin");
const serviceAccount = require("../../serviceAccountKey.json");

export function initFirebase() {
    firebaseAdmin.initializeApp({
        credential: firebaseAdmin.credential.cert(serviceAccount)
    });
    console.info("Initialized Firebase SDK");
}
