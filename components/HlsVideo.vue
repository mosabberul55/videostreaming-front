<script setup>
//sre as props
import Hls from "hls.js";

const props = defineProps({
  src: {type: String, required: true,},
  autoplay: {type: Boolean, default: false,},
  muted: {type: Boolean, default: false,},
});


const video = ref(null);

onMounted(async () => {
  const baseUrl = 'http://localhost:5001';
  const res = await fetch(`${baseUrl}/api/video/sign/hls-a80e15cd-bda1-4a95-8a01-331955b5e4b9`);
  const { m3u8 } = await res.json();

  const hls = new Hls();
  hls.loadSource(`${baseUrl}${m3u8}`);
  hls.attachMedia(video.value);
});
</script>

<template>
  <div>
    <video ref="video" controls autoplay style="width: 100%" @contextmenu.prevent />
  </div>
</template>