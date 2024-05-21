import { configureFirebase } from "../../utils/firebase/config.js";

const configureInitiateObjects = async (req, res, next) => {
  const { firebaseconfig, serviceaccount, databaseurl, storagebucket } =
    req.headers;
  const [executed, results] = await configureFirebase(
    JSON.stringify(firebaseconfig),
    serviceaccount,
    databaseurl,
    storagebucket
  );
  if (!executed) {
    res.status(500).json({ results });
  }
  req.firebaseConfig = results;
  next();
};

export default configureInitiateObjects;
