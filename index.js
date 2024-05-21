import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import configureInitiateObjects from "./middlewares/firebase/configureInitiateObjects.js";
import authRouter from "./routes/firebase/AuthenticationRoutes.js";
import firestoreRouter from "./routes/firebase/FirestoreRoutes.js";
import realTimeRouter from "./routes/firebase/RealtimeRoutes.js";
import storageRouter from "./routes/firebase/StorageRoutes.js";
const app = express();

app.use(
  cors({
    origin: "*",
  })
);

dotenv.config();
app.use(bodyParser.json());

app.get("/", (_, res) => {
  res.send("Hello World!");
});
app.use((err, _, res, __) => {
  res.status(500).send("Internal Server Error");
});
app.use(configureInitiateObjects);
app.use(authRouter);
app.use(firestoreRouter);
app.use(realTimeRouter);
app.use(storageRouter);
// Start the server
const server = app.listen(3000, () => {
  const host = server.address().address;
  const port = server.address().port;
  console.log(`App listening at http://${host}:${port}`);
});
