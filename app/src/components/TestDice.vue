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

<script>
let testList = [
    {name: "1", level: "1"}
]
function testClick(){
    let diceMulti = testList[1].level
    let x = randomNumber(5)
    let y = x*diceMulti
    testCash+= y
    console.log("Cash: "+testCash)
}
function upgradeClick(){
    testList[1].level +=1
    console.log("Dice Multiplier: " + testList[1].level)
    if (testList[1].level == 10) {
        console.log("hi")
    }
}
console.log(testList)
</script>

<style scoped>
#hihi{
    background-color: blue;
}
#byebye{
    background-color: red;
}
</style> 