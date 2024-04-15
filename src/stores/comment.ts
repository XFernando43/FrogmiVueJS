import { defineStore } from "pinia";
import { _Comment } from "../models/comment.model";

export const useCommentStore = defineStore("comments", {
  state: () => ({
    comments: [] as _Comment[],
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
      } catch (error) {
        console.error("Error fetching Comments:", error);
        throw error;
      }
    },

    async postComment(featureId:number, text:string) {
      try {
        const url = `http://localhost:3000/api/v1/comments/${featureId}`;
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ comment: text }) 
        });
    
        if (!response.ok) {
          throw new Error("Failed to create Comment");
        }
        location.reload();
      } catch (error) {
        console.error("Error creating Comment:", error);
        throw error;
      }
    }
    

  },
});
