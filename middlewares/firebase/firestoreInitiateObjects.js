import Firestore from "../../models/firebase/FirestoreModel.js";

const firestoreInitiateObjects = async (req, res, next) => {
  try {
    const { collectionName, uniqueID, nestedPaths } = req.body;
    const firestoreInstance = new Firestore(
      collectionName,
      uniqueID,
      nestedPaths
    );
    req.firestoreInstance = firestoreInstance;
    next();
  } catch (error) {
    // Handle any errors gracefully
    console.error("Error initializing Firestore instance:", error);
    res.status(500).json({ error: error.message });
  }
};

export default firestoreInitiateObjects;
