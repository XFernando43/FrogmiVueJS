<template>
    <div class="container bg-green-200 shadow-2xl p-4 rounded-lg overflow-auto">
      <h2 class="pl-5 font-semibold text-2xl Slabe text-left">Comments:</h2>
      <ComentTextArea :featureId="featureId"/>
      <CommentsList :featureId="featureId" />
    </div>
  </template>
   
  <script lang="ts">
  import ComentTextArea from "./ComentTextArea.vue";
  import CommentsList from "./CommentsList.vue";
  
  export default {
    components: {
      ComentTextArea,
      CommentsList,
    },
    props: {
      featureId: {
        type: Number,
        required: true, 
      },
    },
  };
  </script>
  
  <style scoped>
  .container {
    max-width: 1400px;
    height: 550px;
  }
  </style>
  