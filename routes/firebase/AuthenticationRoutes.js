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
  handleVerifyPhoneVerification,
} from "../../handlers/firebase/AuthenticationHandlers.js";
import authenticationInitiateObjects from "../../middlewares/firebase/authenticationInitiateObjects.js";

const authRouter = Router();

authRouter.use(authenticationInitiateObjects);

// User routes
authRouter
  .route("/")
  .get(handleGetUser)
  .post(handleSignup)
  .put(handleUpdateUser)
  .delete(handleDeleteUser);

// Authentication routes
authRouter.get("/login", handleLoginUser);
authRouter.get("/verification/email", handleVerificationEmail);
authRouter.get("/reset/password", handleResetPassword);

// Phone verification routes
authRouter
  .route("/phone")
  .get(handleVerifyPhoneVerification)
  .post(handleCreatePhoneVerification);

export default authRouter;
