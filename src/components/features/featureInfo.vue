<template>

    <div class="rounded-xl flex flex-col gap-3 font-semibold p-5 w-full md:w-1/2" style="background-color: #232336;">
      <h2 class="text-center font-semibold text-2xl">{{ _feature.place }}</h2>
      <div class="flex flex-col gap-2  font-serif font-normal Slabo">
        <p>ID: {{ _feature.id }}</p>
        <p>Mag: {{ _feature.mag }}</p>
        <p>Mag Type: {{ _feature.mag_type }}</p>
        <p>Identifier: {{ _feature.identifier }}</p>
        <p>Time: {{ _feature.time }}</p>
        <p>Latitude: {{ _feature.latitude }}</p>
        <p>Longitude: {{ _feature.longitude }}</p>
        <p>Tsunami: {{ _feature.tsunami }}</p>
      </div>
    </div>

</template>

<script lang="ts">
import { Feature } from '../../models/feature.model';


    export default{
        data(){
            return{

            }
        },
        props:{
            _feature:{
                type: Object as () => Feature,
                required:true
            }
        }
    }
</script>

<style>

</style>