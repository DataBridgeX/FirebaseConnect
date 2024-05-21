import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
import {
  getStorage,
  ref,
  uploadString,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";
import admin from "firebase-admin";
const configureFirebase = (
  firebaseConfig,
  serviceAccount,
  databaseURL,
  storageBucket
) => {
  const firebaseConfigObject = JSON.parse(firebaseConfig); // Parse firebaseConfig back to object
  const serviceAccountObject = JSON.parse(serviceAccount); // Parse serviceAccount back to object
  firebase.initializeApp(firebaseConfigObject);
  const app = admin.initializeApp({
    credential: admin.credential.cert(serviceAccountObject), // Use parsed serviceAccountObject here
    databaseURL,
    storageBucket,
  });
  const auth = admin.auth(app);
  const firestore = admin.firestore(app);
  const storage = getStorage();
  return [true, [firestore, auth, storage, app]];
};
export {
  configureFirebase,
  ref,
  uploadString,
  getDownloadURL,
  deleteObject,
  firebase,
  admin,
};
