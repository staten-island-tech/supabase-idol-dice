<template>
    <div>
        <div @click="testClick" id="hihi">Roll dice</div>
        <div @click="upgradeClick" id="byebye">Increase multiplier</div>
    </div>
<h1>Cash: {{ displayCash }}</h1>
<h1>You rolled a {{ displayRoll }}</h1>
<h1>Your multiplier is {{ diceMultiDisplay }}</h1>
</template>

<script setup>
import { useMoneyStore } from '@/stores/money';
const {displayCash, displayRoll, diceMultiDisplay, upgradeClick, testClick} = store

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
