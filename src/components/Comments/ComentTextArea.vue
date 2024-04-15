<template>

    <div class="flex flex-col gap-2 p-4 ">
        <textarea
            v-model="comment"
            class="w-full h-40 px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 placeholder-gray-400"
            placeholder="Write something here..."></textarea>
        <button 
            class="max-w-16 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:border-blue-300" 
            @click = "postComment(12,comment)">
            Post
        </button>
    </div>

</template>

<script lang="ts">
import { mapActions } from 'pinia';
import { useCommentStore } from '../../stores/comment';

export default {
    data() { 
        return {
            comment: '',
            featureId: 0,
        } 
    },
    methods: {
        ...mapActions(useCommentStore, ["postComment"]),

        prueba(){
            console.log(this.comment);
        }
    },
    // props: {
    //     reportId: {
    //         type: Number,
    //         required: true
    //     }
    // },
}

</script>

<style scoped></style>
