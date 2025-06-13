<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
import { ref } from 'vue'
import { supabase } from '../components/icons/lib/supabaseClient'
import { useAuthStore } from '../stores/authenticate'
import { RouterLink, RouterView } from 'vue-router'
//import { LoadingScreenAnimation } from '../app/public/LoadingScreenAnimation'
import { useSavingStore } from '@/stores/saveCharts'
import { useListStore } from '@/stores/updateCharts'
const store2 = useSavingStore()
const store3 = useListStore()
let email = ref('')
let password = ref('')
const store = useAuthStore()

async function createAccount() {
  const { data, error } = await supabase.auth.signUp({
    email: email.value,
    password: password.value,
  })
  if (error) {
    console.log(error)
  } else {
    console.log(data)
    store2.testTable(data.user.id, 0, 1)

    router.push({ route: '/about' })
  }
}

async function signIn() {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email.value,
    password: password.value,
  })
  if (error) {
    console.log(error)
  } else {
    console.log(data)
    store.userData = data
    router.push({ path: '/about' })
  }
}
async function logOut() {
  const { error } = await supabase.auth.signOut()
  if (error) {
    console.log('Error signing out ' + error)
  } else {
    console.log('User signed out.')
    store.userData = null
    location.reload()
  }
}
function testData() {
  console.log(store.userData)
}
</script>

<template>
  <div class="inputContainer">
    <label for="email"> Email: </label>
    <input type="email" id="email" v-model="email" />
    <label for="email"> Password: </label>
    <input type="password" id="password" v-model="password" />
  </div>
  <div class="buttonContainer">
    <button @click="createAccount()">Create</button>
    <button @click="signIn()">Login</button>
    <button @click="logOut()">Logout</button>
  </div>
</template>

<style>
body {
  display: flex;
}
.dropbtn {
  background-color: #b6cad4;
  color: rgb(0, 0, 0);
  padding: 7px;
  font-size: 8px;
  cursor: pointer;
  display: flex;
}
.container {
  display: flex;
}
h1 {
  text-decoration: underline;
  display: flex;
}
.inputContainer {
  display: flex;
}
.buttonContainer {
  display: flex;
}
label {
  text-decoration: underline;
  box-shadow: 8px solid silver;
}
input {
  box-shadow: 8px solid silver;
}
button {
  display: flex;
  cursor: pointer;
  box-shadow: 8px solid rgb(156, 156, 193);
}
</style>
