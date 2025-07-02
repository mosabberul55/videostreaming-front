<script setup lang="ts">
const { showSuccessMessage } = useMessages()
import { useConfirm } from "primevue/useconfirm";

const confirm = useConfirm();

const selectedCity = ref();
const cities = ref([
  { name: 'New York', code: 'NY' },
  { name: 'Rome', code: 'RM' },
  { name: 'London', code: 'LDN' },
  { name: 'Istanbul', code: 'IST' },
  { name: 'Paris', code: 'PRS' }
]);
const toast = useToast();
// const toggleDarkMode = () => {
//   document.documentElement.classList.toggle('dark');
// };
const toggleDarkMode = () => {
  const isDarkMode = localStorage.getItem('darkMode') === 'true';
  if (isDarkMode) {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('darkMode', 'false');
  } else {
    document.documentElement.classList.add('dark');
    localStorage.setItem('darkMode', 'true');
  }
};
const onClick = () => {
  showSuccessMessage('Message Content');
};
</script>
<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="py-6">
      <Button label="Verify" />
      <h1 class="text-3xl font-bold text-gray-900 dark:text-white">Welcome to Nuxt.js!</h1>
      <p class="mt-2 text-lg text-gray-600 dark:text-gray-400">
        For a guide and recipes on how to configure / customize this project, check out the <a href="https://nuxtjs.org" class="text-blue-600">Nuxt.js documentation</a>.
      </p>
      <div class="card flex justify-center">
        <Select v-model="selectedCity" :options="cities" optionLabel="name" placeholder="Select a City" class="w-full md:w-56" />
      </div>
      <div class="flex justify-center mt-4 gap-5">
        <Button label="Toggle Dark Mode" @click="toggleDarkMode()" />
        <Button @click="onClick" class="bg-red-500">Show notify</Button>
        <Button @click="onClick" class="bg-red-500">Show notify</Button>
        <Button @click="confirm1()" label="Save" outlined></Button>
        <Icon name="uil:github"/>
      </div>
    </div>
    <div class="py-6">>
      <hls-video src="http://localhost:5001/api/video/hls-a80e15cd-bda1-4a95-8a01-331955b5e4b9/index.m3u8" autoplay muted></hls-video>
    </div>
  </div>
</template>