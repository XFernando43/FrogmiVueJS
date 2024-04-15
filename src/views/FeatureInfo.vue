<template>
  <div class="flex flex-col justify-center items-center p-10 gap-12">
    <h1>Report for Feature ID: {{ $route.params.id }}</h1>

    <div id="map" class="maps shadow-2xl"></div>
    <CommentsComponent :reportId="featureId" />

  </div>
</template>

<script lang="ts">
import CommentsComponent from "../components/Comments/Comments.component.vue";
import { mapActions, mapState } from 'pinia';
import { useFeatureStore } from "../stores/features";

export default {
  data() {
    return {
      map: null,
      featureId: 0, // Inicializa featureId como 0
    };
  },
  mounted() {
    this.initMap();
    this.featureId = Number(this.$route.params.id);
    this.getFeatureByID(this.featureId); // Asegúrate de usar this.featureId aquí
    
  },
  methods: {
    async initMap(): Promise<void> {
      const position = { lat: this.feature?.latitude, lng: this.feature?.longitude };
      const { Map } = await google.maps.importLibrary("maps") as google.maps.MapsLibrary;
      this.map = new Map(
        document.getElementById('map') as HTMLElement,
        {
          zoom: 12,
          center: position,
          mapId: 'DEMO_MAP_ID',
        }
      );
      const marker = new google.maps.Marker({
        map: this.map,
        position: position,
        title: 'Uluru'
      });
    },
    ...mapActions(useFeatureStore,['getFeatureByID'])
  },
  components: {
    CommentsComponent,
  },
  computed:{
    ...mapState(useFeatureStore,['features','feature'])
  }
};
</script>

<style scoped>
.maps {
  width: 900px;
  height: 500px;
  border: 5px solid blue;
  border-radius: 20px;
}
</style>
