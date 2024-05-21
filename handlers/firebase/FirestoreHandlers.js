export const handleCreateDocument = async (req, res) => {
  try {
    const response = await req.firestoreInstance.create(req.body.data);
    res.json({ response });
  } catch (error) {
    console.error("Create Document Error:", error);
    res.status(500).send("Create document failed");
  }
};

export const handleReadDocument = async (req, res) => {
  try {
    const response = await req.firestoreInstance.read();
    res.json({ response });
  } catch (error) {
    console.error("Read Document Error:", error);
    res.status(500).send("Read document failed");
  }
};

export const handleUpdateDocument = async (req, res) => {
  try {
    const response = await req.firestoreInstance.update(req.body.data);
    res.json({ response });
  } catch (error) {
    console.error("Update Document Error:", error);
    res.status(500).send("Update document failed");
  }
};

export const handleDeleteDocument = async (req, res) => {
  try {
    const response = await req.firestoreInstance.delete();
    res.json({ response });
  } catch (error) {
    console.error("Delete Document Error:", error);
    res.status(500).send("Delete document failed");
  }
};

export const handleReadPaths = async (req, res) => {
  try {
    const response = await req.firestoreInstance.readPaths();
    res.json({ response });
  } catch (error) {
    console.error("Read Paths Error:", error);
    res.status(500).send("Read paths failed");
  }
};

export const handleReadAllDocuments = async (req, res) => {
  try {
    const response = await req.firestoreInstance.readAll();
    res.json({ response });
  } catch (error) {
    console.error("Read All Documents Error:", error);
    res.status(500).send("Read all documents failed");
  }
};
