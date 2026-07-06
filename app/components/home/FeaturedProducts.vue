<template>
  <section class="w-full py-lg bg-surface-container-lowest">
    <div class="max-w-container-max mx-auto px-md">
      <div class="flex justify-between items-end mb-8">
        <div>
          <h2 class="font-headline-md text-headline-md text-primary mb-2">
            Productos Destacados
          </h2>
          <p class="font-body-md text-body-md text-on-surface-variant">
            Insumos de alta calidad para repostería.
          </p>
        </div>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <ProductCard
          v-for="producto in destacados"
          :key="producto.id"
          :producto="producto"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const destacados = useProductosDestacados();
</script>
