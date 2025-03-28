<template>
    <div>
        <div @click="testClick(diceMulti)" id="hihi">Hi</div>
        <div @click="upgradeClick"id="byebye">Bye</div>
    </div>
</template>

<script setup>
function randomNumber(maximum) {
  const number = Math.floor(Math.random() * maximum + 1);
  return number;
}
let testCash = 0
let diceMulti=1
console.log(testCash)
function testClick(diceMulti){
    let x = randomNumber(5)
    console.log("Base "+ x)
    let y = x*diceMulti
    console.log("Multiplied " + y)
    testCash+= y
    console.log("Cash: "+testCash)
}
function upgradeClick(){
    diceMulti +=1
    console.log("Dice Multiplier: " + diceMulti)
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