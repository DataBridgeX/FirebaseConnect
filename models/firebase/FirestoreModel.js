import { admin } from "../config/firebase.js";
import getDocumentIdByContent from "../../utils/firebase/getDocumentIdByContent.js";

export default class Firestore {
  constructor(collectionName, uid, nestedPaths = []) {
    this.collectionName = collectionName;
    this.collection = admin.firestore().collection(collectionName);
    this.uid = uid;
    this.nestedPaths = nestedPaths;
  }

  async create(data) {
    const docRef = this.getNestedCollectionReference();
    await docRef.set(data);
    const docID = await getDocumentIdByContent(docRef, data);
    return [true, docID];
  }

  async read() {
    const docSnapshot = await this.getNestedCollectionReference(this.uid).get();
    if (!docSnapshot.exists) {
      return [false, "Document does not exist"];
    }
    return [true, docSnapshot.data()];
  }

  async update(data) {
    await this.getNestedCollectionReference(this.uid).update(data);
    return [true, NaN];
  }

  async delete() {
    await this.getNestedCollectionReference(this.uid).delete();
    return [true, NaN];
  }

  async readPaths() {
    const docs = await this.getNestedCollectionReference().listDocuments();
    const paths = docs.map((doc) => doc.path.split("/")[1]);
    return [true, paths];
  }

  async readAll() {
    let paths = await this.readPaths();
    paths = paths[1];
    const allDocs = {};
    for (const path of paths) {
      const iterFirestore = new Firestore(this.collectionName, path);
      const docSnapshot = await iterFirestore.read();
      allDocs[path] = docSnapshot[1];
    }
    return [true, allDocs];
  }

  getNestedCollectionReference(uid = null) {
    let collectionRef = this.collection;
    for (let i = 0; i < this.nestedPaths.length; i += 2) {
      if (this.nestedPaths.length > i + 1) {
        collectionRef = collectionRef.doc(this.nestedPaths[i]).collection(this.nestedPaths[i + 1]);
      } else {
        collectionRef = collectionRef.doc(this.nestedPaths[i]);
      }
    }
    return uid ? collectionRef.doc(uid) : collectionRef.doc();
  }
}
