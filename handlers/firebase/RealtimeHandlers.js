export const handleCreateItem = async (req, res) => {
  try {
    const response = await req.realtimeInstance.create(req.body.data);
    res.json({ response });
  } catch (error) {
    console.error("Create Item Error:", error);
    res.status(500).send("Create item failed");
  }
};

export const handleReadItems = async (req, res) => {
  try {
    const response = await req.realtimeInstance.read();
    res.json({ response });
  } catch (error) {
    console.error("Read Items Error:", error);
    res.status(500).send("Read items failed");
  }
};

export const handleUpdateItem = async (req, res) => {
  try {
    const response = await req.realtimeInstance.update(
      req.body.id,
      req.body.newData
    );
    res.json({ response });
  } catch (error) {
    console.error("Update Item Error:", error);
    res.status(500).send("Update item failed");
  }
};

export const handleDeleteItem = async (req, res) => {
  try {
    const response = await req.realtimeInstance.delete(req.body.id);
    res.json({ response });
  } catch (error) {
    console.error("Delete Item Error:", error);
    res.status(500).send("Delete item failed");
  }
};
