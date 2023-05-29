import {
  collection,
  doc,
  serverTimestamp,
  setDoc,
  getDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "./index";

export const addPortfolio = async (data: any, userId: string) => {
  const docRef = doc(collection(db, "portfolio"));

  await setDoc(docRef, {
    ...data,
    id: docRef.id,
    createdAt: serverTimestamp(),
  });

  return docRef.id;
};

export const updatePortfolioById = async (
  data: any,
  userId: string,
  id: string
) => {
  const docRef = doc(db, "portfolio", id);
  await updateDoc(docRef, data as any);
};
