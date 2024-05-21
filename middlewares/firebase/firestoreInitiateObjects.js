import Firestore from "../../models/firebase/FirestoreModel.js";
const firestoreInitiateObjects = async (req, res, next) => {
  const { collectionName, uniqueID, nestedPaths } = req.body;
  const firestoreInstance = new Firestore(
    collectionName,
    uniqueID,
    nestedPaths
  );
  req.firestoreInstance = firestoreInstance;
  next();
};
export default firestoreInitiateObjects;
