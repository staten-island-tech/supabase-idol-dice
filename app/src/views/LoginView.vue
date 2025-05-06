<script setup>
import { useRouter, useRoute } from 'vue-router'
const router = useRouter()
import { ref } from 'vue'
import { supabase } from '../components/icons/lib/supabaseClient'
let email = ref('')
let password = ref('')

async function createAccount() {
  const { data, error } = await supabase.auth.signUp({
    email: email.value,
    password: password.value,
  })
  if (error) {
    console.log(error)
  } else {
    console.log(data)
    router.push({route:'/about'})
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
    router.push({path: '/about'})

  }
}
async function logOut() {
console.log(email)
const { error} = await supabase.auth.signOut();
if (error) {console.log('Error signing out ' + error)}
else {console.log("User signed out.")}
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
  </div>
</template>

<style>
.buttonContainer {
  display: flex;
}
</style>
