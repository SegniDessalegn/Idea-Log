import {
  getFirestore,
  collection,
  onSnapshot,
  addDoc,
  deleteDoc,
  doc,
  query,
  where,
  orderBy,
  serverTimestamp,
  updateDoc,
  setDoc,
  getDoc
} from "firebase/firestore";

import nuxtStorage from "nuxt-storage";

export default function () {
  async function getUserInfo(param_uid = null) {
    const user = nuxtStorage.localStorage.getData("user");
    if (!param_uid && !user) return
    var uid
    if (!user) uid = param_uid
    if (!param_uid) uid = user.uid
    const db = getFirestore();
    const docRef = doc(db, "users", uid);
    return (await getDoc(docRef)).data();
  }

  function addNewUser(username, email, uid) {
    const db = getFirestore();
    var userRef = doc(db, "users", uid);
    setDoc(
      userRef,
      {
        username: username,
        email: email,
        ideas: [],
      },
      { merge: true }
    );
  }

  return {
    getUserInfo,
    addNewUser,
  };
}
