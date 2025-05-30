import { ref } from 'vue'
import { defineStore } from 'pinia'
import { randomNumber } from '@/assets/keyFunctions'
import { useAuthStore } from '@/stores/authenticate'
import { supabase } from '../lib/supabaseClient.js'
const store = useAuthStore()

export const useMoneyStore = defineStore('money', () => {
  async function testTable() {
    await supabase.from('information').insert([
   {
     name: store.userData.user.id,
     money: 0
   }])}
  let displayCash = ref(0)
  let displayRoll = ref(0)
  console.log(store.userData.user)
  let diceMultiDisplay = ref(1)
  let diceMulti = 1 // Right now, dice multiplier would affect all clicking on dice. It should only apply to the dice it is on.
  // base cash
  function testClick() {
     testTable() // Potential Issue
    console.log(store.userData.user.id)
    let x = randomNumber(5)
    displayRoll.value = x
    let y = x * diceMulti
    displayCash.value += y
    console.log('Cash: ' + displayCash)
    console.log('Multi: ' + diceMulti) // Basic click function concept
  }
  function upgradeClick() {
    diceMulti += 1
    diceMultiDisplay.value = diceMulti
  }
  return { upgradeClick, testClick, displayCash, displayRoll, diceMultiDisplay }
})

