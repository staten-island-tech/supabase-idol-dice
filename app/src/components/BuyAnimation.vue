<template>
  <div id="svgContainer">
    <!--rip-->
    <object type="image/svg+xml" data="/BuyAnimation3.svg">
      <img src="/BuyAnimation3.svg" alt="An animation of a glowing dice." />
    </object>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
setTimeout(() => {
  router.push({ path: '/about' })
}, 2800)
</script>

<style lang="scss" scoped></style>
