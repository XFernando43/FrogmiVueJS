import { defineStore } from "pinia";
import { Feature } from "../models/feature.model";

export const useFeatureStore = defineStore("features", {
  state: () => ({
    features: [] as Feature[],
    feature: {} as Feature,
    currentPage: 1,
  }),
  getters: {},
  actions: {
    async fetchFeatures(pagination: number) {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL_BASE}/features?page=${pagination}&per_page=10`);
        if (!response.ok) {
          throw new Error("Failed to fetch features");
        }
        const data = await response.json();
        this.setFeatures(data.data);
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
    getTsunamiText(indice: number) {
      const aux = this.features.find((feature) => feature.id === indice);
      return aux?.tsunami ? "True" : "False";
    },
    async getFeatureByID(id: number) {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL_BASE}/features/${id}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch features");
        }
        const data = await response.json();
        this.feature = data.data;

        localStorage.setItem('lat',this.feature.latitude.toString());
        localStorage.setItem('lng',this.feature.longitude.toString());


      } catch (error) {
        console.error("Error fetching features:", error);
        throw error;
      }
    },
  },
});
