<template>
  <div>
    <video ref="videoPlayer" controls width="720"></video>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Hls from 'hls.js'

const videoPlayer = ref(null)

onMounted(async () => {
  const { playlistUrl, encryptionKeyUrl } = await fetch(`${useRuntimeConfig().public.baseURL}/video/play?playlistKey=videos/hls-21d5371e-eb47-4621-a685-baebd581a54e`)
      .then(res => res.json())

  if (Hls.isSupported()) {
    const hls = new Hls()
    hls.loadSource(playlistUrl)
    hls.attachMedia(videoPlayer.value)
    hls.on(Hls.Events.MANIFEST_PARSED, () => {
      videoPlayer.value.play()
    })

    // Patch HLS.js internal loader for encryption key
    hls.config.xhrSetup = function (xhr, url) {
      if (url.includes('.key')) {
        xhr.open('GET', encryptionKeyUrl, true)
      }
    }
  } else if (videoPlayer.value.canPlayType('application/vnd.apple.mpegurl')) {
    // fallback for Safari
    videoPlayer.value.src = playlistUrl
    videoPlayer.value.addEventListener('loadedmetadata', () => {
      videoPlayer.value.play()
    })
  }
})
</script>