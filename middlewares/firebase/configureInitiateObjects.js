import { configureFirebase } from "../../utils/firebase/config.js";

const configureInitiateObjects = async (req, res, next) => {
  try {
    const { firebaseconfig, serviceaccount, databaseurl, storagebucket } =
      req.headers;
    const [executed, results] = await configureFirebase(
      JSON.stringify(firebaseconfig),
      serviceaccount,
      databaseurl,
      storagebucket
    );
    if (!executed) {
      throw new Error("Configuration not executed successfully");
    }
    req.firebaseConfig = results;
    next();
  } catch (error) {
    // Handle any errors gracefully
    console.error("Error configuring and initiating objects:", error);
    res.status(500).json({ error: error.message });
  }
};

export default configureInitiateObjects;
