<template>
  <section class="row font-metal text-white text-center fs-2">
    <div>
      CURSED SOULS
    </div>
  </section>
  <div class="container mb-5">
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
</div>
</template>


<script setup>
import queenImg from '../assets/img/characters/Queen.png'
import vampQueenImg from '../assets/img/characters/QueenVamp.png'
import kingImg from '../assets/img/characters/King.png'
import vampKingImg from '../assets/img/characters/KingVampire.png'
import bakerImg from '../assets/img/characters/Baker.jpg'
import frogBakerImg from '../assets/img/characters/FrogBaker.png'
import knightImg from '../assets/img/characters/Knight.png'
import ratKnightImg from '../assets/img/characters/RatKnight.png'
import merchantImg from '../assets/img/characters/Merchant.png'
import mummyMerchantImg from '../assets/img/characters/MummyMerchant.png'
import masonImg from '../assets/img/characters/Mason.png'
import madusaMasonImg from '../assets/img/characters/MedusaMason.png'
// ---
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
    portrait: kingImg,
    turnedPortrait: vampKingImg
   },
   {
    name: "Town Baker",
    story: "A humble baker. Was great a making bread and stuff. Often invited to the castle to bake the royal family bread.",
    portrait: bakerImg,
    turnedPortrait: frogBakerImg
   },
   {
    name: "Not so loyal Knight",
    story: "A knight not so loyal to the throne. Introducing the king to the dark warlock who transformed the city. Betrayed by the warlock he is now cursed too.",
    portrait: knightImg,
    turnedPortrait: ratKnightImg
   },
   {
    name: "Eager Merchant",
    story: "A merchant eager to make a coin sold many of the towns people on the warlocks curse poisons touted as potions.",
    portrait: merchantImg,
    turnedPortrait: mummyMerchantImg
   },
   {
    name: "Mason's Apprentice",
    story: "Apprentice to the stone master stone mason responsible for the towers design.",
    portrait: masonImg,
    turnedPortrait: madusaMasonImg
   }
]

</script>


<style lang="scss" scoped>

.character{
  margin-bottom: 1.5em;
  opacity: 0;
  transform: translateY(-10px);
}

@media (min-width: 990px) {
  .character{
    margin-bottom: -5em;
  }

}

.character-story{

}

@for $num from 1 through 10{
  .character:nth-child(#{$num}){
    animation: reveal .75s $num *.75s + 1 ease forwards;
  }
}

@keyframes reveal{
  0%{
    opacity: 0;
    transform: translateY(-10px);
  }
  100%{
    opacity: 100%;
    transform: translateY(0px);
  }
}


</style>
