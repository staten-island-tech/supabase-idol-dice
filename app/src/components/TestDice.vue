<template>
  <div @click="store.testClick" id="hihi">Roll dice</div>
  <div @click="store.upgradeClick" id="byebye">
    Increase multiplier (Cost: {{ store.diceMulti.valueOf() * 10 }})
  </div>
  <div @click="store.buyDice">Buy Dice</div>
  <h1>Cash: {{ store.displayCash }}</h1>
  <h1>You rolled a {{ store.displayRoll }}</h1>
  <h1>Your multiplier is {{ store.diceMulti }}</h1>
  <br />
  <div v-if="store.ready == true">
    <button @click="store.prestigeReady">Prestige</button>
  </div>
  <div class="diceArea"v-for="dice in store.diceArray">
    <div class="dice-body">
      <img class="dice-img" :src="dice.img" alt="dice image" />
      <p>Base Value: {{ dice.baseValue }}</p>
    </div>
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
.dice-body {
  border: 2px solid black;
  width: 140px;
  height: 140px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 4px;
  box-sizing: border-box;
}

.dice-img {
  width: 100px;
  height: 100px;
  object-fit: contain;
}
.diceArea{
    display: flex;
    margin:5px auto;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
}
@media screen and (max-width: 430px) and (max-height: 940px) {
  .dice-img {
    width: 80px;
    height: 80px;
  }

  .dice-body {
    width: 120px;
    height: 120px;
    padding: 2px;
  }
}
#hihi {
  background-color: blue;
}
#byebye {
  background-color: red;
}
</style>
