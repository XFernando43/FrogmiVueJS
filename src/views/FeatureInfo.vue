<template>
  <div class="flex flex-col justify-center items-center p-10 gap-12">
    <h1 class=" font-semibold text-2xl Roboto">Feature {{ feature.title }}</h1>    
    <div id="map" class="maps shadow-2xl" style="position: relative;">
      <div class=" rounded-md text-white font-semibold p-3 card-position" style="position: absolute; background-color: #232336;">
        <p>Title:  {{ feature.title }}</p>
        <p>Place:  {{ feature.place }}</p>
        <p>Mag:  {{ feature.mag }}</p>
        <p>Mag Type:  {{ feature.mag_type }}</p>
        <p>Time:  {{ feature.time }}</p>
      </div>
    </div>
    <CommentsComponent :reportId="featureId" />
  </div>
</template>

<script lang="ts">
import CommentsComponent from "../components/Comments/Comments.component.vue";
import { mapActions, mapState } from "pinia";
import { useFeatureStore } from "../stores/features";

export default {
  data() {
    return {
      map: null,
      featureId: 0,
    };
  },
  mounted() {
    this.featureId = Number(this.$route.params.id);
    this.getFeatureByID(this.featureId);
    this.initMap();
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

    ...mapActions(useFeatureStore, ["getFeatureByID"]),
  },
  computed: {
    ...mapState(useFeatureStore, ["features", "feature"]),
  },
  components: {
    CommentsComponent,
  },
};
</script>

<style scoped>
.maps {
  width: 1200px;
  height: 600px;
  border: 2px solid blue;
  border-radius: 10px;
}

.card-position{
  left: 5%;
  bottom: 5%;
}

</style>
