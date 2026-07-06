<template>
  <div class="flex gap-2 overflow-x-auto pb-2 scrollbar-hide" role="tablist">
    <button
      v-if="mostrarTodas"
      role="tab"
      :aria-selected="activa === ''"
      class="whitespace-nowrap px-4 py-2 rounded-full font-label-md text-label-md transition-colors"
      :class="
        activa === ''
          ? 'bg-secondary text-white shadow-sm'
          : 'bg-surface-container-low text-on-surface-variant hover:bg-surface-container-high'
      "
      @click="$emit('select', '')"
    >
      Todas
    </button>
    <button
      v-for="sub in subcategorias"
      :key="sub.id"
      role="tab"
      :aria-selected="activa === sub.id"
      class="whitespace-nowrap px-4 py-2 rounded-full font-label-md text-label-md transition-colors"
      :class="
        activa === sub.id
          ? 'bg-secondary text-white shadow-sm'
          : 'bg-surface-container-low text-on-surface-variant hover:bg-surface-container-high'
      "
      @click="$emit('select', sub.id)"
    >
      {{ sub.nombre }}
    </button>
  </div>
</template>

<script setup lang="ts">
import type { Subcategoria } from '~/types/catalogo';

withDefaults(
  defineProps<{
    subcategorias: Subcategoria[];
    activa: string;
    mostrarTodas?: boolean;
  }>(),
  { mostrarTodas: false },
);

defineEmits<{
  select: [id: string];
}>();
</script>
