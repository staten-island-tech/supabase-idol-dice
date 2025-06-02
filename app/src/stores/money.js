import { ref } from 'vue'
import { defineStore } from 'pinia'
import { randomNumber } from '@/assets/keyFunctions'
import { useSavingStore } from '@/stores/saveCharts'

const store = useSavingStore()

export const useMoneyStore = defineStore('money', () => {

  let displayCash = ref(0)
  let displayRoll = ref(0)
  let diceMultiDisplay = ref(1)
  let diceMulti = 1 // Right now, dice multiplier would affect all clicking on dice. It should only apply to the dice it is on.
  // base cash
  function testClick() {

    let x = randomNumber(5)
    displayRoll.value = x
    let y = x * diceMulti
    displayCash.value += y
    console.log('Cash: ' + displayCash)
    console.log('Multi: ' + diceMulti) // Basic click function concept
    store.testTable(displayCash.value) // Potential Issue
  }
  function upgradeClick() {
    diceMulti += 1
    diceMultiDisplay.value = diceMulti
  }
  return { upgradeClick, testClick, displayCash, displayRoll, diceMultiDisplay }
})

