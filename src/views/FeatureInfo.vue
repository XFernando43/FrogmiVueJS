<template>
<div class="flex flex-col justify-center items-center p-10 gap-12">
  <h1 class="font-semibold text-2xl Roboto">Feature {{ feature.title }}</h1>    

  <div class="flex flex-col md:flex-row gap-6 content-between items-center text-white">
    
    <googleMapComponent :latitud="feature.latitude" :longitud="feature.longitude"/>
    <featureInfoComponent :_feature="feature" />

  </div>  

  <CommentsComponent :reportId="featureId" />

</div>

</template>

<script lang="ts">
import googleMapComponent from "../components/features/googleMap.component.vue";
import CommentsComponent from "../components/Comments/Comments.component.vue";
import featureInfoComponent from "../components/features/featureInfo.component.vue";
import { mapActions, mapState } from "pinia";
import { useFeatureStore } from "../stores/features";

export default {
  data() {
    return {
      featureId: Number(this.$route.params.id), // aca error de los comentarios
    };
  },
  mounted() {
    // this.featureId = ;
    this.getFeatureByID(this.featureId);
  },
  methods: {
    ...mapActions(useFeatureStore, ["getFeatureByID"])
  },
  computed: {
    ...mapState(useFeatureStore, ["feature"]),
  },
  components: {
    CommentsComponent,
    googleMapComponent,
    featureInfoComponent
  },
};
</script>

<style scoped>


</style>
