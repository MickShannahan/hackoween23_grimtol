<template>
  <section class="row font-metal text-white text-center mt-5">
    <h2 class="text-shadow">
      CURSED SOULS
    </h2>
  </section>
  <div class="container mb-5">
    <section v-for="(char, i ) in characters" :key="'character-profile'+ i" class="d-block d-md-flex justify-content-center character">

      <div class="col-8 offset-2 offset-md-0 col-md-6 col-lg-5">
        <div class="character-portrait">
          <DynamicImage :image="char.portrait" :reveal="char.turnedPortrait"/>
        </div>
      </div>
      <div class="col-12 col-md-6 col-lg-6 console-font d-flex align-items-center" :class="{'order-first': i % 2 == 0}">
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
import healerImg from '../assets/img/characters/Healer.png'
import spiritHealerImg from '../assets/img/characters/GhostHealer.png'
// ---
import DynamicImage from './DynamicImage.vue';

let characters = [
  {
    name: "Queen of Grimtol",
    story: "Closest to the sickly king, she had a large role in the kingdoms flourishing educational institutions. Now leading the kingdom through it's eternal tragedy",
    portrait: queenImg,
    turnedPortrait: vampQueenImg
   },
  {
    name: "King of Grimtol",
    story: "The beloved king, cursed with the eternal life he was promised, but at the cost of eternal hunger for the blood of his subjects loved...",
    portrait: kingImg,
    turnedPortrait: vampKingImg
   },
   {
    name: "Humble Baker",
    story: "Known for their great baked goods, they were invited many times to the castle for feasts and celebrations... until all his bread was cursed with rot, maggots and flies",
    portrait: bakerImg,
    turnedPortrait: frogBakerImg
   },
   {
    name: "The Most Loyal Knight",
    story: "Their loyalty to the city was and the law was honored above all else. Even when he discovered his partner had been stealing coin for the poor.",
    portrait: knightImg,
    turnedPortrait: ratKnightImg
   },
   {
    name: "Magic Merchant",
    story: "Known by may names and faces, they specialized in goods to benefit the body and minds of people. Unfortunately the products sold were more akin to a snake oils than restorative serums.",
    portrait: merchantImg,
    turnedPortrait: mummyMerchantImg
   },
   {
    name: "Mason's Apprentice",
    story: "Apprentice to the master stone mason responsible for the monstrous tower being built. Skills comparable to her master at half the age, cursed before many to live in her masters shadow. At least now when people see her, they will know her stonework.",
    portrait: masonImg,
    turnedPortrait: madusaMasonImg
   },
   {
    name: "Spirits Healer",
    story: "Not a resident of the city, this renowned healer traveled their for the kings bounty. Unfortunately she did not arrive before the stranger. Even more unfortunate that she took a liking to city and wished not to leave.",
    portrait: healerImg,
    turnedPortrait: spiritHealerImg
   }
]

</script>


<style lang="scss" scoped>

.character{
  margin-bottom: 1.5em;
  opacity: 1;
  transform: translateY(-10px);
}

.animate .character{
  opacity: 0;
}

@media (min-width: 768px) {
  .character{
    margin-bottom: -4vw;
  }

}

.character-story{

}

@for $num from 1 through 10{
  .animate .character:nth-child(#{$num}){
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
