<template>
  <NuxtLink
    :to="`/productos/${producto.slug}`"
    class="group flex flex-col bg-surface-container-lowest border border-border-light rounded-lg overflow-hidden shadow-[0px_4px_20px_rgba(0,31,63,0.05)] hover:shadow-[0px_8px_30px_rgba(0,31,63,0.12)] transition-shadow"
  >
    <div class="relative aspect-[4/3] bg-white flex items-center justify-center p-4 border-b border-border-light">
      <img
        :src="useAsset(producto.imagen)"
        :alt="producto.nombre"
        loading="lazy"
        class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
      />
    </div>
    <div class="p-4 flex flex-col flex-grow gap-2">
      <span class="font-label-sm text-label-sm text-outline">{{ producto.sku }}</span>
      <h3 class="font-label-md text-label-md text-primary line-clamp-2 leading-tight break-words">
        {{ producto.nombre }}
      </h3>
      <div v-if="producto.recetas.length > 0" class="flex items-center gap-1 mt-auto">
        <span class="material-symbols-outlined text-sm text-secondary">menu_book</span>
        <span class="font-label-sm text-label-sm text-on-surface-variant">
          {{ producto.recetas.length }} {{ producto.recetas.length === 1 ? 'receta' : 'recetas' }}
        </span>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { Producto } from '~/types/catalogo';

defineProps<{
  producto: Producto;
}>();
</script>
