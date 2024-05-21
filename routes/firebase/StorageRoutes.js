import express from "express";
import {
  handleUploadByte8Array,
  handleUploadFile,
  handleGetDownloadURL,
  handleDeleteFile,
} from "../../handlers/firebase/StorageHandlers.js";
import storageInitiateObjects from "../../middlewares/firebase/storageInitiateObjects.js";

const storageRouter = express.Router();

// Middleware to initiate storage objects
storageRouter.use(storageInitiateObjects);

// Route for uploading a byte8Array
storageRouter.post("/uploadByte8Array", handleUploadByte8Array);

// Route for uploading a file
storageRouter.post("/uploadFile", handleUploadFile);

// Route for getting download URL
storageRouter.post("/getDownloadURL", handleGetDownloadURL);

// Route for deleting a file
storageRouter.delete("/deleteFile", handleDeleteFile);

export default storageRouter;
