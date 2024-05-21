const handleRequest = async (handler, req, res) => {
  try {
    const response = await handler(req);
    res.json({ response });
  } catch (error) {
    console.error(`${handler.name} Error:`, error);
    res.status(500).send(`${handler.name} failed`);
  }
};

export const handleCreateDocument = async (req, res) => {
  await handleRequest(req.firestoreInstance.create, req.body.data, res);
};

export const handleReadDocument = async (req, res) => {
  await handleRequest(req.firestoreInstance.read, req, res);
};

export const handleUpdateDocument = async (req, res) => {
  await handleRequest(req.firestoreInstance.update, req.body.data, res);
};

export const handleDeleteDocument = async (req, res) => {
  await handleRequest(req.firestoreInstance.delete, req, res);
};

export const handleReadPaths = async (req, res) => {
  await handleRequest(req.firestoreInstance.readPaths, req, res);
};

export const handleReadAllDocuments = async (req, res) => {
  await handleRequest(req.firestoreInstance.readAll, req, res);
};
