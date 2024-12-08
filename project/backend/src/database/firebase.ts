import admin from 'firebase-admin';
import { getFirestore } from 'firebase-admin/firestore';

var serviceAccount = require("../../serviceAccountKey.json");

const app = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = getFirestore(app);

export { db };