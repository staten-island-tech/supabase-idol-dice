import { ref } from 'vue'
import { defineStore } from 'pinia'
import { randomNumber } from '@/assets/keyFunctions'
import { useListStore } from './updateCharts'
const store = useListStore()
const userListNumber = store.idHunter
const userArray = store.potentialList
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
    console.log(userArray)
    console.log(userListNumber)
  }
  function upgradeClick() {
    diceMulti += 1
    diceMultiDisplay.value = diceMulti
  }
  return { upgradeClick, testClick, displayCash, displayRoll, diceMultiDisplay }
})

