import { Authentication } from "../../models/firebase/AuthenticationModel.js";
const authenticationInitiateObjects = async (req, res, next) => {
  const { firebaseConfig } = req;
  const authInstance = new Authentication(firebaseConfig[1]);
  req.authInstance = authInstance;
  next();
};
export default authenticationInitiateObjects;
