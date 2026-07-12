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

useHead({
  link: [
    { rel: 'canonical', href: 'https://azrahel98.github.io/dpsac/' }
  ]
});

useSchemaOrg([
  defineLocalBusiness({
    name: 'Distribuidora PRETEL',
    description: 'Distribución de insumos para repostería profesional en Lima.',
    logo: 'https://azrahel98.github.io/dpsac/img/bg.jpg',
    address: {
      addressLocality: 'Lima',
      addressRegion: 'Lima',
      addressCountry: 'PE'
    }
  }),
  defineWebSite({
    name: 'Distribuidora PRETEL'
  })
]);
</script>
