import { createUserWithEmailAndPassword } from "firebase/auth";

export default function () {
  const { $auth } = useNuxtApp();

  const user = useState("fb_user", () => null)

  const registerUser = async (email, password) => {
    try {
      const userCreds = await createUserWithEmailAndPassword(
        $auth,
        email,
        password
      );
      if (userCreds) {
        user.value = userCreds.user;
        return true;
      }
    } catch (error) {
        console.log(error)
        return false;
    }
    return false;
  };

  return {
    user,
    registerUser,
  };
}
