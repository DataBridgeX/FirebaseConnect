const handleRequest = async (handler, req, res) => {
  try {
    const response = await handler(req);
    res.json({ response });
  } catch (error) {
    console.error("Authentication Error:", error);
    res.status(500).send("Authentication failed");
  }
};

export const handleSignup = async (req, res) => {
  await handleRequest(req.authInstance.createUser, req.body.userData, res);
};

export const handleVerificationEmail = async (req, res) => {
  await handleRequest(req.authInstance.verificationEmail, req.body.email, res);
};

export const handleLoginUser = async (req, res) => {
  await handleRequest(
    req.authInstance.loginUser,
    req.body.email,
    req.body.password,
    res
  );
};

export const handleUpdateUser = async (req, res) => {
  await handleRequest(
    req.authInstance.updateUser,
    req.body.uid,
    req.body.userData,
    res
  );
};

export const handleGetUser = async (req, res) => {
  await handleRequest(req.authInstance.getUser, req.body.uid, res);
};

export const handleDeleteUser = async (req, res) => {
  await handleRequest(req.authInstance.deleteUser, req.body.uid, res);
};

export const handleCreatePhoneVerification = async (req, res) => {
  await handleRequest(
    req.authInstance.createPhoneVerification,
    req.body.phoneNumber,
    res
  );
};

export const handleVerityPhoneVerification = async (req, res) => {
  await handleRequest(
    req.authInstance.verityPhoneVerification,
    req.body.verificationId,
    req.body.otp,
    res
  );
};

export const handleResetPassword = async (req, res) => {
  await handleRequest(req.authInstance.resetPassword, req.body.email, res);
};
