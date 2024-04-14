import { defineStore } from "pinia";
import { Feature } from "../models/feature.model";

export const useFeatureStore = defineStore("features", {
  state: () => ({
    features: [] as Feature[],
    currentPage: 1,
  }),
  getters: {
    getFeatureByID: (state) => (id: number) => {
      return state.features.find((feature) => feature.id === id);
    },
  },
  actions: {
    async fetchFeatures(pagination: number) {
      try {
        const response = await fetch(
          `http://localhost:3000/api/v1/reports?page=${this.currentPage}&per_page=10`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch features");
        }
        const data = await response.json();
        this.setFeatures(data.data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching features:", error);
        throw error;
      }
    },
    setFeatures(features: Feature[]) {
      this.features = features;
    },
    nextPage() {
      this.currentPage++;
      this.fetchFeatures(this.currentPage);
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
        this.fetchFeatures(this.currentPage);
      }
    },
    getTsunamiText(indice:number){
        const aux = this.features.find((feature)=> feature.id === indice);
        return aux?.tsunami ? 'False':'True';
    }
  },
});
