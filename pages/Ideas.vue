<script setup>
import { onMounted, ref } from "vue"

const { getCurrentUserLocalStorage } = useFirebaseAuth()
const { getIdeas } = useFirebaseStorage()

const ideas = ref([])
const canShow = ref(false);
onMounted(() => {
    if (!getCurrentUserLocalStorage()) {
        navigateTo("login")
    } else {
        canShow.value = true
        getIdeas().then((received_ideas) => {
            ideas.value = received_ideas
        }).catch((error) => console.log(error))
    }
})
</script>

<template>
    <div v-if="canShow">
        <div class="text-3xl font-bold p-5 m-5">These are your idea logs</div>
        <div class="divider m-0"></div>
        <div class="tabs tabs-boxed bg-white pl-10 my-5 flex justify-between items-center nd w-full">
            <div class="flex">
                <a class="tab tab-active">Not Done</a>
                <a class="tab">Done</a>
            </div>
            <div class="btn btn-primary mx-10">Add New</div>
        </div>
        <div class="flex justify-center flex-wrap">
            <div v-for="(idea, index) in ideas" :key="index">
                <CardIdea :title="idea.title" :description="idea.description" />
            </div>
        </div>
    </div>
    <div v-else class="min-h-screen flex justify-center items-center">
        <span class="loading loading-ring loading-lg"></span>
    </div>
</template>
