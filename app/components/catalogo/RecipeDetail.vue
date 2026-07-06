<template>
  <div class="bg-surface-container-low rounded-xl p-6">
    <div class="flex gap-6 flex-col md:flex-row">
      <img :src="receta.imagen" :alt="receta.titulo" loading="lazy"
        class="w-full md:w-64 h-48 rounded-lg object-cover flex-shrink-0" />
      <div class="flex flex-col gap-4 min-w-0">
        <div>
          <h3 class="font-headline-md text-headline-md text-primary mb-1">{{ receta.titulo }}</h3>
          <MarkdownRenderer :content="receta.descripcion" class="text-on-surface-variant" />
        </div>

        <div class="flex items-center gap-4">
          <span class="flex items-center gap-1 font-label-md text-label-md text-outline">
            <span class="material-symbols-outlined text-sm">schedule</span>
            {{ receta.tiempoPreparacion }}
          </span>
          <span class="flex items-center gap-1 font-label-md text-label-md text-outline">
            <span class="material-symbols-outlined text-sm">signal_cellular_alt</span>
            {{ dificultadLabel }}
          </span>
        </div>

        <div>
          <h4 class="font-label-md text-label-md text-primary mb-2">Ingredientes</h4>
          <ul class="space-y-1 font-body-md text-body-md text-on-surface">
            <li v-for="(ing, i) in receta.ingredientes" :key="ing" class="flex gap-2 animate-fade-in"
              :style="{ animationDelay: `${i * 80}ms` }">
              <span class="text-secondary flex-shrink-0">•</span>
              <MarkdownRenderer :content="ing" />
            </li>
          </ul>
        </div>

        <div>
          <h4 class="font-label-md text-label-md text-primary mb-2">Pasos</h4>
          <ol class="space-y-3 font-body-md text-body-md text-on-surface">
            <li v-for="(paso, i) in receta.pasos" :key="i" class="flex gap-3 animate-fade-in"
              :style="{ animationDelay: `${i * 120}ms` }">
              <span
                class="flex-shrink-0 w-7 h-7 rounded-full bg-secondary text-white text-sm font-bold flex items-center justify-center">
                {{ i + 1 }}
              </span>
              <span class="pt-0.5">
                <MarkdownRenderer :content="paso" />
              </span>
            </li>
          </ol>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Receta } from '~/types/catalogo';

const props = defineProps<{
  receta: Receta;
}>();

const dificultadLabel = computed(() => {
  switch (props.receta.dificultad) {
    case 'fácil':
      return 'Fácil';
    case 'media':
      return 'Media';
    case 'difícil':
      return 'Difícil';
    default:
      return props.receta.dificultad;
  }
});
</script>

<style scoped>
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(8px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 0.4s ease-out both;
}

@media (prefers-reduced-motion: reduce) {
  .animate-fade-in {
    animation: none;
    opacity: 1;
  }
}
</style>
