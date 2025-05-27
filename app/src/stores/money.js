import { ref } from 'vue'
import { defineStore } from 'pinia'
import { randomNumber } from '@/assets/keyFunctions'

export const useMoneyStore = defineStore('money', () => {
  let displayCash = ref(0)
  let displayRoll = ref(0)

  let diceMultiDisplay = ref(1)
  let diceMulti = 1 // Right now, dice multiplier would affect all clicking on dice. It should only apply to the dice it is on.
  let mathCash = 0 // Everyone starts with 0 cash
  function testClick() {
    let x = randomNumber(5)
    displayRoll.value = x
    let y = x * diceMulti
    mathCash += y
    console.log('Cash: ' + mathCash)
    console.log('Multi: ' + diceMulti) // Basic click function concept
    displayCash.value = mathCash
  }
  function upgradeClick() {
    diceMulti += 1
    diceMultiDisplay.value = diceMulti
  }
  return { upgradeClick, testClick, displayCash, displayRoll, diceMultiDisplay }
})
