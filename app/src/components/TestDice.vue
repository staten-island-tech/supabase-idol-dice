<template>
    <div>
        <div @click="testClick" id="hihi">Roll dice</div>
        <div @click="upgradeClick" id="byebye">Increase multiplier</div>
    </div>
<h1>Cash: {{ tesstCash }}</h1>
<h1>You rolled a {{ tesstRoll }}</h1>
<h1>Your multiplier is {{ diceMultiDisplay }}</h1>
</template>

<script setup>
import { randomNumber } from '@/assets/keyFunctions'
 import { ref } from 'vue'

// The final version of this list must start with 1 dice and expand when a button is clicked to add a new div and dice into the list.
let testList = [{ name: '1', level: '1' }]

let tesstCash = ref(0)
let tesstRoll = ref(0)

let diceMultiDisplay = ref(1)
let diceMulti = 1 // Right now, dice multiplier would affect all clicking on dice. It should only apply to the dice it is on.
let testCash = 0 // Everyone starts with 0 cash
function testClick() {
  let x = randomNumber(5)
  tesstRoll.value = x
  let y = x * diceMulti
  testCash += y
  console.log('Cash: ' + testCash)
  console.log('Level: ' + testList[0].level)
  console.log('Multi: ' + diceMulti) // Basic click function concept
  tesstCash.value = testCash
}
function upgradeClick() {
  diceMulti += 1
  diceMultiDisplay.value = diceMulti
}
</script>
<style scoped>
#hihi {
  background-color: blue;
}
#byebye {
  background-color: red;
}
</style>
