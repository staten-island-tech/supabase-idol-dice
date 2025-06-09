<template>
  <div @click="store.testClick" id="hihi">Roll dice</div>
  <div @click="store.upgradeClick" id="byebye">
    Increase multiplier (Cost: {{ store.diceMulti.valueOf() * 10 }})
  </div>
  <h1>Cash: {{ store.displayCash }}</h1>
  <h1>You rolled a {{ store.displayRoll }}</h1>
  <h1>Your multiplier is {{ store.diceMulti }}</h1>
  <br />
  <div v-if="store.ready == true">
    <button @click="store.prestigeReady">Prestige</button>
  </div>
  <!--Upgrade click must increase global multiplier and subtract cash-->
</template>

<script setup>
import { useMoneyStore } from '@/stores/money'
const store = useMoneyStore()

// The final version of this list must start with 1 dice and expand when a button is clicked to add a new div and dice into the list.
//        let testList = [{ name: '1', level: '1' }]
</script>
<style scoped>
#hihi {
  background-color: blue;
}
#byebye {
  background-color: red;
}
</style>
