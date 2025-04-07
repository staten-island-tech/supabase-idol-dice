<!--
<template>
    <div>
        <div @click="testClick()" id="hihi">Hi</div>
        <div @click="upgradeClick"id="byebye">Bye</div>
    </div>
</template>

<script setup>
import { randomNumber } from '../assets/keyFunctions.js'
let testCash = 0
let diceMulti=1
console.log(testCash)
function testClick(){
    let x = randomNumber(5)
    console.log("Base "+ x)
    let y = x*diceMulti
    console.log("Multiplied " + y)
    console.log("Multiplier " + diceMulti)
    testCash+= y
    console.log("Cash: "+testCash)
}
function upgradeClick(){
    diceMulti +=1
    console.log("Dice Multiplier: " + diceMulti)
    if (diceMulti == 10) {
        console.log("hi")
    }
}

</script>

<style scoped>
#hihi{
    background-color: blue;
}
#byebye{
    background-color: red;
}
</style> 
Base Functions
-->
<template>
  <div>
    <div @click="testClick" id="hihi">Hi</div>
    <div @click="upgradeClick" id="byebye">Bye</div>
  </div>
</template>

<script setup>
import { randomNumber } from '@/assets/keyFunctions'
// The final version of this list must start with 1 dice and expand when a button is clicked to add a new div and dice into the list.
let testList = [{ name: '1', level: '1' }]

let diceMulti = testList[0].level // Right now, dice multiplier would affect all clicking on dice. It should only apply to the dice it is on.
let testCash = 0 // Everyone starts with 0 cash
function testClick() {
  let x = randomNumber(5)
  let y = x * diceMulti
  testCash += y
  console.log('Cash: ' + testCash)
  console.log('Level: ' + testList[0].level)
  console.log('Multi: ' + diceMulti) // Basic click function concept
}
let zy = Number(testList[0].level)
function upgradeClick() {
  // Basic upgrade concept, not fully refined
  zy += 1
  testList[0].level = zy
  console.log(zy)
  diceMulti = zy
}
console.log(testList)
gsap.tl.to('div', { y: 50, duration: 1 })
</script>

<style scoped>
#hihi {
  background-color: blue;
}
#byebye {
  background-color: red;
}
</style>
