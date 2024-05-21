import {
  ref,
  getDownloadURL,
  deleteObject,
  uploadString,
  storage,
} from "../config/firebase.js";

export class Storage {
  constructor(initPath) {
    this.initPath = initPath;
  }

  async uploadByte8Array(path, imageBase64) {
    try {
      const storageRef = ref(storage, this.initPath + path);
      await uploadString(storageRef, imageBase64, "base64");
      const downloadURL = await this.getDownloadURL(path);
      return [true, downloadURL];
    } catch (error) {
      console.error("Error uploading image:", error);
      return [false, error.message];
    }
  }

  async uploadFile(file, path) {
    try {
      const storageRef = ref(storage, this.initPath + path);
      const snapshot = await storageRef.put(file);
      const downloadURL = await snapshot.ref.getDownloadURL();
      return [true, downloadURL];
    } catch (error) {
      console.error("Error uploading file:", error);
      return [false, error.message];
    }
  }

  async getDownloadURL(path) {
    try {
      const storageRef = ref(storage, this.initPath + path);
      const downloadURL = await getDownloadURL(storageRef);
      return [true, downloadURL];
    } catch (error) {
      console.error("Error getting download URL:", error);
      return [false, error.message];
    }
  }

  async deleteFile(path) {
    try {
      const storageRef = ref(storage, this.initPath + path);
      await deleteObject(storageRef);
      return [true, NaN];
    } catch (error) {
      console.error("Error deleting file:", error);
      return [false, error.message];
    }
  }
}

export default Storage;
