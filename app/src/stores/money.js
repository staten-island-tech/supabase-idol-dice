import { ref } from 'vue'
import { defineStore } from 'pinia'
import { randomNumber } from '@/assets/keyFunctions'
import { useAuthStore } from './authenticate'
import { supabase } from '@/lib/supabaseClient'
import { computed } from 'vue'
//const store = useListStore()
//const userListNumber = store.idHunter
//const userArray = store.potentialList

let diceArray = ref([
  {
    baseValue: 1,
    img: 'https://firstbenefits.org/wp-content/uploads/2017/10/placeholder.png',
  },
])
const store2 = useAuthStore()
export const useMoneyStore = defineStore('money', () => {
  async function getMoney() {
    const { data } = await supabase.from('information').select().eq('name', store2.userData.user.id)
    let testMoney = data
    return testMoney
  }
  let displayCash = ref(0)
  let prestigeLevel = ref(0)
  let displayRoll = ref(0)
  let diceMulti = ref(1) // Right now, dice multiplier would affect all clicking on dice. It should only apply to the dice it is on.
  // base cash
  ;(async () => {
    let result = await getMoney()
    console.log(result)
    displayCash.value = result[0].money
    diceMulti.value = result[0].multiplier
    prestigeLevel.value = result[0].prestige
    diceArray.value = result[0].dice
  })()

  console.log(displayCash.value)
  async function testClick() {
    /*    let x = randomNumber(5)
    displayRoll.value = x
    let y = x * diceMulti.value*/
    let calcMoney = 0
    diceArray.value.forEach((dice) => {
      let random = randomNumber(5)
      console.log('Random number: ' + random)
      calcMoney += random * dice.baseValue
      console.log('Money times base: ' + calcMoney)
    })
    calcMoney = calcMoney * diceMulti.value
    console.log('Final money count: ' + calcMoney)

    if (prestigeLevel.value > 0) {
      displayCash.value += calcMoney * (1 + 0.15 * prestigeLevel.value)
    } else {
      displayCash.value += calcMoney
    }
    const { error } = await supabase
      .from('information')
      .update({
        money: displayCash.value.toFixed(1),
        multiplier: diceMulti.value,
        prestige: prestigeLevel.value,
      })
      .eq('name', store2.userData.user.id)
    console.log(error)
  }
  // must upgrade supabase multiplier & cost money
  async function upgradeClick() {
    if (displayCash.value > diceMulti.value * 10) {
      displayCash.value -= diceMulti.value * 10
      diceMulti.value += 1
      const { error } = await supabase
        .from('information')
        .update({ multiplier: diceMulti.value, money: displayCash.value.toFixed(1) })
        .eq('name', store2.userData.user.id)
      console.log(error)
    }
  }
  async function buyDice() {
    if (diceArray.value.length < 6) {
      let newValue = diceArray.value.length * 2
      diceArray.value.push({
        baseValue: newValue,
        img: 'https://firstbenefits.org/wp-content/uploads/2017/10/placeholder.png',
      })

      const { error } = await supabase
        .from('information')
        .update({ dice: diceArray.value })
        .eq('name', store2.userData.user.id)
      console.log(error)
      console.log(diceMulti.value)
    } else console.log('Limit Reached')
  }

  const ready = computed(() => displayCash.value > 1000) // This line is a chatGPT line made to test a feature.
  async function prestigeReady() {
    console.log('Ready')
    diceMulti.value = 1
    displayCash.value = 0
    prestigeLevel.value += 1
    const { error } = await supabase
      .from('information')
      .update({
        money: displayCash.value.toFixed(1),
        multiplier: diceMulti.value,
        prestige: prestigeLevel.value,
      })
      .eq('name', store2.userData.user.id)
    console.log(error)
    console.log(prestigeLevel.value)
  }
  return {
    upgradeClick,
    testClick,
    prestigeReady,
    buyDice,
    displayCash,
    displayRoll,
    displayCash,
    diceMulti,
    ready,
    diceArray,
  }
})
