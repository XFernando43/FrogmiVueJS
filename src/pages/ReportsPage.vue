<template>
  <div class="flex flex-col gap-10 p-8 items-center">
    
    <!-- ---------------------- -->
    <div v-for="(feature, index) in features" :key="index" class="flex flex-row gap-8 justify-between items-center card-animation bg-teal-700 p-5 rounded-lg shadow-2xl md:w-3/4 lg: max-w-4xl">      
      <div class="flex flex-col max-w-96 Slabo">
        <h2 class="uppercase text-lg font-black text-white mb-2 ">{{ feature.properties.type }}</h2>
        <p class="text-white">{{ feature.properties.title }}</p>
        <p class="text-white mb-2 sm:mb-0">Location: {{ feature.properties.place }}</p>
        <p class="text-white">Mag: {{ feature.properties.mag }}</p>
        <p class="text-white">Tsunami: {{ feature.properties.tsunami }}</p>
        <p class="text-white">code: {{ feature.properties.code }}</p>
        
        <p class="text-white">
          Alert: {{ feature.properties.alert ? 'true' : 'false' }}
        </p>

        <div class="pt-5 flex flex-col sm:flex-row justify-between items-center">
          <a :href="feature.properties.url" target="_blank" class="bg-red-400 p-3 rounded-lg text-white hover:underline mb-2 sm:mb-0">More info</a>
          <RouterLink to="/report" class="inline-block"> <button class=" bg-green-950 text-white p-2 rounded-lg"> More Information </button></RouterLink>
        </div>
      </div>

      <div class=" shadow-2xl rounded-md border-4 border-white">
        <img class="bg-cover" src="https://ichef.bbci.co.uk/ace/ws/304/amz/worldservice/live/assets/images/2014/05/06/140506111542_mapa_sismos_304x171_usnwspacifictsunamiwarningcenterptwc.jpg" />
      </div>

    </div>

  </div>

</template>



