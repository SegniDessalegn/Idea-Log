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
  getDoc,
} from "firebase/firestore";

import nuxtStorage from "nuxt-storage";

export default function () {
  async function getUserInfo(param_uid = null) {
    try {
      const user = nuxtStorage.localStorage.getData("user");
      if (!param_uid && !user) return;

      var uid;
      if (user) {
        uid = user.uid;
      } else {
        uid = param_uid;
      }

      const db = getFirestore();
      const docRef = doc(db, "users", uid);
      return (await getDoc(docRef)).data();
    } catch (error) {
      console.log(error);
    }
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

  async function getIdeas(){
    const uid = nuxtStorage.localStorage.getData("user").uid;
    console.log("user id", uid)
    const db = getFirestore();
    var userRef = doc(db, "users", uid);
    return (await getDoc(userRef)).data().ideas
  }

  return {
    getUserInfo,
    addNewUser,
    getIdeas
  };
}
