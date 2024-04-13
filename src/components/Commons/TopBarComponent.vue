<template>
    <div class="flex flex-row gap-2 p-4 justify-between bg-emerald-500">
        <h1 class="Slabo font-semibold text-2xl text-blue-800">Sismological reports</h1>
        
        <div class="flex flex-row gap-5">
            <button class=" rounded-lg p-3 font-semibold text-white bg-teal-500 hover:bg-teal-600 focus:outline-none focus:bg-teal-600 transition-colors duration-300 ease-in-out transform hover:scale-105" @click="creditos">Creditos</button>
            <button class=" rounded-lg p-3 font-semibold bg-teal-500 hover:bg-teal-600 focus:outline-none focus:bg-teal-600 transition-colors duration-300 ease-in-out transform hover:scale-105">
                <RouterLink class="text-white" to="home">
                    Back
                </RouterLink>
            </button>
        </div>

    </div>
</template>


<script lang="ts">

    export default{
        data(){
            return{

            }
        },
        methods:{
            creditos(){
                window.alert("MADE IT FOR FROGMI");
            }
        }
    }

</script>

<style scoped>

   

</style>