import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import configureInitiateObjects from "./middlewares/firebase/configureInitiateObjects.js";
import authRouter from "./routes/firebase/AuthenticationRoutes.js";
import firestoreRouter from "./routes/firebase/FirestoreRoutes.js";
import realTimeRouter from "./routes/firebase/RealtimeRoutes.js";
import storageRouter from "./routes/firebase/StorageRoutes.js";

// Initialize the express application
const app = express();

// Load environment variables from .env file
dotenv.config();

// Middleware setup
app.use(cors({ origin: "*" }));
app.use(bodyParser.json());

// Base route for health check
app.get("/", (_, res) => {
  res.send("Hello World!");
});

// Middleware for error handling
app.use((err, _, res, __) => {
  res.status(500).send("Internal Server Error");
});

// Middleware to initialize Firebase objects
app.use(configureInitiateObjects);

// API routes
app.use("/auth", authRouter);
app.use("/firestore", firestoreRouter);
app.use("/realtime", realTimeRouter);
app.use("/storage", storageRouter);

// Start the server
const server = app.listen(3000, () => {
  const host = server.address().address;
  const port = server.address().port;
  console.log(`App listening at http://${host}:${port}`);
});

export default app;
