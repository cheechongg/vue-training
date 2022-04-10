import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";

import firebaseConfig from "@/config/firebase";

const firebaseInit = () => {
  const fire = initializeApp(firebaseConfig);
  const db = getFirestore(fire);

  return db;
};

export const getFireStoreCollection = (db) => async (collect, filter) => {
  const col = collection(db, collect);
  const snapshot = await getDocs(col);
  const list = snapshot.docs.map((doc) => doc.data());
  return list;
};

export default firebaseInit;
