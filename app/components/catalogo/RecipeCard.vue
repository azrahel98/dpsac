<template>
  <button
    class="flex items-start gap-4 p-4 rounded-lg border border-border-light bg-surface-container-lowest hover:shadow-md transition-shadow w-full text-left"
    @click="$emit('select', receta)"
  >
    <NuxtImg
      :src="receta.imagen"
      :alt="receta.titulo"
      loading="lazy"
      class="w-20 h-20 rounded-lg object-cover flex-shrink-0"
    />
    <div class="flex flex-col gap-1 min-w-0">
      <h4 class="font-headline-md text-headline-md text-primary text-[16px] leading-tight">
        {{ receta.titulo }}
      </h4>
      <p class="font-body-md text-body-md text-on-surface-variant line-clamp-2 text-sm">
        {{ receta.descripcion }}
      </p>
      <div class="flex items-center gap-3 mt-1">
        <span class="flex items-center gap-1 font-label-sm text-label-sm text-outline">
          <span class="material-symbols-outlined text-sm">schedule</span>
          {{ receta.tiempoPreparacion }}
        </span>
        <span class="flex items-center gap-1 font-label-sm text-label-sm text-outline">
          <span class="material-symbols-outlined text-sm">signal_cellular_alt</span>
          {{ dificultadLabel }}
        </span>
      </div>
    </div>
    <span class="material-symbols-outlined text-outline ml-auto flex-shrink-0 mt-1">
      chevron_right
    </span>
  </button>
</template>

<script setup lang="ts">
import type { Receta } from '~/types/catalogo';

const props = defineProps<{
  receta: Receta;
}>();

defineEmits<{
  select: [receta: Receta];
}>();

const dificultadLabel = computed(() => {
  switch (props.receta.dificultad) {
    case 'fácil':
      return 'Fácil';
    case 'media':
      return 'Media';
    case 'difícil':
      return 'Difícil';
  }
});
</script>
