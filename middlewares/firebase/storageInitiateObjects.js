import { Storage } from "../../models/firebase/StorageModel.js";
const storageInitiateObjects = async (req, res, next) => {
  const { initPath } = req.body;
  const { firebaseConfig } = req;
  const storageInstance = new Storage(initPath, firebaseConfig[2]);
  req.storageInstance = storageInstance;
  next();
};
export default storageInitiateObjects;
