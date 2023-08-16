<script setup>
import { ref } from 'vue';

const { registerUser } = useFirebaseAuth();

const email = ref('');
const password = ref('');
const loading = ref(false)
const registered = ref(false)
const failed = ref(false)

async function handleRegistration() {
    try {
        loading.value = true
        const result = await registerUser(email.value, password.value);
        loading.value = false
        if (result) {
            registered.value = true
            setTimeout(() => {
                registered.value = false;
                navigateTo({ path: '/' })
            }, 3000);
        }
        else {
            failed.value = true
            setTimeout(() => {
                failed.value = false
            }, 3000);
        }
    } catch (error) {
        failed.value = true
        setTimeout(() => {
            failed.value = false
        }, 3000);
    }
}
</script>

<template>
    <div class="flex flex-col bg-gray-100 p-10 mt-20 rounded-lg items-center w-fit mx-auto gap-5">
        <div class="text-lg">Welcome, <b>Signup</b> to Idea Log</div>
        <input v-model="email" type="text" placeholder="Email" class="input input-bordered input-primary w-full max-w-xs" />
        <input v-model="password" type="password" placeholder="Password"
            class="input input-bordered input-primary w-full max-w-xs" />
        <span v-if="loading" class="loading loading-ring loading-lg"></span>
        <span v-if="registered" class="text-green-500">Registered</span>
        <span v-if="failed" class="text-red-500">Signup failed, please try again</span>
        <button @click="handleRegistration" class="btn btn-primary w-full max-w-xs">Signup</button>
        <div>If you already have an account, <nuxt-link to="login" class="link link-hover"><b>Login</b></nuxt-link></div>
    </div>
</template>
