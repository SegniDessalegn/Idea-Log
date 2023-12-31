import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import nuxtStorage from "nuxt-storage";

export default function () {
  const { $auth } = useNuxtApp();
  const { addNewUser, getUserInfo } = useFirebaseStorage();

  const getCurrentUserLocalStorage = () => {
    return nuxtStorage.localStorage.getData("user")
  }

  const makeUser = (username, email, uid) => {
    return {
      username: username,
      email: email,
      uid: uid,
    };
  };

  const registerUser = async (email, password, username = "") => {
    try {
      const cred = await createUserWithEmailAndPassword($auth, email, password);

      if (cred) {
        nuxtStorage.localStorage.setData(
          "user",
          makeUser(username, email, cred.user.uid),
          30,
          "d"
        );
        addNewUser(username, email, cred.user.uid);
        return true;
      }
    } catch (error) {
      return false;
    }
    return false;
  };

  const loginUser = async (email, password) => {
      return signInWithEmailAndPassword($auth, email, password).then(async (cred) => {
      const userInfo = await getUserInfo(cred.user.uid);
      nuxtStorage.localStorage.setData(
        "user",
        makeUser(userInfo.username, userInfo.email, cred.user.uid),
        30,
        "d"
      );
      return true
    }).catch((error)=>{
      return false
    })
  };

  const logoutUser = () => {
    nuxtStorage.localStorage.removeItem("user");
  };

  return {
    getCurrentUserLocalStorage,
    registerUser,
    loginUser,
    logoutUser,
  };
}
