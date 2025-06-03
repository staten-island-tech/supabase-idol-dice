<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
import { ref } from 'vue'
import { supabase } from '../components/icons/lib/supabaseClient'
import { useAuthStore } from '../stores/authenticate'
//import { LoadingScreenAnimation } from '../app/public/LoadingScreenAnimation'
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
</script>

<template>
  <div class="dropdown">
    <button onclick="myFunction()" class="dropbtn">Menu</button>
    <div id="myDropdown" class="dropdown-content">
      <a href="#">Home</a>
      <a href="#">Store</a>
      <a href="#">Link 3</a>
    </div>
  </div>
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
    <button @click="testData()">User Data</button>
  </div>
  <!-- <body></body> -->
  <div id="svgContainer">
    <object type="image/svg+xml" data="/public/LoadingScreenAnimation.svg">
      <img src="/public/LoadingScreenAnimation.svg" />
    </object>
    <object type="image/svg+xml" data="/public/BuyAnimation.svg">
      <img src="/public/BuyAnimation.svg" />
    </object>
  </div>
</template>

<style>
.dropbtn {
  background-color: #b6cad4;
  color: rgb(0, 0, 0);
  padding: 7px;
  font-size: 8px;
  cursor: pointer;
}
.dropdown {
  position: absolute;
  display: inline-block;
}
.container {
  display: inline-block;
  cursor: pointer;
}
h1 {
  text-decoration: underline;
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
</style>