<script lang="ts">
export default {
  data() {
    return {
      features: [
        {
          type: "Feature",
          properties: {
            mag: 1.89999998,
            place: "5 km SW of Volcano, Hawaii",
            time: 1712976456340,
            updated: 1712976551040,
            tz: null,
            url: "https://earthquake.usgs.gov/earthquakes/eventpage/hv74169732",
            detail:
              "https://earthquake.usgs.gov/earthquakes/feed/v1.0/detail/hv74169732.geojson",
            felt: null,
            cdi: null,
            mmi: null,
            alert: null,
            status: "automatic",
            tsunami: 0,
            sig: 56,
            net: "hv",
            code: "74169732",
            ids: ",hv74169732,",
            sources: ",hv,",
            types: ",origin,phase-data,",
            nst: 23,
            dmin: 0.01034,
            rms: 0.129999995,
            gap: 86,
            magType: "md",
            type: "earthquake",
            title: "M 1.9 - 5 km SW of Volcano, Hawaii",
          },
          geometry: {
            type: "Point",
            coordinates: [
              -155.274337768555, 19.4148330688477, 10.3000001907349,
            ],
          },
          id: "hv74169732",
        },
        {
          type: "Feature",
          properties: {
            mag: 1.4,
            place: "69 km N of Karluk, Alaska",
            time: 1712976361387,
            updated: 1712976427295,
            tz: null,
            url: "https://earthquake.usgs.gov/earthquakes/eventpage/ak0244s1ctm2",
            detail:
              "https://earthquake.usgs.gov/earthquakes/feed/v1.0/detail/ak0244s1ctm2.geojson",
            felt: null,
            cdi: null,
            mmi: null,
            alert: null,
            status: "automatic",
            tsunami: 0,
            sig: 30,
            net: "ak",
            code: "0244s1ctm2",
            ids: ",ak0244s1ctm2,",
            sources: ",ak,",
            types: ",origin,phase-data,",
            nst: null,
            dmin: null,
            rms: 0.29,
            gap: null,
            magType: "ml",
            type: "earthquake",
            title: "M 1.4 - 69 km N of Karluk, Alaska",
          },
          geometry: {
            type: "Point",
            coordinates: [-154.4959, 58.1895, 45.4],
          },
          id: "ak0244s1ctm2",
        },
        {
          type: "Feature",
          properties: {
            mag: 2.24,
            place: "23 km W of Puako, Hawaii",
            time: 1712975845470,
            updated: 1712978026950,
            tz: null,
            url: "https://earthquake.usgs.gov/earthquakes/eventpage/hv74169707",
            detail:
              "https://earthquake.usgs.gov/earthquakes/feed/v1.0/detail/hv74169707.geojson",
            felt: null,
            cdi: null,
            mmi: null,
            alert: null,
            status: "reviewed",
            tsunami: 0,
            sig: 77,
            net: "hv",
            code: "74169707",
            ids: ",hv74169707,",
            sources: ",hv,",
            types: ",origin,phase-data,",
            nst: 16,
            dmin: 0.302,
            rms: 0.2,
            gap: 246,
            magType: "md",
            type: "earthquake",
            title: "M 2.2 - 23 km W of Puako, Hawaii",
          },
          geometry: {
            type: "Point",
            coordinates: [-156.064666666667, 19.9536666666667, 27.17],
          },
          id: "hv74169707",
        },
        {
          type: "Feature",
          properties: {
            mag: 4.3,
            place: "19 km ENE of Istiaía, Greece",
            time: 1712974994906,
            updated: 1712979149040,
            tz: null,
            url: "https://earthquake.usgs.gov/earthquakes/eventpage/us7000mbu8",
            detail:
              "https://earthquake.usgs.gov/earthquakes/feed/v1.0/detail/us7000mbu8.geojson",
            felt: null,
            cdi: null,
            mmi: null,
            alert: null,
            status: "reviewed",
            tsunami: 0,
            sig: 284,
            net: "us",
            code: "7000mbu8",
            ids: ",us7000mbu8,",
            sources: ",us,",
            types: ",origin,phase-data,",
            nst: 73,
            dmin: 0.808,
            rms: 1.02,
            gap: 51,
            magType: "mb",
            type: "earthquake",
            title: "M 4.3 - 19 km ENE of Istiaía, Greece",
          },
          geometry: {
            type: "Point",
            coordinates: [23.3732, 38.9986, 10],
          },
          id: "us7000mbu8",
        },
        {
          type: "Feature",
          properties: {
            mag: 1.5,
            place: "63 km N of Karluk, Alaska",
            time: 1712974663940,
            updated: 1712974838177,
            tz: null,
            url: "https://earthquake.usgs.gov/earthquakes/eventpage/ak0244s16p4q",
            detail:
              "https://earthquake.usgs.gov/earthquakes/feed/v1.0/detail/ak0244s16p4q.geojson",
            felt: null,
            cdi: null,
            mmi: null,
            alert: null,
            status: "automatic",
            tsunami: 0,
            sig: 35,
            net: "ak",
            code: "0244s16p4q",
            ids: ",ak0244s16p4q,",
            sources: ",ak,",
            types: ",origin,phase-data,",
            nst: null,
            dmin: null,
            rms: 1.03,
            gap: null,
            magType: "ml",
            type: "earthquake",
            title: "M 1.5 - 63 km N of Karluk, Alaska",
          },
          geometry: {
            type: "Point",
            coordinates: [-154.4588, 58.1362, 10.6],
          },
          id: "ak0244s16p4q",
        },
        {
          type: "Feature",
          properties: {
            mag: 1.88,
            place: "5 km SW of Volcano, Hawaii",
            time: 1712974178330,
            updated: 1712974262990,
            tz: null,
            url: "https://earthquake.usgs.gov/earthquakes/eventpage/hv74169677",
            detail:
              "https://earthquake.usgs.gov/earthquakes/feed/v1.0/detail/hv74169677.geojson",
            felt: null,
            cdi: null,
            mmi: null,
            alert: null,
            status: "automatic",
            tsunami: 0,
            sig: 54,
            net: "hv",
            code: "74169677",
            ids: ",hv74169677,",
            sources: ",hv,",
            types: ",origin,phase-data,",
            nst: 23,
            dmin: 0.01019,
            rms: 0.129999995,
            gap: 56,
            magType: "md",
            type: "earthquake",
            title: "M 1.9 - 5 km SW of Volcano, Hawaii",
          },
          geometry: {
            type: "Point",
            coordinates: [
              -155.270492553711, 19.4051666259766, 11.4899997711182,
            ],
          },
          id: "hv74169677",
        },
        {
          type: "Feature",
          properties: {
            mag: 1.6,
            place: "39 km N of Chickaloon, Alaska",
            time: 1712972165317,
            updated: 1712972271575,
            tz: null,
            url: "https://earthquake.usgs.gov/earthquakes/eventpage/ak0244s0p95f",
            detail:
              "https://earthquake.usgs.gov/earthquakes/feed/v1.0/detail/ak0244s0p95f.geojson",
            felt: null,
            cdi: null,
            mmi: null,
            alert: null,
            status: "automatic",
            tsunami: 0,
            sig: 39,
            net: "ak",
            code: "0244s0p95f",
            ids: ",ak0244s0p95f,",
            sources: ",ak,",
            types: ",origin,phase-data,",
            nst: null,
            dmin: null,
            rms: 0.58,
            gap: null,
            magType: "ml",
            type: "earthquake",
            title: "M 1.6 - 39 km N of Chickaloon, Alaska",
          },
          geometry: {
            type: "Point",
            coordinates: [-148.4754, 62.155, 39.1],
          },
          id: "ak0244s0p95f",
        },
        {
          type: "Feature",
          properties: {
            mag: 0.77,
            place: "2 km NNW of The Geysers, CA",
            time: 1712971698910,
            updated: 1712971796040,
            tz: null,
            url: "https://earthquake.usgs.gov/earthquakes/eventpage/nc74033556",
            detail:
              "https://earthquake.usgs.gov/earthquakes/feed/v1.0/detail/nc74033556.geojson",
            felt: null,
            cdi: null,
            mmi: null,
            alert: null,
            status: "automatic",
            tsunami: 0,
            sig: 9,
            net: "nc",
            code: "74033556",
            ids: ",nc74033556,",
            sources: ",nc,",
            types: ",nearby-cities,origin,phase-data,",
            nst: 9,
            dmin: 0.01028,
            rms: 0.02,
            gap: 118,
            magType: "md",
            type: "earthquake",
            title: "M 0.8 - 2 km NNW of The Geysers, CA",
          },
          geometry: {
            type: "Point",
            coordinates: [-122.76017, 38.7903328, 1.54],
          },
          id: "nc74033556",
        },
        {
          type: "Feature",
          properties: {
            mag: 1.73,
            place: "24 km NNW of Tehachapi, CA",
            time: 1712971315760,
            updated: 1712971981290,
            tz: null,
            url: "https://earthquake.usgs.gov/earthquakes/eventpage/ci40712016",
            detail:
              "https://earthquake.usgs.gov/earthquakes/feed/v1.0/detail/ci40712016.geojson",
            felt: null,
            cdi: null,
            mmi: null,
            alert: null,
            status: "automatic",
            tsunami: 0,
            sig: 46,
            net: "ci",
            code: "40712016",
            ids: ",ci40712016,",
            sources: ",ci,",
            types:
              ",focal-mechanism,nearby-cities,origin,phase-data,scitech-link,",
            nst: 38,
            dmin: 0.1105,
            rms: 0.2,
            gap: 86,
            magType: "ml",
            type: "earthquake",
            title: "M 1.7 - 24 km NNW of Tehachapi, CA",
          },
          geometry: {
            type: "Point",
            coordinates: [-118.5931667, 35.3093333, 3.86],
          },
          id: "ci40712016",
        },
        {
          type: "Feature",
          properties: {
            mag: 1.27,
            place: "11 km SW of Lakeport, CA",
            time: 1712968673610,
            updated: 1712968766629,
            tz: null,
            url: "https://earthquake.usgs.gov/earthquakes/eventpage/nc74033541",
            detail:
              "https://earthquake.usgs.gov/earthquakes/feed/v1.0/detail/nc74033541.geojson",
            felt: null,
            cdi: null,
            mmi: null,
            alert: null,
            status: "automatic",
            tsunami: 0,
            sig: 25,
            net: "nc",
            code: "74033541",
            ids: ",nc74033541,",
            sources: ",nc,",
            types: ",nearby-cities,origin,phase-data,",
            nst: 8,
            dmin: 0.1998,
            rms: 0.01,
            gap: 159,
            magType: "md",
            type: "earthquake",
            title: "M 1.3 - 11 km SW of Lakeport, CA",
          },
          geometry: {
            type: "Point",
            coordinates: [-123.0186691, 38.9841652, 8.05],
          },
          id: "nc74033541",
        },
      ],
    };
  },
  methods: {},
};
</script>

<style scoped>

  /* @keyframes grow {
    from {
      transform: scale(1);
    }
    to {
      transform: scale(1.5);
    }
  } */

  .card-animation:hover {
    transform: scale(1.1);
    transition: transform 0.2s ease;
  }



</style>
