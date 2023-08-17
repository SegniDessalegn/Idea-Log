<script setup>
import { onBeforeMount } from "vue"
const { getCurrentUserLocalStorage } = useFirebaseAuth()

// onBeforeMount(()=>{
//   if (!getCurrentUserLocalStorage()) navigateTo("/login")
// })
</script>
<template>
  <div class="flex flex-col items-center justify-center min-h-screen">
    <h1 class="text-4xl font-bold mb-4">Welcome to Idea Log</h1>
    <p class="text-lg">🚧Under development🚧</p>
    <div class="flex">
      <nuxt-link to="/ideas" class="btn btn-neutral m-5">Explore Ideas</nuxt-link>
      <nuxt-link to="/signup" class="btn btn-primary m-5">Signup early</nuxt-link>
    </div>
  </div>
</template>

