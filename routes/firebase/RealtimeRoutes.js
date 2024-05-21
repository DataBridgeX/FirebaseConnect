import { Router } from "express";
import {
  handleCreateItem,
  handleReadItems,
  handleUpdateItem,
  handleDeleteItem,
} from "../../handlers/firebase/RealtimeHandlers.js";
import realtimeInitiateObjects from "../../middlewares/firebase/realtimeInitiateObjects.js";

const realTimeRouter = Router();

// Middleware to initialize RealTime instance
realTimeRouter.use(realtimeInitiateObjects);

// Define routes for Realtime Database operations
realTimeRouter.post("/create", handleCreateItem);
realTimeRouter.get("/read", handleReadItems);
realTimeRouter.put("/update", handleUpdateItem);
realTimeRouter.delete("/delete", handleDeleteItem);

export default realTimeRouter;
