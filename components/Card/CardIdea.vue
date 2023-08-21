<template>
    <div class="card w-96 hover:shadow-xl transition duration-500 cursor-pointer m-3 border-[1px] border-gray">
        <div class="card-body">
            <h2 class="card-title">{{ title }}</h2>
            <p>{{ description }}</p>
            <div class="card-actions justify-end">
                <button class="btn btn-sm btn-primary">Done</button>
                <button class="btn btn-sm btn-error">Delete</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { defineProps, reactive } from "vue";

const props = defineProps({
    title: String,
    description: String,
});
</script>
