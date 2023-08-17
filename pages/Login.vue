<script setup>
const { loginUser } = useFirebaseAuth();

const email = ref('a@gmail.com');
const password = ref('12345678');
const loading = ref(false);
const success = ref(false);
const failed = ref(false);

const handleLogin = async () => {
  loading.value = true;
  success.value = false;
  failed.value = false;

  try {
    const result = await loginUser(email.value, password.value);
    if (!result){
        throw new Error("login failed")
    }
    success.value = true;
    setTimeout(() => {
        success.value = false;
        navigateTo("/")
    }, 1000);
  } catch (error) {
    failed.value = true;
    setTimeout(() => {
        failed.value = false;
    }, 1000);
  } finally {
    loading.value = false;
  }
};
</script>

<template>
  <div class="flex flex-col bg-gray-100 p-10 mt-20 rounded-lg items-center w-fit mx-auto gap-5">
    <div class="text-lg">Welcome back, <b>Login</b> to Idea Log</div>
    <input v-model="email" type="text" placeholder="Email" class="input input-bordered input-primary w-full max-w-xs" />
    <input v-model="password" type="password" placeholder="Password" class="input input-bordered input-primary w-full max-w-xs" />
    <span v-if="loading" class="loading loading-ring loading-lg"></span>
    <div v-if="success" class="text-green-500">Login successful!</div>
    <div v-if="failed" class="text-red-500">Login failed. Please check your credentials.</div>
    <button @click="handleLogin" class="btn btn-primary w-full max-w-xs">Log in</button>
    <div>If you do not have an account, you can <nuxt-link to="signup" class="link link-hover"><b>Signup</b></nuxt-link></div>
  </div>
</template>
