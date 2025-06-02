import { defineStore } from 'pinia'
import { useAuthStore } from '@/stores/authenticate'
import { supabase } from '../lib/supabaseClient.js'
const store = useAuthStore()
const updateChart = () => {}
export const useSavingStore = defineStore('save', () => {
  async function testTable(x) {
    const {error} = await supabase.from('information').insert([
   {
     name: store.userData.user.id,
     money: x
   }])
  if (error){console.log(error)}
    else {
  updateChart()}}
  return { testTable }
})
// Having the function testTable(0) is good for creating an account with 0 money
// testTable(x) can save money, but you must replace the data