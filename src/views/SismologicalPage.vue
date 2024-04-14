<template>
  <div class="flex flex-col justify-center items-center p-10 gap-12">
    <div id="map" class="maps shadow-2xl"></div>


    <CommentsComponent />

  </div>
</template>

<script lang="ts">
import CommentsComponent from "../components/Comments/Comments.component.vue";
export default {
  data() {
    return {
      reports: [],
      comments: [],
      map: null,
    };
  },
  mounted() {
    this.initMap();
  },
  methods: {
    async initMap(): Promise<void> {
      const position = { lat: -25.344, lng: 131.031 };
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
    }
  },
  components: {
    CommentsComponent,
  },
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
