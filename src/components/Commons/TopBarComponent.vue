<template>
    <div class="flex flex-col md:flex-row md:items-center gap-4 px-6 py-4 justify-between bg-stone-700 font-roboto">
      <!-- Logo -->
      <div class="flex items-center justify-center max-w-56">
        <img src="../../assets/img/logo-frogmi.png" alt="frogmi logo" class="max-h-24">
      </div>
  
      <!-- Menú -->
      <div class="flex flex-row gap-5 text-lg font-semibold text-white">
        <button class="nav-button">Módulos</button>
        <button class="nav-button">Soluciones</button>
        <button class="nav-button">Clientes</button>
        <button class="nav-button">Quiénes Somos</button>
        <button class="nav-button">Blog</button>
      </div>
  
      <!-- Botones -->
      <div class="flex items-center justify-center md:justify-end gap-4">
        <button class="rounded-lg py-2 px-4 font-semibold text-white bg-green-700 hover:bg-green-400 focus:outline-none transition-colors duration-300 ease-in-out transform hover:scale-105" @click="creditos">Créditos</button>
        <button class="rounded-lg py-2 px-4 font-semibold text-white bg-green-700 hover:bg-green-400 focus:outline-none transition-colors duration-300 ease-in-out transform hover:scale-105">
          <RouterLink class="text-white" to="/">Home</RouterLink>
        </button>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { RouterLink } from "vue-router";
  
  export default {
    methods: {
      creditos() {
        window.alert("MADE IT FOR FROGMI");
      },
    },
    components: {
      RouterLink,
    },
  };
  </script>
  
  <style scoped>
  /* Estilos personalizados para el menú */
  .nav-button {
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    background-color: transparent;
    border: 2px solid #4caf50;
    color: #4caf50;
    font-weight: bold;
    transition: background-color 0.3s, color 0.3s;
  }
  
  .nav-button:hover {
    background-color: #4caf50;
    color: white;
  }
  </style>
  