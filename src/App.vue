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
import { computed, watch } from 'vue';
import { AppState } from './AppState.js';


const appstate  = computed(()=> AppState)
const showSite = computed(()=> AppState.showSite)

watch(showSite, ()=>{
  if(showSite.value){
    document.body.classList.add('grimtol-bg')
    document.body.classList.add('show-site')
  }
})


</script>
<style lang="scss">
@import "./assets/scss/main.scss";
$topperHeight: 356px;

.bg-grimtol-topper{
  background-image: url('./assets/img/grimtolTopper2.png'), url('./assets/img/grimtolTopper1.png');
  background-repeat: no-repeat, repeat-x;
  background-position: top right, top right;
  background-size: $topperHeight;
  image-rendering: pixelated;
}
.gradient-border{
  height: calc(256 * 2px);
  width: 100%;
  background-image: url(./assets/img/transparentgradient.png);
  background-position: bottom;
  background-repeat: repeat-x;
  image-rendering: pixelated;
  background-size: calc(256 * 2px);
  position: absolute;
  top: calc($topperHeight /4);
  z-index: -1;
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
