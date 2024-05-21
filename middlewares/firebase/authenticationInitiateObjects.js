import { Authentication } from "../../models/firebase/AuthenticationModel.js";

const authenticationInitiateObjects = async (req, res, next) => {
  try {
    const { firebaseConfig } = req;
    const authInstance = new Authentication(firebaseConfig[1]);
    req.authInstance = authInstance;
    next();
  } catch (error) {
    // Handle any errors gracefully
    console.error("Error initializing authentication objects:", error);
    res.status(500).send("Internal Server Error");
  }
};

export default authenticationInitiateObjects;
