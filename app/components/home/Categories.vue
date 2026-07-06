<template>
  <section class="w-full py-lg bg-surface">
    <div class="max-w-container-max mx-auto px-md">
      <div class="mb-6">
        <h2 class="font-headline-md text-headline-md text-primary">
          Categorías Principales
        </h2>
      </div>
      <div class="flex flex-wrap justify-center gap-6">
        <NuxtLink
          v-for="cat in categorias"
          :key="cat.id"
          :to="`/categorias/${cat.slug}`"
          class="group flex flex-col bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm border border-border-light hover:shadow-lg transition-shadow w-64"
        >
          <div class="h-52 bg-white flex items-center justify-center p-4">
            <img
              :src="useAsset(cat.imagen)"
              :alt="cat.nombre"
              loading="lazy"
              class="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
            />
          </div>
          <div class="p-3 text-center">
            <span class="font-label-md text-label-md text-on-surface group-hover:text-primary transition-colors font-semibold">
              {{ cat.nombre }}
            </span>
          </div>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const categorias = useCategorias();
</script>