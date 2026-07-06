<template>
  <div class="prose prose-sm max-w-none text-on-surface" v-html="html"></div>
</template>

<script setup lang="ts">
import { marked } from 'marked';

const props = defineProps<{
  content: string;
}>();

const html = computed(() => {
  if (!props.content) return '';
  return marked.parse(props.content, { async: false }) as string;
});
</script>
