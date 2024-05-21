import { Storage } from "../../models/firebase/StorageModel.js";

const storageInitiateObjects = async (req, res, next) => {
  try {
    const { initPath } = req.body;
    const { firebaseConfig } = req;
    const storageInstance = new Storage(initPath);
    req.storageInstance = storageInstance;
    next();
  } catch (error) {
    // Handle any errors gracefully
    console.error("Error initializing Storage instance:", error);
    res.status(500).json({ error: error.message });
  }
};

export default storageInitiateObjects;
