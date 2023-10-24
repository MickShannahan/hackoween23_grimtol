<template>
  <header class="text-center locked header text-white">
    <div class="container-fluid d-flex justify-content-center">
      <img src="src/assets/img/GrimLogo.png" alt="castle grimtol logo" class="grimtol-logo">
    </div>
  </header>
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
}
</style>
