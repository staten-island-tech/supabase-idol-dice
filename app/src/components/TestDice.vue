<template>
    <div>
        <div @click="testClick" id="hihi">Hi</div>
    </div>
</template>

<script setup>
function randomNumber(maximum) {
  const number = Math.floor(Math.random() * maximum + 1);
  return number;
}
let testCash = 0
console.log(testCash)
function testClick(){
    let x = randomNumber(5)
    testCash+= x
    console.log(testCash)
}


</script>

<style scoped>
#hihi{
    background-color: blue;
}
</style>