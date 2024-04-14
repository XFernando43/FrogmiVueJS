<template>
  <div class="flex flex-col gap-10 p-8 items-center">
    <!-- ---------------------- -->
    <div
      v-for="(feature, index) in features"
      :key="index"
      class="flex flex-row gap-8 justify-between items-center card-animation bg-teal-700 p-5 rounded-lg shadow-2xl md:w-3/4 lg: max-w-4xl"
    >
      <div class="flex flex-col max-w-96 Slabo">
        <h2 class="uppercase text-lg font-black text-white mb-2">
          {{ feature.place }}
        </h2>
        <p class="text-white">{{ feature.title }}</p>
        <p class="text-white mb-2 sm:mb-0">
          Location: {{ feature.place }}
        </p>
        <p class="text-white">Mag: {{ feature.mag }}</p>
        <p class="text-white">Tsunami: {{ feature.tsunami }}</p>
        <p class="text-white">code: {{ feature.identifier }}</p>


        <div
          class="pt-5 flex flex-col sm:flex-row justify-between items-center"
        >
          <a
            :href="feature.url"
            target="_blank"
            class="bg-red-400 p-3 rounded-lg text-white hover:underline mb-2 sm:mb-0"
            >More info</a
          >
          <RouterLink to="/report" class="inline-block">
            <button class="bg-green-950 text-white p-2 rounded-lg">
              More Information
            </button></RouterLink
          >
        </div>
      </div>

      <div class="shadow-2xl rounded-md border-4 border-white">
        <img
          class="bg-cover"
          src="https://ichef.bbci.co.uk/ace/ws/304/amz/worldservice/live/assets/images/2014/05/06/140506111542_mapa_sismos_304x171_usnwspacifictsunamiwarningcenterptwc.jpg"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { onMounted } from 'vue';
  import { useFeatureStore } from '../stores/features';

  export default {
    setup(){
      const featureStore = useFeatureStore();
      onMounted(()=>{
        featureStore.fetchFeatures();
      })
    },
    computed:{
      features(){
        const featureStore = useFeatureStore();
        return featureStore.features;
      }
    }
  };
</script>

<style scoped>
/* @keyframes grow {
    from {
      transform: scale(1);
    }
    to {
      transform: scale(1.5);
    }
  } */

.card-animation:hover {
  transform: scale(1.1);
  transition: transform 0.2s ease;
}
</style>