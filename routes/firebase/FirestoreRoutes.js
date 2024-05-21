import { Router } from "express";
import {
  handleCreateDocument,
  handleDeleteDocument,
  handleReadAllDocuments,
  handleReadDocument,
  handleReadPaths,
  handleUpdateDocument,
} from "../../handlers/firebase/FirestoreHandlers.js";
import firestoreInitiateObjects from "../../middlewares/firebase/firestoreInitiateObjects.js";

const firestoreRouter = Router();

firestoreRouter.use(firestoreInitiateObjects);

// Document routes
firestoreRouter.route("/")
  .get(handleReadDocument)
  .post(handleCreateDocument)
  .put(handleUpdateDocument)
  .delete(handleDeleteDocument);

// Additional routes
firestoreRouter.get("/paths", handleReadPaths);
firestoreRouter.get("/all", handleReadAllDocuments);

export default firestoreRouter;
