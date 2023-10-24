<template>
  <section v-for="(char, i ) in characters" :key="'character-profile'+ i" class="d-block d-md-flex justify-content-center character">

    <div class="col-10 col-md-4">
      <div class="character-portrait">
        <DynamicImage :image="char.portrait" :reveal="char.turnedPortrait"/>
      </div>
    </div>
    <div class="col-10 col-md-6 console-font d-flex align-items-center" :class="{'order-first': i % 2 == 0}">
      <div class="console-window">
        <div class="character-story bar px-2 console-font font-dark">
          {{ char.name }}
        </div>
        <div class="p-2">
          <p> {{ char.story }}</p>
        </div>
      </div>
    </div>

  </section>
</template>


<script setup>
import queenImg from '../assets/img/Queen.png'
import vampQueenImg from '../assets/img/QueenVamp.png'
import DynamicImage from './DynamicImage.vue';

let characters = [
  {
    name: "Queen of Grimtol",
    story: "There was a queen that is very nice, then she became evil and sucked the blood of her people. Bleh bleh blood!",
    portrait: queenImg,
    turnedPortrait: vampQueenImg
   },
  {
    name: "King of Grimtol",
    story: "There was a queen that is very nice, then she became evil and sucked the blood of her people. Bleh bleh blood!",
    portrait: queenImg,
    turnedPortrait: vampQueenImg
   },
]

</script>


<style lang="scss" scoped>

.character{
  margin-bottom: 1.5em;
}

@media (min-width: 990px) {
  .character{
    margin-bottom: -3em;
  }

}

.character-story{

}

</style>
