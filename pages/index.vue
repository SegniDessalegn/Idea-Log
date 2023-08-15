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
    Welcome
</template>
