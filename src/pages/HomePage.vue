<template>
  <div class="container">
    <!-- STUB console app -->
    <section class="row">
      <ConsoleWindow/>
    </section>

    <section class="locked " v-if="showSite">
      <div class="row justify-content-center">
        <Intro class="col-12 col-md-8 text-white mt-3"/>
        <Characters/>
      </div>
      <HowToUse/>
      </section>
  </div>
</template>

<script setup>
import { Outside_Grimtol } from '../Rooms.js';
import ConsoleWindow from '../components/ConsoleWindow.vue';
import { computed, onMounted } from 'vue';
import {roomsService} from '../services/RoomsService.js'
import { AppState } from '../AppState.js';
import Characters from '../components/Characters.vue';
import HowToUse from '../components/HowToUse.vue';
onMounted(()=>{
  roomsService.enter(Outside_Grimtol.name)
})
const showSite= computed(()=> AppState.showSite)
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
