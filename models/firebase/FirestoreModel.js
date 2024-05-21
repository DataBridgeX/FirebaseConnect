import { admin } from "../../utils/firebase/config.js";
import getDocumentIdByContent from "../../utils/firebase/getDocumentIdByContent.js";

/**
 * Firestore class for performing CRUD operations on Firestore collections.
 */
export default class Firestore {
  /**
   * Constructor for Firestore class.
   * @param {string} collectionName - The name of the Firestore collection.
   * @param {string} uid - The unique identifier for the document.
   * @param {Array} nestedPaths - Array of nested paths for document reference.
   */
  constructor(collectionName, uniqueID, nestedPaths = []) {
    this.collectionName = collectionName;
    this.collection = admin.firestore().collection(collectionName);
    this.uniqueID = uniqueID;
    this.nestedPaths = nestedPaths;
  }

  /**
   * Create a new document in the Firestore collection.
   * @param {Object} data - The data to be added to the document.
   * @returns {[boolean, string]} - An array indicating success (true/false) and the document ID.
   */
  async create(data) {
    let collectionRef = this.collection;
    for (let i = 0; i < this.nestedPaths.length; i += 2) {
      if (this.nestedPaths.length > i + 1) {
        collectionRef = collectionRef
          .doc(this.nestedPaths[i])
          .collection(this.nestedPaths[i + 1]);
      } else {
        collectionRef = collectionRef.doc(this.nestedPaths[i]);
      }
    }
    const docRef = this.uniqueID
      ? collectionRef.doc(this.uniqueID)
      : collectionRef.doc();
    await docRef.set(data);
    const docID = await getDocumentIdByContent(collectionRef, data);
    return [true, docID];
  }

  /**
   * Read a document from the Firestore collection.
   * @returns {[boolean, Object]} - An array indicating success (true/false) and the document data.
   */
  async read() {
    try {
      let collectionRef = this.collection;
      for (let i = 0; i < this.nestedPaths.length; i += 2) {
        if (this.nestedPaths.length > i + 1) {
          collectionRef = collectionRef
            .doc(this.nestedPaths[i])
            .collection(this.nestedPaths[i + 1]);
        } else {
          collectionRef = collectionRef.doc(this.nestedPaths[i]);
        }
      }
      const docSnapshot = await collectionRef.doc(this.uniqueID).get();
      if (!docSnapshot.exists) {
        return [false, "Document does not exist"];
      }
      return [true, docSnapshot.data()];
    } catch (error) {
      return [false, error.message];
    }
  }

  /**
   * Update a document in the Firestore collection.
   * @param {Object} data - The data to update the document with.
   * @returns {[boolean, NaN]} - An array indicating success (true/false) and NaN (no data returned).
   */
  async update(data) {
    let collectionRef = this.collection;
    for (let i = 0; i < this.nestedPaths.length; i += 2) {
      if (this.nestedPaths.length > i + 1) {
        collectionRef = collectionRef
          .doc(this.nestedPaths[i])
          .collection(this.nestedPaths[i + 1]);
      } else {
        collectionRef = collectionRef.doc(this.nestedPaths[i]);
      }
    }
    await collectionRef.doc(this.uniqueID).update(data);
    return [true, NaN];
  }

  /**
   * Delete a document from the Firestore collection.
   * @returns {[boolean, NaN]} - An array indicating success (true/false) and NaN (no data returned).
   */
  async delete() {
    try {
      let collectionRef = this.collection;
      for (let i = 0; i < this.nestedPaths.length; i += 2) {
        if (this.nestedPaths.length > i + 1) {
          collectionRef = collectionRef
            .doc(this.nestedPaths[i])
            .collection(this.nestedPaths[i + 1]);
        } else {
          collectionRef = collectionRef.doc(this.nestedPaths[i]);
        }
      }
      await collectionRef.doc(this.uniqueID).delete();
      return [true, NaN];
    } catch (error) {
      return [false, error.message];
    }
  }

  /**
   * Retrieve all paths of documents in the Firestore collection.
   * @returns {[boolean, string[]]} - An array indicating success (true/false) and an array of document paths.
   */
  async readPaths() {
    try {
      let collectionRef = this.collection;
      for (let i = 0; i < this.nestedPaths.length; i += 2) {
        if (this.nestedPaths.length > i + 1) {
          collectionRef = collectionRef
            .doc(this.nestedPaths[i])
            .collection(this.nestedPaths[i + 1]);
        } else {
          collectionRef = collectionRef.doc(this.nestedPaths[i]);
        }
      }
      const docs = await collectionRef.listDocuments();
      const paths = docs.map((doc) => doc.path.split("/")[1]);
      return [true, paths];
    } catch (error) {
      return [false, error.message];
    }
  }

  /**
   * Retrieve all documents in the Firestore collection.
   * @returns {[boolean, Object]} - An array indicating success (true/false) and an object containing all documents data.
   */
  async readAll() {
    try {
      let paths = await this.readPaths();
      paths = paths[1];
      const allDocs = {};
      for (let i = 0; i < paths.length; i++) {
        const iterFirestore = new Firestore(this.collectionName, paths[i]);
        const docSnapshot = await iterFirestore.read();
        allDocs[paths[i]] = docSnapshot[1];
      }
      return [true, allDocs];
    } catch (error) {
      return [false, error.message];
    }
  }
}