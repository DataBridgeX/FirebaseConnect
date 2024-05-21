const handleRequest = async (handler, ...args) => {
  try {
    const response = await handler(...args);
    return response;
  } catch (error) {
    console.error(`${handler.name} Error:`, error);
    throw new Error(`${handler.name} failed`);
  }
};

export const handleUploadByte8Array = async (req, res) => {
  try {
    const response = await handleRequest(
      req.storageInstance.uploadByte8Array,
      req.body.path,
      req.body.imageBase64
    );
    res.json({ response });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const handleUploadFile = async (req, res) => {
  try {
    const response = await handleRequest(
      req.storageInstance.uploadFile,
      req.files.file,
      req.body.path
    );
    res.json({ response });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const handleGetDownloadURL = async (req, res) => {
  try {
    const response = await handleRequest(
      req.storageInstance.getDownloadURL,
      req.body.path
    );
    res.json({ response });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const handleDeleteFile = async (req, res) => {
  try {
    const response = await handleRequest(
      req.storageInstance.deleteFile,
      req.body.path
    );
    res.json({ response });
  } catch (error) {
    res.status(500).send(error.message);
  }
};
