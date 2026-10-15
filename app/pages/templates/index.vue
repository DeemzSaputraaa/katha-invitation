<template>
  <div />
</template>

<script setup lang="ts">
const route = useRoute()
await navigateTo({ path: '/katalog', query: route.query, hash: route.hash }, { redirectCode: 301 })
</script>
