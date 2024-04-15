<template>
  <div class="container mx-auto px-4 py-8">
    <div class="overflow-x-auto Slabo">
      <table class="min-w-full border border-gray-400">
        <thead
          class=" bg-violet-600 border-2 text-sm font-semibold text-white uppercase tracking-wider">
          <tr>
            <th class="px-6 py-3 border-r-4">ID</th>
            <th class="px-6 py-3 border-r-4">Title</th>
            <th class="px-6 py-3 border-r-4">Place</th>
            <th class="px-6 py-3 border-r-4">Mag</th>
            <th class="px-6 py-3 border-r-4">Location</th>
            <th class="px-6 py-3 border-r-4">Tsunami</th>
            <th class="px-6 py-3 border-r-4">Actions</th>
          </tr>
        </thead>
        <tbody class="border-2 text-center text-gray-900">
          <tr
            v-for="feature in features"
            :key="feature.id"
            class="font-semibold border-b-4 hover:bg-indigo-500"
          >
            <td class="px-6 border-r-4 py-4">{{ feature.identifier }}</td>
            <td class="px-6 border-r-4 py-4">{{ feature.title }}</td>
            <td class="px-6 border-r-4 py-4">{{ feature.place }}</td>
            <td class="px-6 border-r-4 py-4">{{ feature.mag }}</td>
            <td class="px-6 border-r-4 py-4">
                {{ feature.longitude }} , {{ feature.latitude }}
            </td>
            <td class="px-6 border-r-4 py-4">{{ getTsunamiText(feature.id) }}</td>
            <td class="px-6 border-r-4 py-4 flex flex-row items-center justify-between gap-2">

                <a :href="feature.url" target="_blank" class="bg-red-400 p-3 rounded-lg text-white hover:underline mb-2 sm:mb-0">Url</a>
                <RouterLink :to="'/feature/' + feature.id" class="inline-block">
                  <button class="bg-green-950 text-white p-2 rounded-lg"> Info </button>
                </RouterLink>
            </td>
            
          </tr>
        </tbody>
      </table>
    </div>

    <div class="mt-4 flex justify-between items-center">
      <button
        @click="prevPage"
        class="px-4 py-2 bg-gray-200 text-gray-600 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 disabled:opacity-50"
      >
        Prev
      </button>
      <button
        @click="nextPage"
        class="px-4 py-2 bg-gray-200 text-gray-600 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 disabled:opacity-50"
      >
        Next
      </button>
    </div>
  </div>

</template>

<script lang="ts">

  import { useFeatureStore } from "../../stores/features.ts";
  import { mapActions, mapState } from 'pinia';

  export default {
    data() {
      return {
        
      };
    },
    computed: {
      ...mapState(useFeatureStore,['currentPage','features'])
    },
    methods: {
      ...mapActions(useFeatureStore,['nextPage','prevPage','getTsunamiText','fetchFeatures','getFeatureByID']),
    },
    mounted() {
      this.fetchFeatures(this.currentPage);
    },
  };
</script>

<style scoped>
</style>
