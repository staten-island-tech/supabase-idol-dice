<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
import { ref } from 'vue'
import { supabase } from '../components/icons/lib/supabaseClient'
import { useAuthStore } from '../stores/authenticate'
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
    const {data, error} = await supabase.from('information').insert([
      {
        id
      }
    ])
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
  }
}
function testData() {
  console.log(store.userData)
}

//<LoginView/>
</script>

<template>
  <h1>Test Form</h1>

  <div class="inputContainer">
    <label for="email"> Email: </label>
    <input type="email" id="email" v-model="email" />
    <label for="email"> Password: </label>
    <input type="password" id="password" v-model="password" />
  </div>
  <!--idk why is this is red. tried asking chatgpt already.-->
  <div class="buttonContainer">
    <button @click="createAccount()">Create</button>
    <button @click="signIn()">Login</button>
    <button @click="logOut()">Logout</button>
    <button @click="testData()">User Data</button>
  </div>
</template>

<style>
.buttonContainer {
  display: flex;
}
</style>
