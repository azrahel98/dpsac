<template>
  <main class="w-full">
    <section class="w-full bg-surface-muted">
      <div class="max-w-container-max mx-auto px-md py-lg">
        <nav class="flex items-center gap-2 font-label-sm text-label-sm text-outline mb-3">
          <NuxtLink to="/" class="hover:text-primary transition-colors">Inicio</NuxtLink>
          <span class="material-symbols-outlined text-sm">chevron_right</span>
          <span class="text-on-surface">{{ categoria.nombre }}</span>
        </nav>
        <div class="flex items-center gap-6">
          <div class="w-20 h-20 rounded-full bg-surface-muted flex-shrink-0 overflow-hidden">
            <img :src="categoria.imagen" :alt="categoria.nombre" class="w-full h-full object-cover" />
          </div>
          <div>
            <h1 class="font-headline-lg text-headline-lg text-primary mb-2">{{ categoria.nombre }}</h1>
            <p class="font-body-md text-body-md text-on-surface-variant">{{ categoria.descripcion }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="w-full py-lg bg-surface-container-lowest">
      <div class="max-w-container-max mx-auto px-md">
        <CategoryTabs v-if="categoria.subcategorias.length > 1" :subcategorias="categoria.subcategorias"
          :activa="subcategoriaActiva" :mostrar-todas="true" @select="filtrarPorSubcategoria" />

        <div v-if="productosFiltrados.length > 0"
          class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <ProductCard v-for="producto in productosFiltrados" :key="producto.id" :producto="producto" />
        </div>
        <div v-else class="text-center py-xl">
          <p class="font-body-md text-body-md text-on-surface-variant">
            No hay productos en esta categoría todavía.
          </p>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
const route = useRoute();

const categoria = computed(() => {
  const cat = useCategoria(route.params.slug as string);
  if (!cat)
    throw createError({
      statusCode: 404,
      statusMessage: 'Categoría no encontrada',
    });
  return cat;
});

const subcategoriaActiva = ref('');

const productosFiltrados = computed(() => {
  if (!subcategoriaActiva.value)
    return useProductos().filter((p) => p.categoriaId === categoria.value.id);
  return useProductosPorSubcategoria(subcategoriaActiva.value);
});

function filtrarPorSubcategoria(id: string) {
  subcategoriaActiva.value = id;
}

useSeoMeta({
  title: computed(() => `${categoria.value.nombre} - Distribuidora PRETEL`),
  description: computed(
    () =>
      `Compra ${categoria.value.nombre} al por mayor. ${categoria.value.descripcion}`,
  ),
  ogTitle: computed(() => `${categoria.value.nombre} - Distribuidora PRETEL`),
});
</script>
