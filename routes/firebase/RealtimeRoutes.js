import express from "express";
import {
  handleCreateItem,
  handleReadItems,
  handleUpdateItem,
  handleDeleteItem,
} from "../../handlers/firebase/RealtimeHandlers.js";
import realtimeInitiateObjects from "../../middlewares/firebase/realtimeInitiateObjects.js";

const realTimeRouter = express.Router();

// Middleware to initialize RealTime instance
realTimeRouter.use(realtimeInitiateObjects);

// Route for creating an item
realTimeRouter.post("/create", handleCreateItem);

// Route for reading all items
realTimeRouter.get("/read", handleReadItems);

// Route for updating an item
realTimeRouter.put("/update", handleUpdateItem);

// Route for deleting an item
realTimeRouter.delete("/delete", handleDeleteItem);

export default realTimeRouter;
