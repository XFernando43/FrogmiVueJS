import { defineStore } from "pinia";
import { Feature } from "../models/feature.model";

export const useFeatureStore = defineStore('featureStore', {
    state: () => ({
        features: [] as Feature[],
    }),
    getters: {
        getFeatureByID: (state) => (id: number) => {
            return state.features.find(feature => feature.id === id);
        }
    },
    actions: {
        async fetchFeatures() {
            try {
                const response = await fetch('http://localhost:3000/api/v1/reports?page=1&per_page=10');
                if (!response.ok) {
                    throw new Error('Failed to fetch features');
                }
                const data = await response.json();
                this.setFeatures(data.data);
                console.log(data);
            } catch (error) {
                console.error('Error fetching features:', error);
                throw error; 
            }
        },
        setFeatures(features: Feature[]) {
            this.features = features;
        }
    }
});
