export const handleUploadByte8Array = async (req, res) => {
  try {
    const response = await req.storageInstance.uploadByte8Array(
      req.body.path,
      req.body.imageBase64
    );
    res.json({ response });
  } catch (error) {
    console.error("Upload Byte8Array Error:", error);
    res.status(500).send("Upload byte8Array failed");
  }
};

export const handleUploadFile = async (req, res) => {
  try {
    const response = await req.storageInstance.uploadFile(
      req.files.file,
      req.body.path
    );
    res.json({ response });
  } catch (error) {
    console.error("Upload File Error:", error);
    res.status(500).send("Upload file failed");
  }
};

export const handleGetDownloadURL = async (req, res) => {
  try {
    const response = await req.storageInstance.getDownloadURL(req.body.path);
    res.json({ response });
  } catch (error) {
    console.error("Get Download URL Error:", error);
    res.status(500).send("Get download URL failed");
  }
};

export const handleDeleteFile = async (req, res) => {
  try {
    const response = await req.storageInstance.deleteFile(req.body.path);
    res.json({ response });
  } catch (error) {
    console.error("Delete File Error:", error);
    res.status(500).send("Delete file failed");
  }
};
