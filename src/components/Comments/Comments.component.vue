<template>
  <div class="container bg-slate-200 shadow-2xl p-4 rounded-lg overflow-auto">
    <h2 class="pl-5 font-semibold text-2xl Slabe text-left">Comments:</h2>
    <!-- <textarea name="textarea" rows="10" cols="50">Write something here</textarea>
    -->

    <ComentTextArea/>

    <div class="flex flex-col p-4" v-for="(comment, index) in comments" :key="index">
        <div class="flex flex-col bg-slate-300 p-4 rounded-md">
            <h3 class=" rounded-xl text-lg font-semibold">{{ comment.owner }}</h3>
            <p class=" Slabe font-mono">{{ comment.text }}</p>
        </div>
    </div>



  </div>
</template>

<script lang="ts">

  import ComentTextArea from './ComentTextArea.vue';

export default {

  data() {
    return {
      comments: [
        {
          owner: "Juan Pérez",
          text: "¡Este artículo es realmente útil! Gracias por compartir esta información.",
        },
        {
          owner: "María García",
          text: "No estoy seguro de estar de acuerdo con todo lo que se dice aquí. Creo que hay otros puntos de vista a considerar.",
        },
        {
          owner: "Carlos Rodríguez",
          text: "Interesante perspectiva. Me gustaría aprender más sobre este tema.",
        },
        {
          owner: "Ana Martínez",
          text: "¡Increíble trabajo! Me encantaría ver más contenido como este en el futuro.",
        },
        {
          owner: "Ana Martínez",
          text: "¡Increíble trabajo! Me encantaría ver más contenido como este en el futuro.",
        },
        {
          owner: "Ana Martínez",
          text: "¡Increíble trabajo! Me encantaría ver más contenido como este en el futuro.",
        },
        {
          owner: "Ana Martínez",
          text: "¡Increíble trabajo! Me encantaría ver más contenido como este en el futuro.",
        },
        {
          owner: "Ana Martínez",
          text: "¡Increíble trabajo! Me encantaría ver más contenido como este en el futuro.",
        },
        {
          owner: "Ana Martínez",
          text: "¡Increíble trabajo! Me encantaría ver más contenido como este en el futuro.",
        },
        {
          owner: "Ana Martínez",
          text: "¡Increíble trabajo! Me encantaría ver más contenido como este en el futuro.",
        },
        {
          owner: "Ana Martínez",
          text: "¡Increíble trabajo! Me encantaría ver más contenido como este en el futuro.",
        },
        {
          owner: "Ana Martínez",
          text: "¡Increíble trabajo! Me encantaría ver más contenido como este en el futuro.",
        },
        {
          owner: "Ana Martínez",
          text: "¡Increíble trabajo! Me encantaría ver más contenido como este en el futuro.",
        },
        {
          owner: "Ana Martínez",
          text: "¡Increíble trabajo! Me encantaría ver más contenido como este en el futuro.",
        },
        {
          owner: "Ana Martínez",
          text: "¡Increíble trabajo! Me encantaría ver más contenido como este en el futuro.",
        },
        {
          owner: "Ana Martínez",
          text: "¡Increíble trabajo! Me encantaría ver más contenido como este en el futuro.",
        },
        {
          owner: "Ana Martínez",
          text: "¡Increíble trabajo! Me encantaría ver más contenido como este en el futuro.",
        },
        {
          owner: "Ana Martínez",
          text: "¡Increíble trabajo! Me encantaría ver más contenido como este en el futuro.",
        },
        {
          owner: "Ana Martínez",
          text: "¡Increíble trabajo! Me encantaría ver más contenido como este en el futuro.",
        },
        {
          owner: "Ana Martínez",
          text: "¡Increíble trabajo! Me encantaría ver más contenido como este en el futuro.",
        },
        {
          owner: "Ana Martínez",
          text: "¡Increíble trabajo! Me encantaría ver más contenido como este en el futuro.",
        },
        {
          owner: "Ana Martínez",
          text: "¡Increíble trabajo! Me encantaría ver más contenido como este en el futuro.",
        },
      ],
    };
  },
  components:{
    ComentTextArea
  }
};
</script>

<style scoped>
.container {
  max-width: 1400px;
  /* height: 100%; */
  height: 550px;
}

</style>
