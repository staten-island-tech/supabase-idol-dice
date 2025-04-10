<template>
  <div class="w-100 l-100" id="testCube">
    <p>hi</p>
  </div>
</template>

<script setup>
// https://cdn.jsdelivr.net/npm/gsap@3.12.7/dist/Draggable.min.js
gsap.registerPlugin(Draggable) 
Draggable.create("#yourID");
</script>

<style scoped>
#testCube{
  background-color: red;
}
</style>