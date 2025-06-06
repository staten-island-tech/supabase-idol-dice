import { defineStore } from 'pinia'
import { ref } from 'vue'
import { supabase } from '../lib/supabaseClient.js'
import { useAuthStore } from './authenticate.js'
const store = useAuthStore()
const userList = ref([])

export const useListStore = defineStore('list', () => {
    async function potentialList() {
      const {data, error} = await supabase.from('information').select()
      userList.value = data
      console.log(userList.value)
    if (error){console.log(error)}
     return userList}
  // Get the array from Supabase
    async function idHunter() {
      const {data, error} = await supabase.from('information').select()
      userList.value = data
      let i = 0
      while (i < userList.value.length) {
        if (userList.value[i].name !== store.userData.user.id) {
            i++
        }
        else return i; 
      }
    if (error){console.log(error)}}
    // Get the id of the logged in
    return { potentialList, idHunter }})
