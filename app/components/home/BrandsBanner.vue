<template>
  <section class="w-full py-xl bg-white border-b border-border-light">
    <div class="max-w-container-max mx-auto px-md">
      <p class="font-label-md text-label-md text-outline text-center mb-2 uppercase tracking-wider">
        Proveedores
      </p>
      <p class="font-body-md text-body-md text-on-surface-variant text-center mb-8">
        Trabajamos con las mejores marcas del rubro
      </p>
      <div class="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 mb-xl">
        <NuxtImg v-for="marca in marcas" :key="marca.nombre" :src="marca.logo" :alt="marca.nombre" loading="lazy"
          class="h-12 md:h-16 w-auto object-contain opacity-80 hover:opacity-100 transition-all duration-300" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const marcas = [
  {
    nombre: 'Nestlé',
    logo: '/img/NESTLE.png',
  },
  {
    nombre: "Rich's",
    logo: '/img/RICHS.png',
  },

  {
    nombre: 'Master Martini',
    logo: '/img/MARTINI.png',
  },
];
</script>
