<script setup lang="ts">
onBeforeMount(() => {
  const darkMode = localStorage.getItem('darkMode')
  if (darkMode === 'true') {
    document.documentElement.classList.add('dark')
  }
})
</script>
<template class="dark">
  <NuxtLayout>
    <Toast />
    <ConfirmDialog />
    <NuxtPage />
  </NuxtLayout>
</template>
