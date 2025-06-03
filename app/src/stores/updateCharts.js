import { defineStore } from 'pinia'
import { ref } from 'vue'
import { supabase } from '../lib/supabaseClient.js'

const userList = ref([])
export const useListStore = defineStore('list', () => {
  async function potentialList() {
    const {data, error} = await supabase.from('information').select()
    userList.value = data
    console.log(userList.value)
  if (error){console.log(error)}}
  return { potentialList }
})
