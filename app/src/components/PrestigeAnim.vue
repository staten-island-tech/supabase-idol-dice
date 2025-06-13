<template>
  <div id="svgContainer">
    <!--rip-->
    <object type="image/svg+xml" data="/public/PrestigeTest.svg">
      <img src="/public/PrestigeTest.svg" alt="An animation showing the user prestiging." />
    </object>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
setTimeout(() => {
  router.push({ path: '/about' })
}, 3200)
</script>

<style lang="scss" scoped></style>
