<template>
  <div class="flex flex-col p-4" v-for="(comment, index) in comments" :key="index">
    <div class="flex flex-col bg-teal-500 border-2 border-zinc-100 p-4 rounded-md">
      <h3 class="rounded-xl text-lg font-semibold">Anomimo</h3>
      <p class="Slabe font-mono">{{ comment.body }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import ComentTextArea from "./ComentTextArea.vue";
import { useCommentStore } from "../../stores/comment";
import { mapActions, mapState } from "pinia";

export default {
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
    featureId: {
      type: Number,
      required: true,
    },
  },
  mounted() {
    this.fetchComment(this.featureId);
  },
};
</script>

<style scoped>
.container {
  max-width: 1400px;
  height: 550px;
}
</style>
