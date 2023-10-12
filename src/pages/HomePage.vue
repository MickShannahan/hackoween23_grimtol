<template>
  <div class="container">
    <!-- STUB console app -->
    <section class="row">
      <ConsoleWindow/>
    </section>
  </div>
</template>

<script setup>
import { Outside_Grimtol } from '../Rooms.js';
import ConsoleWindow from '../components/ConsoleWindow.vue';
import { onMounted } from 'vue';
import {roomsService} from '../services/RoomsService.js'
onMounted(()=>{
  roomsService.enter(Outside_Grimtol)
})
</script>

<style scoped lang="scss">
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;

  .home-card {
    width: 50vw;

    >img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
</style>
