<template>
  <audio id="music-player"  autoplay="true" @ended="changeTrack">
    <source :src="songs[currentSong]">
  </audio>
  <div class="audio-button console-font console-window" >
    <button v-if="playing" @click="togglePlay"><i class="mdi console-font mdi-volume-high"></i></button>
    <button v-else class="audio button" @click="togglePlay"><i class="mdi console-font mdi-volume-low"></i></button>
  </div>
</template>


<script setup>
import { onMounted, ref, watch } from 'vue';
import terminalAnxiety from '../assets/music/Terminal_Anxiety_120bpm_124s.mp3'
import theyAreHere from '../assets/music/They_Are_Here_100bpm_120s.mp3'
import { logger } from '../utils/Logger.js';
const songs = [terminalAnxiety, theyAreHere]
const currentSong = ref(0)
const playing = ref(false)
const volume = ref(.50)

function changeTrack(){
  const newTrack = (currentSong.value + 1) % songs.length
  currentSong.value = newTrack
  document.getElementById('music-player').play()
  playing.value = true
}

  onMounted(() =>{
    playing.value = true
    let audio = document.getElementById('music-player')
    audio.volume = volume.value
    audio.play()
  })

  function togglePlay(){
    playing.value = !playing.value
    logger.log('toggling', playing.value)
    if(playing.value){
      document.getElementById('music-player').play()
    } else {
      document.getElementById('music-player').pause()
    }
  }



</script>


<style lang="scss" scoped>

.audio-button{
  position: fixed;
  bottom: 10px;
  left: 10px;
  border: double 3px #28ff82;
  button{
    background: transparent;
    border: 0;
  }
}
</style>
