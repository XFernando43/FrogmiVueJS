<script lang="ts">
import { useFeatureStore } from '../../stores/features';
import { mapActions, mapState,  } from 'pinia';

export default {
  data() {
    return {
      map: null,
      featureId: 0,
    };
  },
  methods: {
    async initMap(): Promise<void> {
      if (!this.feature) {
        return;
      }

      const position = {
        lat: this.feature.latitude,
        lng: this.feature.longitude,
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
    ...mapActions(useFeatureStore, ["getFeatureByID"])
  },
  mounted(){
    this.initMap();
    this.featureId = Number(this.$route.params.id);
    this.getFeatureByID(this.featureId);
  },
  computed:{
    ...mapState(useFeatureStore, ["features", "feature"]),
  }
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
