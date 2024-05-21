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

/**
 * Configures and initializes Firebase and Firebase Admin with the provided configuration.
 * @param {string} firebaseConfig - The Firebase configuration as a JSON string.
 * @param {string} serviceAccount - The service account credentials as a JSON string.
 * @param {string} databaseURL - The URL of the Firebase database.
 * @param {string} storageBucket - The Firebase storage bucket name.
 * @returns {Array} - An array containing a boolean indicating success and an array with the Firestore, Auth, Storage, and App instances.
 */
const configureFirebase = (
  firebaseConfig,
  serviceAccount,
  databaseURL,
  storageBucket
) => {
  // Parse the provided JSON strings into objects
  const firebaseConfigObject = JSON.parse(firebaseConfig);
  const serviceAccountObject = JSON.parse(serviceAccount);

  // Initialize Firebase
  firebase.initializeApp(firebaseConfigObject);

  // Initialize Firebase Admin with the service account and other configurations
  const app = admin.initializeApp({
    credential: admin.credential.cert(serviceAccountObject),
    databaseURL,
    storageBucket,
  });

  // Get instances of Auth, Firestore, and Storage services
  const auth = admin.auth(app);
  const firestore = admin.firestore(app);
  const storage = getStorage();

  // Return the initialized services
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
