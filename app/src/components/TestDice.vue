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
  <div class="diceArea" v-for="dice in store.diceArray">
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
  border: 2px solid #ccc;
  width: 140px;
  height: 140px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 6px;
  box-sizing: border-box;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  margin: 10px;
}

.dice-img {
  width: 100px;
  height: 100px;
  object-fit: contain;
  margin-bottom: 6px;
}

.diceArea {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 1rem;
}

#hihi,
#byebye,
button,
div[role='button'] {
  padding: 0.75rem 1.25rem;
  margin: 0.5rem;
  font-size: 1rem;
  font-weight: 600;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  display: inline-block;
  text-align: center;
}

#hihi {
  background-color: #3b82f6;
}
#hihi:hover {
  background-color: #2563eb;
}

#byebye {
  background-color: #ef4444;
}
#byebye:hover {
  background-color: #dc2626;
}

button {
  background-color: #10b981;
}
button:hover {
  background-color: #059669;
}

h1,
h2 {
  text-align: center;
  margin: 0.5rem 0;
  font-size: 1.2rem;
}

@media screen and (max-width: 430px) {
  .dice-img {
    width: 80px;
    height: 80px;
  }

  .dice-body {
    width: 120px;
    height: 120px;
    padding: 4px;
  }

  #hihi,
  #byebye,
  button {
    width: 90%;
    font-size: 1rem;
  }

  .diceArea {
    padding: 0.5rem;
  }

  h1,
  h2 {
    font-size: 1rem;
  }
}
</style>
