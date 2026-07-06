<template>
  <header
    class="bg-background text-primary font-headline-md text-headline-md shadow-sm docked full-width top-0 z-50 sticky border-b border-border-light">
    <div class="flex flex-col w-full max-w-container-max mx-auto px-md py-base">
      <div class="flex items-center justify-between py-2 gap-lg">
        <div class="flex items-center gap-md">
          <NuxtLink class="flex-shrink-0" to="/">
            <img alt="Distribuidora PRETEL" class="h-12 w-auto object-contain"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnn8LuL6uO3JVIjMWocDjjEl-sooP4GvigzZxsJ_HxxlSG68PksY9fdm2KadESj0wWEZ4GxwTj1FS0wYNHQNb5BPuOYZHPHaARWSeyTxjg9XzsXV9Y76YwLI5Xa-eDfkCvc45-KL_y6vHnLFJUaImRJjkDrpqRZbJkVUZWXcd7W16YL2YE1pNpWS0H01fN6Rocvi_z_4MgVo6X4RJDzAOmKmm8yWAx_c0ck4_LiZsHhG6qkEsPmSF0bhI51Biuqas_PLTi6Q1ctZE" />
          </NuxtLink>
        </div>

        <div ref="searchDesktopRef" class="hidden md:flex flex-1 max-w-2xl relative">
          <div class="relative w-full">
            <input ref="searchInputDesktop" v-model="searchTerm" placeholder="¿Qué estás buscando?" type="text"
              aria-label="Buscar productos"
              class="w-full h-10 pl-4 pr-12 rounded-full border border-outline-variant/30 bg-surface-container-low text-on-surface font-body-md text-body-md focus:ring-2 focus:ring-accent-orange focus:outline-none"
              @focus="showDropdown = true" />
            <button
              class="absolute right-1 top-1 h-10 w-10 bg-accent-orange rounded-full flex items-center justify-center text-white hover:bg-orange-600 transition-colors"
              aria-label="Buscar">
              <span class="material-symbols-outlined text-sm">search</span>
            </button>
          </div>
          <div v-if="showDropdown && resultados.length > 0" ref="dropdownDesktop"
            class="absolute top-full left-0 right-0 mt-2 bg-surface-container-lowest border border-border-light rounded-xl shadow-lg max-h-80 overflow-y-auto z-50">
            <NuxtLink v-for="p in resultados" :key="p.id" :to="`/productos/${p.slug}`"
              class="flex items-center gap-3 px-4 py-3 hover:bg-surface-muted transition-colors"
              @click="seleccionarProducto">
              <img :src="useAsset(p.imagen)" :alt="p.nombre" class="w-10 h-10 rounded-lg object-cover" loading="lazy" />
              <div class="min-w-0">
                <p class="font-label-md text-label-md text-primary truncate">{{ p.nombre }}</p>
                <p class="font-label-sm text-label-sm text-outline">{{ p.sku }}</p>
              </div>
            </NuxtLink>
          </div>
          <div v-if="showDropdown && searchTerm.trim() && resultados.length === 0"
            class="absolute top-full left-0 right-0 mt-2 bg-surface-container-lowest border border-border-light rounded-xl shadow-lg z-50">
            <p class="px-4 py-3 font-body-md text-body-md text-on-surface-variant">Sin resultados</p>
          </div>
        </div>

        <div class="w-10"></div>
      </div>

      <div ref="searchMobileRef" class="md:hidden mt-3 mb-1 relative">
        <div class="relative w-full">
          <input ref="searchInputMobile" v-model="searchTerm" placeholder="¿Qué estás buscando?" type="text"
            aria-label="Buscar productos"
            class="w-full h-10 pl-4 pr-12 rounded-full border border-outline-variant/30 bg-surface-container-low text-on-surface font-body-md text-body-md focus:ring-2 focus:ring-accent-orange focus:outline-none"
            @focus="showDropdown = true" />
          <button
            class="absolute right-1 top-1 h-10 w-10 bg-accent-orange rounded-full flex items-center justify-center text-white"
            aria-label="Buscar">
            <span class="material-symbols-outlined text-sm">search</span>
          </button>
        </div>
        <div v-if="showDropdown && resultados.length > 0" ref="dropdownMobile"
          class="absolute top-full left-0 right-0 mt-2 bg-surface-container-lowest border border-border-light rounded-xl shadow-lg max-h-80 overflow-y-auto z-50">
          <NuxtLink v-for="p in resultados" :key="p.id" :to="`/productos/${p.slug}`"
            class="flex items-center gap-3 px-4 py-3 hover:bg-surface-muted transition-colors"
            @click="seleccionarProducto">
            <img :src="useAsset(p.imagen)" :alt="p.nombre" class="w-10 h-10 rounded-lg object-cover" loading="lazy" />
            <div class="min-w-0">
              <p class="font-label-md text-label-md text-primary truncate">{{ p.nombre }}</p>
              <p class="font-label-sm text-label-sm text-outline">{{ p.sku }}</p>
            </div>
          </NuxtLink>
        </div>
        <div v-if="showDropdown && searchTerm.trim() && resultados.length === 0"
          class="absolute top-full left-0 right-0 mt-2 bg-surface-container-lowest border border-border-light rounded-xl shadow-lg z-50">
          <p class="px-4 py-3 font-body-md text-body-md text-on-surface-variant">Sin resultados</p>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
const searchTerm = ref('');
const showDropdown = ref(false);
const searchInputDesktop = ref<HTMLInputElement>();
const searchInputMobile = ref<HTMLInputElement>();
const dropdownDesktop = ref<HTMLDivElement>();
const dropdownMobile = ref<HTMLDivElement>();
const searchDesktopRef = ref<HTMLDivElement>();
const searchMobileRef = ref<HTMLDivElement>();

function normalizar(str: string) {
  return str
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .toLowerCase();
}

const resultados = computed(() => {
  const term = normalizar(searchTerm.value);
  if (!term) return [];
  return useProductos().filter(
    (p) =>
      normalizar(p.nombre).includes(term) || normalizar(p.sku).includes(term),
  );
});

function seleccionarProducto() {
  searchTerm.value = '';
  showDropdown.value = false;
  searchInputDesktop.value?.blur();
  searchInputMobile.value?.blur();
}

function onClickOutside(e: MouseEvent) {
  const target = e.target as Node;
  const isInside =
    dropdownDesktop.value?.contains(target) ||
    dropdownMobile.value?.contains(target) ||
    searchDesktopRef.value?.contains(target) ||
    searchMobileRef.value?.contains(target);
  if (!isInside) {
    showDropdown.value = false;
  }
}

onMounted(() => document.addEventListener('click', onClickOutside));
onUnmounted(() => document.removeEventListener('click', onClickOutside));
</script>
