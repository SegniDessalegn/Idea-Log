<template>
    <div v-if="canShow">
        <div class="flex flex-col bg-gray-100 p-10 mt-20 rounded-lg items-center max-w-lg mx-auto gap-5">
            <div class="text-lg"><b>Add new idea</b></div>
            <input v-model="title" type="text" placeholder="Title" class="input input-bordered input-primary w-full" />
            <textarea v-model="description" placeholder="Description"
                class="textarea textarea-bordered textarea-primary w-full"></textarea>
            <span v-if="loading" class="loading loading-ring loading-lg"></span>
            <div v-if="success" class="text-green-500">Idea added successfully!</div>
            <div v-if="failed" class="text-red-500">Failed to add idea. Please try again.</div>
            <div class="w-full flex gap-10 justify-around">
                <button class="btn px-5 border border-black">Back</button>
                <button @click="createIdea" class="btn btn-primary px-10">Add</button>
            </div>
        </div>
    </div>
    <div v-else class="min-h-screen flex justify-center items-center">
        <span class="loading loading-ring loading-lg"></span>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { onBeforeMount } from "vue"
const { getCurrentUserLocalStorage } = useFirebaseAuth()

const canShow = ref(false);
onBeforeMount(() => {
    if (!getCurrentUserLocalStorage()) {
        navigateTo("login")
    } else {
        canShow.value = true
    }
})
const title = ref('');
const description = ref('');
const loading = ref(false);
const success = ref(false);
const failed = ref(false);

const createIdea = () => {
};
</script>
