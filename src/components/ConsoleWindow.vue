<template>
<div class="container-fluid" @click="showMusic = true">
  <section class="row console-window">
    <div class="col-12 bar d-flex justify-content-end align-items-center mg-2">
      <i class="mdi mdi-window-minimize"></i>
      <i class="mdi mdi-close-thick selectable px-1" title="skip the intro" @click="revealSite"></i>
    </div>
    <!--STUB Room info -->
    <section class="col-12 console console-font p-3 ">
      <section>
        <div id="text" class="mb-4" v-html="playerText"></div>
      </section>
      <section class="position-relative">
        <div v-html="windowText" class="text-transparent"></div>
        <div id="description" class="position-absolute corner-align"  v-html="windowText"></div>
      </section>
      <section id="actions" class="mt-1">
        <div v-for="(act, i) in actions" :key="'act-'+i" v-html=" '-'+ act.value" class="mt-2"></div>
      </section>

      <section v-if="!showSite" class="row mt-4">
        <form @submit.prevent="handleSubmit">
        <label class="console-font"><i>{{ prompt }}</i></label>
          <div>
            <input id="user-input" autocomplete="off"  v-model="userInput" type="text" class="user-input w-100">
          </div>
        </form>
        <span class="cursor"></span>
      </section>
    </section>
  </section>
  <MusicPlayer v-if="showMusic"/>
</div>
</template>


<script setup>
import { computed, onBeforeMount, onMounted,ref, watch, watchEffect } from 'vue';
import { AppState } from '../AppState.js';
import { logger } from '../utils/Logger.js';
import {gameService} from '../services/GameService.js'
import MusicPlayer from './MusicPlayer.vue';

const showMusic = ref(false)

const abort = ref(false)
const windowText = ref('')
const playerText = ref('')
const userInput = ref('')
const stateText = computed(()=> AppState.windowText)
const room = computed(()=> AppState.activeRoom)
const showSite = computed(()=> AppState.showSite)
const actions = ref([])

const prompts = ["What would you like to do?", "How do you act?", "How would you like to act?", "What do you do?"]
const prompt = ref('')
onMounted(()=>{
focusInput()
})

watch([stateText, room], async()=>{
  resetView()
  await typeOut(stateText.value, windowText)
  listEntities()
  listItems()
  listConnections()
  await typeOut(prompts[Math.floor(Math.random()*prompts.length)], prompt, 200)
  focusInput()
})


function resetView(){
  playerText.value = ''
  windowText.value = ''
  actions.value = []
}

function listConnections(){
  room.value?.connectedRooms.forEach((con,i)=>{
    if(con.hidden) return

    actions.value[i] = ref('')
    logger.log(con.description, actions.value[i].value)
    typeOut(con.description, actions.value[i])
  })
}

function listItems(){

}

function listEntities(){

}

function focusInput(){
  let elm = document.getElementById('user-input')
  elm?.focus()
}

function handleSubmit(){
  showMusic.value = true
  abort.value = true
  let raw = userInput.value.trim().split(' ')
  let command = raw[0]
  let targets = raw.slice(1)
  let result = gameService.takeAction(command, targets)
  userInput.value = ''
  typeOut(result, playerText)
}

async function typeOut(type, ref, timeToWrite = 1500){
  let skipType = AppState.showSite
  if(skipType){
    ref.value = type
    return
  }
  abort.value = false
  ref.value = ''
  let copy = type.split(' ')
  let timeout = Math.round(timeToWrite / copy.length)
 await typeIt(copy, ref, 12)
}

async function typeIt(textArr, ref, timeout){
  if(abort.value) textArr = []
  return new Promise((res, rej) => {
    setTimeout(async()=>{
    ref.value +=  ' '+ textArr.shift()
    if(textArr.length){
      await typeIt(textArr, ref, timeout)
    }
    res()
  }, timeout)
})
}

function revealSite(){
  AppState.activeRoom = AppState.rooms.find(r => r.name == 'Staircase landing')
  let command = 'go'
  let targets = ['through', 'the', 'doors']
  let result = gameService.takeAction(command, targets)
  userInput.value = ''
  typeOut(result, playerText)
}


</script>

<style lang="scss" scoped>

.container-fluid{
  max-width: 100ch;
}

.corner-align{
  top: 0;
  left: 0;
}
</style>
