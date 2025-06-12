import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
const router = useRouter()
import { defineStore } from 'pinia'
import { randomNumber, roundNumber } from '@/assets/keyFunctions'
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
    displayCash.value = roundNumber(result[0].money, 1)
    diceMulti.value = result[0].multiplier
    prestigeLevel.value = result[0].prestige
    diceArray.value = result[0].dice
  })()

  console.log(displayCash.value)
function sorter(number){
  if (number == 1){console.log("1")}
  if (number == 1){console.log("2")}
  if (number == 1){console.log("3")}
  if (number == 1){console.log("4")}
  if (number == 1){console.log("5")}
}
  async function testClick() {
    let calcMoney = 0 //FOR EACH DICE STUFF IS HERE YOU BLIND BAT
    diceArray.value.forEach((dice) => {
      console.log(dice.img)
      let random = randomNumber(5)
      sorter(random)
      console.log('Random number: ' + random)
      calcMoney += random * dice.baseValue
      console.log('Money times base: ' + calcMoney)
    })
    calcMoney = calcMoney * diceMulti.value
    console.log('Final money count: ' + calcMoney)

    if (prestigeLevel.value > 0) {
      displayCash.value = roundNumber(
        calcMoney * (1 + 0.15 * prestigeLevel.value) + displayCash.value,
        1,
      )
    } else {
      displayCash.value = roundNumber(displayCash.value + calcMoney, 1)
    }
    const { error } = await supabase
      .from('information')
      .update({
        money: roundNumber(displayCash.value, 1),
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
        .update({ multiplier: diceMulti.value, money: roundNumber(displayCash.value, 1) })
        .eq('name', store2.userData.user.id)
      console.log(error)
    }
  }
  async function buyDice() {
    let newValue = diceArray.value.length * 2
    let cost = 10 * newValue
    if (diceArray.value.length < 6 && displayCash.value >= cost) {
      diceArray.value.push({
        baseValue: newValue,
        img: 'https://firstbenefits.org/wp-content/uploads/2017/10/placeholder.png',
      })
      displayCash.value = roundNumber(displayCash.value - cost, 1)

      const { error } = await supabase
        .from('information')
        .update({ dice: diceArray.value, money: displayCash.value })
        .eq('name', store2.userData.user.id)
      console.log(error)
      console.log(diceMulti.value)
//      router.push({ path: '/buyanim'})// This line is bugged for some reason. Focus on other CSS for now
    } else console.log('Limit Reached (6) or Not Enough Cash')
  }

  const ready = computed(() => displayCash.value > 1000 * prestigeLevel.value) // This line is a modified chatGPT line made to test a feature. I only understand it partially.
  async function prestigeReady() {
    console.log('Ready')
    diceMulti.value = 1
    displayCash.value = 0
    prestigeLevel.value += 1
    diceArray.value = [
      {
        baseValue: 1,
        img: 'https://firstbenefits.org/wp-content/uploads/2017/10/placeholder.png',
      },
    ]
    const { error } = await supabase
      .from('information')
      .update({
        money: roundNumber(displayCash.value, 1),
        multiplier: diceMulti.value,
        prestige: prestigeLevel.value,
        dice: diceArray.value,
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
