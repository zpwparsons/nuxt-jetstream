<script lang="ts" setup>
useHead({
  htmlAttrs: {
    class: 'h-full bg-gray-50'
  },
  bodyAttrs: {
    class: 'h-full'
  },
});
</script>

<template>
  <ClientOnly>
    <NavBar />

    <div class="py-10 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <slot />
    </div>
  </ClientOnly>
</template>
