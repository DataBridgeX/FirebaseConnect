import { Router } from "express";
import {
  handleCreatePhoneVerification,
  handleDeleteUser,
  handleGetUser,
  handleLoginUser,
  handleResetPassword,
  handleSignup,
  handleUpdateUser,
  handleVerificationEmail,
  handleVerityPhoneVerification,
} from "../../handlers/firebase/AuthenticationHandlers.js";
import authenticationInitiateObjects from "../../middlewares/firebase/authenticationInitiateObjects.js";

const authRouter = new Router();
authRouter.use(authenticationInitiateObjects);
authRouter
  .route("/")
  .get(handleGetUser)
  .post(handleSignup)
  .put(handleUpdateUser)
  .delete(handleDeleteUser);
authRouter.get("/login", handleLoginUser);
authRouter.get("/verification/Email", handleVerificationEmail);
authRouter.get("/reset/Password", handleResetPassword);
authRouter
  .route("/phone")
  .get(handleVerityPhoneVerification)
  .post(handleCreatePhoneVerification);
export default authRouter;
