import { defineStore } from "pinia";
import { _Comment } from "../models/comment.model";

export const useCommentStore = defineStore("comments", {
  state: () => ({
    comments: [] as _Comment[],
    feature: null,
    currentPage: 1,
  }),
  getters: {},
  actions: {
    async fetchComment(featureId: number) {
      try {
        const response = await fetch(
          `http://localhost:3000/api/v1/comments/${featureId}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch Comments");
        }
        const data = await response.json();
        this.comments = data.comments;
        console.log(data);
      } catch (error) {
        console.error("Error fetching Comments:", error);
        throw error;
      }
    },
  },
});
