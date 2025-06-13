<template>
  <div id="svgContainer">
    <!--rip-->
    <object type="image/svg+xml" data="/PrestigeTest2.svg">
      <img src="/PrestigeTest2.svg" alt="An animation showing the user prestiging." />
    </object>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
setTimeout(() => {
  router.push({ path: '/about' })
}, 3000)
</script>

<style lang="scss" scoped></style>
