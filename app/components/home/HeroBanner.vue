<template>
  <section class="w-full relative overflow-hidden">
    <div class="absolute inset-0 bg-cover bg-center" :style="{ backgroundImage: `url(${bgImage})` }" role="img" aria-label="Fondo de cocina de repostería"></div>
    <div class="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/50 to-primary/30"></div>
    <div class="relative max-w-container-max mx-auto px-md lg:px-lg py-20 md:py-28">
      <div class="max-w-2xl">
        <h1 class="text-white font-display-lg text-display-lg mb-6 text-balance">
          Proveemos insumos de repostería <br /><span class="text-accent-orange">para profesionales.</span>
        </h1>
        <p class="text-white/80 font-body-lg text-body-lg mb-8 max-w-prose">
          Distribuimos marcas como Nestlé, Rich's, Nescafé y Master Martini en todo Lima.
        </p>

        <div class="flex items-center gap-2 text-white/70 font-label-md text-label-md mb-8">
          <span class="material-symbols-outlined text-sm">location_on</span>
          <span>Av. Guardia Civil 377, La Campiña - Chorrillos</span>
        </div>

        <NuxtLink to="/categorias/lacteos"
          class="inline-flex items-center gap-2 bg-secondary hover:bg-red-700 text-white font-label-md text-label-md py-3 px-8 rounded-lg transition-colors shadow-lg">
          Ver Catálogo
          <span class="material-symbols-outlined text-sm">arrow_forward</span>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
const bgImage = '/img/bg2.jpg';
</script>
