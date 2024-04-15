// import { defineStore } from "pinia";

// export const useGoogleMap = defineStore("map", {
//   state: () => ({
//     map: null,
//     featureId: 0,
//   }),
//   getters: {},
//   actions: {
//     async initMap(): Promise<void> {
//         if (!this.feature) {
//           return;
//         }
  
//         const position = {
//           lat: this.feature.latitude,
//           lng: this.feature.longitude,
//         };
//         const { Map } = (await google.maps.importLibrary(
//           "maps"
//         )) as google.maps.MapsLibrary;
//         this.map = new Map(document.getElementById("map") as HTMLElement, {
//           zoom: 12,
//           center: position,
//           mapId: "DEMO_MAP_ID",
//         });
//         new google.maps.Marker({
//           map: this.map,
//           position: position,
//           title: "Uluru",
//         });
//       },
//     },
// });
