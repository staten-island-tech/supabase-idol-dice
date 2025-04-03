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
let testCash = 0
import { randomNumber } from '@/assets/keyFunctions'
let testList = [
    {name: "1", level: "1"}
]
function testClick(){
    let x = randomNumber(5)
    let y = x*diceMulti
    testCash+= y
    console.log("Cash: "+testCash)
};    let diceMulti = testList[0].level
    let zy = Number(testList[0].level)
function upgradeClick(){
    zy += 1
    testList[0].level = zy
    console.log(zy)
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