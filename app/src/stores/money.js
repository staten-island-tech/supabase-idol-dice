import { ref } from 'vue'
import { defineStore } from 'pinia'
import { randomNumber } from '@/assets/keyFunctions'
import { useListStore } from './updateCharts'
import { useAuthStore } from './authenticate'
import { supabase } from '@/lib/supabaseClient'
//const store = useListStore()
//const userListNumber = store.idHunter
//const userArray = store.potentialList
const store2 = useAuthStore()
export const useMoneyStore = defineStore('money', () => {
  async function getMoney() {
    const { data } = await supabase.from('information').select().eq('name', store2.userData.user.id)
    let testMoney = data
    return testMoney
  }
  let displayCash = ref(0)
  let displayRoll = ref(0)
  let diceMulti = 1 // Right now, dice multiplier would affect all clicking on dice. It should only apply to the dice it is on.
  // base cash
  ;(async () => {
    let result = await getMoney()
    displayCash.value = result[0].money
    diceMulti = result[0].multiplier
  })()

  console.log(displayCash.value)
  async function testClick() {
    let x = randomNumber(5)
    displayRoll.value = x
    let y = x * diceMulti
    displayCash.value += y
    console.log('Cash: ' + displayCash)
    console.log('Multi: ' + diceMulti) // Basic click function concept
    const { error } = await supabase
      .from('information')
      .update({ money: displayCash.value })
      .eq('name', store2.userData.user.id)
    console.log(error)
  }
  // must upgrade supabase multiplier & cost money
  async function upgradeClick() {
    if (displayCash.value > diceMulti * 10) {
      displayCash.value -= diceMulti * 10
      diceMulti += 1
      const { error } = await supabase
        .from('information')
        .update({ multiplier: diceMulti }, { money: displayCash.value })
        .eq('name', store2.userData.user.id)
      console.log(error)
    }
  }
  return {
    upgradeClick,
    testClick,
    displayCash,
    displayRoll,
    displayCash,
    diceMulti,
  }
})
