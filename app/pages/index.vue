<template>
    <main class="w-full">
        <HomeHeroBanner />
        <HomeCategories />
        <HomeFeaturedProducts />
        <HomeBrandsBanner />
        <!-- <HomeInfoBanner /> -->
    </main>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Distribuidora PRETEL - Insumos de Repostería Profesional',
  description:
    "Distribuimos marcas como Nestlé, Rich's, Nescafé y Master Martini en Lima. Insumos para pastelerías, cafeterías y panaderías.",
  ogTitle: 'Distribuidora PRETEL - Insumos de Repostería Profesional',
  ogDescription:
    "Distribuimos marcas como Nestlé, Rich's, Nescafé y Master Martini en Lima.",
  ogType: 'website',
});
</script>
