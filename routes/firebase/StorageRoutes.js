import { Router } from "express";
import {
  handleUploadByte8Array,
  handleUploadFile,
  handleGetDownloadURL,
  handleDeleteFile,
} from "../../handlers/firebase/StorageHandlers.js";
import storageInitiateObjects from "../../middlewares/firebase/storageInitiateObjects.js";

const storageRouter = Router();

// Middleware to initiate storage objects
storageRouter.use(storageInitiateObjects);

// Define routes for Storage operations
storageRouter.post("/uploadByte8Array", handleUploadByte8Array);
storageRouter.post("/uploadFile", handleUploadFile);
storageRouter.post("/getDownloadURL", handleGetDownloadURL);
storageRouter.delete("/deleteFile", handleDeleteFile);

export default storageRouter;
