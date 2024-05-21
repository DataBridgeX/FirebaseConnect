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

const firestoreRouter = new Router();
firestoreRouter.use(firestoreInitiateObjects);
firestoreRouter
  .route("/")
  .get(handleReadDocument)
  .post(handleCreateDocument)
  .put(handleUpdateDocument)
  .delete(handleDeleteDocument);
firestoreRouter.get("/paths", handleReadPaths);
firestoreRouter.get("/all", handleReadAllDocuments);

export default firestoreRouter;
