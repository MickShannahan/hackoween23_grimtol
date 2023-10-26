<template>
  <div class="container-fluid">
    <!-- STUB console app -->
    <section class="row justify-content-center mt-5">
      <div class="col-12">
        <ConsoleWindow/>
      </div>
    </section>

    <section class="locked " v-if="showSite">
      <div class="row justify-content-center">
        <div class="col-12 col-md-9 col-lg-8">
          <Characters/>
        </div>
      </div>
    </section>
    <div class="row gradient-border reversed"></div>
    <section v-if="showSite" class="home-foot row ruins-bg justify-content-center">
      <div class="col-12">
        <HowToUse/>
      </div>
    </section>
  </div>
</template>

<script setup>
import { Outside_Grimtol } from '../Rooms.js';
import ConsoleWindow from '../components/ConsoleWindow.vue';
import { computed, onMounted } from 'vue';
import {roomsService} from '../services/RoomsService.js'
import {gameService} from '../services/GameService.js'
import { AppState } from '../AppState.js';
import Characters from '../components/Characters.vue';
import HowToUse from '../components/HowToUse.vue';
const showSite= computed(()=> AppState.showSite)

onMounted(()=>{
  gameService.loadState()
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

.home-foot{
  min-height: 40dvh;
}
</style>
