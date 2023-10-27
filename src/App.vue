<template>
  <header class="text-center locked header text-white bg-grimtol-topper">
    <div class="container-fluid d-flex justify-content-center">
      <img src="src/assets/img/GrimLogo.png" alt="castle grimtol logo" class="grimtol-logo">
    </div>
  </header>
  <section class="gradient-border"></section>
  <main>
    <router-view />
  </main>
</template>

<script setup>
import { computed, onMounted, watchEffect } from 'vue';
import { AppState } from './AppState.js';
import { logger } from './utils/Logger.js';
import { gameService } from './services/GameService.js';


const appstate  = computed(()=> AppState)
const showSite = computed(()=> AppState.showSite)


watchEffect(()=>{
  if(showSite.value){
    document.body.classList.add('grimtol-bg')
    document.body.classList.add('show-site')
  } else {
    document.body.classList.add('animate')
    document.body.classList.remove('grimtol-bg')
    document.body.classList.remove('show-site')
  }
})

onMounted(()=>{
  logger.log('register listener')
  document.addEventListener('scroll',scrollBg)
})


let lastKnownScrollPosition = 0;
let ticking = false;

function scrollBg(event){
  lastKnownScrollPosition = window.scrollY;
  if (!ticking) {
    requestAnimationFrame(() => {
    ticking = false;
    const body = document.body
    const amount = lastKnownScrollPosition/10
    body.style.setProperty('--bg-posY', -(amount -50)+"px")
  });

  ticking = true;
}
}


</script>
<style lang="scss">
@import "./assets/scss/main.scss";

.bg-grimtol-topper{
  background-image: url('./assets/img/grimtolTopper2.png'), url('./assets/img/grimtolTopper1.png');
  background-repeat: no-repeat, repeat-x;
  background-position: top right, top right;
  background-size: 600px;
  image-rendering: pixelated;
}


:root{
  --main-height: calc(100dvh - 32px - 64px);
}


footer {
  display: grid;
  place-content: center;
  height: 32px;
}

.grimtol-logo{
  width: 300px;
  transform: translateY(25px);
  filter: drop-shadow(0px 0px 2px #040404);
  image-rendering: auto;
}
</style>
