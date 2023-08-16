<script setup>
const { registerUser } = useFirebaseAuth() // auto-imported

const creds = reactive({
  email: "",
  password: ""
})

async function handleRegistration() {
  await registerUser(creds.email, creds.password)
}
</script>
<template>
  <div class="flex flex-col items-center justify-center min-h-screen">
    <h1 class="text-4xl font-bold mb-4">Welcome to Idea Log</h1>
    <p class="text-lg">🚧Under development🚧</p>
  </div>
</template>

