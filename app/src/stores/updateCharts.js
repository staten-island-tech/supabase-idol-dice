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
    if (error){console.log(error)}}
    async function idHunter() {
      const {data, error} = await supabase.from('information').select()
      userList.value = data
      // For length of list, i = 0
      // if name matches store.userData.user.id, save the value of I to use for updates
      let i = 0
      while (i < userList.value.length) {
        if (userList.value[i].name !== store.userData.user.id) {
            i++
        }
        else return i;
        
      }


    if (error){console.log(error)}}
    return { potentialList, idHunter }
})
