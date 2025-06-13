<template>
  <div id="svgContainer">
    <!--rip-->
    <object type="image/svg+xml" data="/public/BuyAnimation2.svg">
      <img src="/public/BuyAnimation2.svg" alt="An animation of a glowing dice." />
    </object>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
setTimeout(() => {
  router.push({ path: '/about' })
}, 2500)
</script>

<style lang="scss" scoped></style>
