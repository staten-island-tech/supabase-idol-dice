<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
import { ref } from 'vue'
import { supabase } from '../components/icons/lib/supabaseClient'
import { useAuthStore } from '../stores/authenticate'
import { LoadingScreenAnimation } from 'public'
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
  <body>
    <svg id="e68ez7sJ04d1">
      <circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow" />
    </svg>
  </body>
  <!--svg goes in html-->
  <div id="svgContainer">
    <object type="image/svg+xml" data="/public/LoadingScreenAnimation.svg">
      <img src="/public/LoadingScreenAnimation.svg" />
    </object>
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
  <div class="container">
    <div id="bar1"></div>
    <div id="bar2"></div>
    <div id="bar3"></div>
  </div>
</template>

<style>
.container {
  display: inline-block;
  cursor: pointer;
}

#bar1,
#bar2,
#bar3 {
  width: 35px;
  height: 5px;
  background-color: #000000;
  margin: 6px 0;
  transition: 0.4s;
}

/* .change #bar1 {
  transform: translate(0, 11px) rotate(-45deg);
}

.change #bar2 {
  opacity: 0;
}

.change #bar3 {
  transform: translate(0, -11px) rotate(45deg);
} */
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
