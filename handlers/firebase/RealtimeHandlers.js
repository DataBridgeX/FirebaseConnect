const handleRequest = async (handler, req, res) => {
  try {
    const response = await handler(req);
    res.json({ response });
  } catch (error) {
    console.error(`${handler.name} Error:`, error);
    res.status(500).send(`${handler.name} failed`);
  }
};

export const handleCreateItem = async (req, res) => {
  await handleRequest(req.realtimeInstance.create, req.body.data, res);
};

export const handleReadItems = async (req, res) => {
  await handleRequest(req.realtimeInstance.read, req, res);
};

export const handleUpdateItem = async (req, res) => {
  await handleRequest(
    req.realtimeInstance.update,
    { id: req.body.id, newData: req.body.newData },
    res
  );
};

export const handleDeleteItem = async (req, res) => {
  await handleRequest(req.realtimeInstance.delete, req.body.id, res);
};
