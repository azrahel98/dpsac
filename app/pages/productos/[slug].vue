<template>
  <main class="w-full">
    <div class="max-w-container-max mx-auto px-md py-lg">
      <nav class="flex items-center gap-2 font-label-sm text-label-sm text-outline mb-8">
        <NuxtLink to="/" class="hover:text-primary transition-colors">Inicio</NuxtLink>
        <span class="material-symbols-outlined text-sm">chevron_right</span>
        <NuxtLink :to="`/categorias/${categoria.slug}`" class="hover:text-primary transition-colors">
          {{ categoria.nombre }}
        </NuxtLink>
        <span class="material-symbols-outlined text-sm">chevron_right</span>
        <span class="text-on-surface">{{ producto.nombre }}</span>
      </nav>

      <div class="flex flex-col md:flex-row gap-8 mb-xl">
        <div class="w-full md:w-1/2">
          <div
            class="relative aspect-square bg-white rounded-xl flex items-center justify-center p-8 border border-border-light">
            <NuxtImg :src="producto.imagen" :alt="producto.nombre" class="max-h-full max-w-full object-contain" />
          </div>
        </div>

        <div class="w-full md:w-1/2 flex flex-col gap-6">
          <div>
            <span class="font-label-sm text-label-sm text-outline">{{ producto.sku }}</span>
            <h1 class="font-headline-lg text-headline-lg text-primary mt-1">{{ producto.nombre }}</h1>
          </div>

          <p class="font-body-md text-body-md text-on-surface-variant">{{ producto.descripcion }}</p>

          <div class="flex flex-wrap gap-2">
            <NuxtLink :to="`/categorias/${categoria.slug}`"
              class="px-3 py-1 rounded-full bg-surface-container-low text-on-surface-variant font-label-sm text-label-sm hover:bg-surface-container-high transition-colors">
              {{ categoria.nombre }}
            </NuxtLink>
            <span class="px-3 py-1 rounded-full bg-secondary/10 text-secondary font-label-sm text-label-sm">
              {{ subcategoria.nombre }}
            </span>
          </div>
        </div>
      </div>

      <section v-if="producto.recetas.length > 0" class="mb-xl">
        <h2 class="font-headline-md text-headline-md text-primary mb-6">Recetas</h2>
        <div class="space-y-6">
          <RecipeDetail v-for="receta in producto.recetas" :key="receta.id" :receta="receta" />
        </div>
      </section>

      <section v-if="productosRelacionados.length > 0">
        <h2 class="font-headline-md text-headline-md text-primary mb-6">Productos Relacionados</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <ProductCard v-for="rel in productosRelacionados" :key="rel.id" :producto="rel" />
        </div>
      </section>
    </div>
  </main>
</template>

<script setup lang="ts">
const route = useRoute();

const producto = computed(() => {
  const prod = useProducto(route.params.slug as string);
  if (!prod)
    throw createError({
      statusCode: 404,
      statusMessage: 'Producto no encontrado',
    });
  return prod;
});

const categoria = computed(() => {
  const cat = useCategoriaPorId(producto.value.categoriaId);
  if (!cat)
    throw createError({
      statusCode: 404,
      statusMessage: 'Categoría no encontrada',
    });
  return cat;
});

const subcategoria = computed(() => {
  return categoria.value.subcategorias.find(
    (s) => s.id === producto.value.subcategoriaId,
  )!;
});

const productosRelacionados = computed(() =>
  useProductosRelacionados(producto.value),
);

useSeoMeta({
  title: computed(() => `${producto.value.nombre} - Distribuidora PRETEL`),
  description: computed(() => producto.value.descripcion),
  ogTitle: computed(() => `${producto.value.nombre} - Distribuidora PRETEL`),
  ogDescription: computed(() => producto.value.descripcion),
  ogImage: computed(() => `https://azrahel98.github.io/dpsac${producto.value.imagen}`),
});

useHead({
  link: [
    { rel: 'canonical', href: computed(() => `https://azrahel98.github.io/dpsac${route.path}`) }
  ]
});

useSchemaOrg([
  defineProduct({
    name: producto.value.nombre,
    description: producto.value.descripcion,
    image: `https://azrahel98.github.io/dpsac${producto.value.imagen}`,
    sku: producto.value.sku,
  })
]);
</script>
