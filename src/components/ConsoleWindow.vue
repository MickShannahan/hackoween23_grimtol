<template>
<div class="container-fluid">
  <section class="row console-window">
    <div class="col-12 bar d-flex justify-content-end align-items-center mg-2">
      <i class="mdi mdi-circle"></i>
      <i class="mdi mdi-circle"></i>
      <i class="mdi mdi-circle"></i>
    </div>
    <!--STUB Room info -->
    <section class="col-12 console console-font p-3 ">
      <section>
        <div id="description"  v-html="text"></div>
      </section>
      <section class="position-relative">
        <div v-html="room?.discoverText" class="text-transparent"></div>
        <div id="discover-text" class="position-absolute corner-align" v-html="discoverText"></div>
      </section>
      <section class="position-relative">
        <div v-html="room?.description" class="text-transparent"></div>
        <div id="description" class="position-absolute corner-align"  v-html="description"></div>
      </section>
      <section id="actions" class="mt-1">
        <div v-for="(act, i) in actions" :key="'act-'+i" v-html="act.value" class="mt-1 px-2"></div>
      </section>

      <section class="row mt-3">
        <form @submit.prevent="handleSubmit">
        <label class="console-font"><i>{{ prompt }}</i></label>
          <div>
            <input id="user-input" v-model="userInput" type="text" class="user-input w-100">
          </div>
        </form>
        <span class="cursor"></span>
      </section>
    </section>
  </section>
</div>
</template>


<script setup>
import { computed, onBeforeMount, onMounted,ref, watch } from 'vue';
import { AppState } from '../AppState.js';
import { logger } from '../utils/Logger.js';
import {gameService} from '../services/GameService.js'

const artwork = ref('')
const discoverText = ref('')
const description = ref('')
const text = ref('')
const userInput = ref('')
const room = computed(()=> AppState.activeRoom)
const actions = ref([])

const prompts = ["What would you like to do?", "How do you act?", "How would you like to act?", "What do you do?"]
const prompt = ref('')
onMounted(()=>{
focusInput()
})

watch(room, async()=>{
await typeOut(room.value.discoverText, discoverText)
await typeOut(room.value.description, description)
room.value.connectedRooms.forEach((con,i)=>{
  actions.value[i] = ref('')
  logger.log(con.description, actions.value[i].value)
  typeOut(con.description, actions.value[i])
})
await typeOut(prompts[0], prompt, 200)
})

function focusInput(){
  let elm = document.getElementById('user-input')
  elm.focus()
}

function handleSubmit(){
  let raw = userInput.value.split(' ')
  logger.log('⌨️',raw)
  let command = raw[0]
  let targets = raw.slice(1)
  let result = gameService.takeAction(command, targets)
  userInput.value = ''
  typeOut(result, text)
}

async function typeOut(type, ref, timeToWrite = 1500){
  logger.log('typing', type)
  ref.value = ''
  let copy = type.split('')
  let timeout = Math.round(timeToWrite / copy.length)
 await typeIt(copy, ref, timeout)
 console.log('done typeing')
}

async function typeIt(textArr, ref, timeout){
  return new Promise((res, rej) => {
    setTimeout(async()=>{
    ref.value += textArr.shift()
    if(textArr.length){
      await typeIt(textArr, ref, timeout)
    }
    res()
  }, 6)
})
}



</script>

<style lang="scss" scoped>

.corner-align{
  top: 0;
  left: 0;
}
</style>
