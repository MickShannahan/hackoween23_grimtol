<template>
  <div class="image">
    <div class="reflection-container">
      <div v-for="n in 9" :class="`reflection-grid-cell cell-${n}`"></div>
      <div class="reflection-content">
        <img :src="reveal" class="img-fluid" alt="">
        <img :src="image" class="img-fluid test" alt="">
      </div>
    </div>
  </div>
</template>


<script setup>
import { computed, ref } from 'vue';



const props = defineProps({
  image: String,
  reveal: String
})
</script>


<style lang="scss" scoped>
.test{
  transition: all .2s ease;
  // -webkit-mask-image: linear-gradient(45deg,black 40%, transparent 60%);
}


.image {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1em;
}

.reflection-container {
  position: relative;
  display: inline-block;
  vertical-align: middle;
  transform-style: preserve-3d;
  perspective: 1000px;
  height: 100%;


  .reflection-content {
    height: 100%;
    width: auto;
    background-size: cover;
    background-position: center;
    transform: rotateX(0) rotateY(0);
    pointer-events: none;
    transition: 100ms linear transform;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;

    img {
      grid-area: 1/1/1/1;
      height: 100%;
      width: auto;
      object-fit: contain;
      image-rendering: pixelated;
    }

    &:before {
      content: '';
      position: absolute;
      width: 110%;
      height: 110%;
      left: -5%;
      top: -5%;
      z-index: -1;
      background-position: center;
      background-size: contain;
      transition: all .2s ease;
      image-rendering: pixelated;
    }
  }

  .reflection-grid-cell {
    position: absolute;
    z-index: 1;
    width: 33%;
    height: 33%;
  }

  @for $r from 1 to 4 {
    @for $c from 1 to 4 {
      .cell-#{( ($r*3) + $c - 3)} {
        top: ($r*33%)-33%;
        left: ($c*33%)-33%;
      }

      .cell-#{( ($r*3) + $c - 3)}:hover~.reflection-content {
        transform: rotateX((($r*-7)+15deg)) rotateY((-15deg+($c*7)));
        .test{
        -webkit-mask-image: linear-gradient(($r*30)-45deg ,black $c*5%, transparent $c*25%);
        }


        &:before {
          transform: translateX(10-(5%*$c)) translateY(10-(5%*$r));
        }
      }
    }
  }
}
</style>
