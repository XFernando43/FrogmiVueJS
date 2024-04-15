<template>
  <div class="container bg-slate-200 shadow-2xl p-4 rounded-lg overflow-auto">
    <h2 class="pl-5 font-semibold text-2xl Slabe text-left">Comments:</h2>
    
    <!-- <ComentTextArea :reportId="reportId"/> -->
    <ComentTextArea :reportId="reportId"/>
    
    <div
      class="flex flex-col p-4"
      v-for="(comment, index) in comments"
      :key="index"
    >
      <div class="flex flex-col bg-slate-300 p-4 rounded-md">
        <h3 class="rounded-xl text-lg font-semibold">{{ comment.created_at }}</h3>
        <p class="Slabe font-mono">{{ comment.body }}</p>
      </div>
    </div>


  </div>
</template>

<script lang="ts">
import ComentTextArea from "./ComentTextArea.vue";
import { useCommentStore } from "../../stores/comment";
import { mapActions, mapState } from "pinia";

export default {
  data() {
    return {};
  },
  components: {
    ComentTextArea,
  },
  computed: {
    ...mapState(useCommentStore, ["comments"]),
  },
  methods: {
    ...mapActions(useCommentStore, ["fetchComment"]),
  },
  props: {
    reportId: {
      type: Number,
      required: true, 
    },
  },
  mounted() {
    this.fetchComment(this.reportId);
  },
};
</script>

<style scoped>
.container {
  max-width: 1400px;
  height: 550px;
}
</style>
