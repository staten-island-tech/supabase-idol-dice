<template>
    <div id="svgContainer">
      <!--rip-->
      <object type="image/svg+xml" data="/public/BuyAnimation.svg">
        <img src="/public/BuyAnimation.svg" />
      </object>
      </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
setTimeout(() => {
   router.push()
}, timeout);
</script>

<style lang="scss" scoped>

</style>