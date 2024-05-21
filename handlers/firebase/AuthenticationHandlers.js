export const handleSignup = async (req, res) => {
  try {
    const response = await req.authInstance.createUser(req.body.userData);
    res.json({ response });
  } catch (error) {
    console.error("Signup Error:", error);
    res.status(500).send("Signup failed");
  }
};

export const handleVerificationEmail = async (req, res) => {
  try {
    const response = await req.authInstance.verificationEmail(req.body.email);
    res.json({ response });
  } catch (error) {
    console.error("Signup Error:", error);
    res.status(500).send("Signup failed");
  }
};
export const handleLoginUser = async (req, res) => {
  try {
    const response = await req.authInstance.loginUser(
      req.body.email,
      req.body.password
    );
    res.json({ response });
  } catch (error) {
    console.error("Signup Error:", error);
    res.status(500).send("Signup failed");
  }
};
export const handleUpdateUser = async (req, res) => {
  try {
    const response = await req.authInstance.updateUser(
      req.body.uid,
      req.body.userData
    );
    res.json({ response });
  } catch (error) {
    console.error("Signup Error:", error);
    res.status(500).send("Signup failed");
  }
};
export const handleGetUser = async (req, res) => {
  try {
    const response = await req.authInstance.getUser(req.body.uid);
    res.json({ response });
  } catch (error) {
    console.error("Signup Error:", error);
    res.status(500).send("Signup failed");
  }
};
export const handleDeleteUser = async (req, res) => {
  try {
    const response = await req.authInstance.deleteUser(req.body.uid);
    res.json({ response });
  } catch (error) {
    console.error("Signup Error:", error);
    res.status(500).send("Signup failed");
  }
};
export const handleCreatePhoneVerification = async (req, res) => {
  try {
    const response = await req.authInstance.createPhoneVerification(
      req.body.phoneNumber
    );
    res.json({ response });
  } catch (error) {
    console.error("Signup Error:", error);
    res.status(500).send("Signup failed");
  }
};
export const handleVerityPhoneVerification = async (req, res) => {
  try {
    const response = await req.authInstance.verityPhoneVerification(
      req.body.verificationId,
      req.body.otp
    );
    res.json({ response });
  } catch (error) {
    console.error("Signup Error:", error);
    res.status(500).send("Signup failed");
  }
};
export const handleResetPassword = async (req, res) => {
  try {
    const response = await req.authInstance.resetPassword(req.body.email);
    res.json({ response });
  } catch (error) {
    console.error("Signup Error:", error);
    res.status(500).send("Signup failed");
  }
};
