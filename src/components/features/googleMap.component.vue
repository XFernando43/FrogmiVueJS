<script lang="ts">
export default {
  data() {
    return {
      map: null,
    };
  },
  methods: {
    async initMap(): Promise<void> {
      const position = {
        lat: this.latitud || Number(localStorage.getItem('lat')),
        lng: this.longitud || Number(localStorage.getItem('lng')),
      };
      const { Map } = (await google.maps.importLibrary(
        "maps"
      )) as google.maps.MapsLibrary;
      this.map = new Map(document.getElementById("map") as HTMLElement, {
        zoom: 12,
        center: position,
        mapId: "DEMO_MAP_ID",
      });
      new google.maps.Marker({
        map: this.map,
        position: position,
        title: "Uluru",
      });
    },
  },
  mounted(){
    this.initMap();
  },
  props:{
    latitud:{
      type:Number,
      required:true,
    },
    longitud:{
      type:Number,
      required:true,
    }
  },
};
</script>

<template>
  <div id="map" class="maps shadow-2xl w-full md:w-1/2"></div>
</template>

<style scoped>
.maps {
  width: 1200px;
  height: 600px;
  border: 2px solid blue;
  border-radius: 10px;
}
</style>

