<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
import { ref } from 'vue'
import { supabase } from '../components/icons/lib/supabaseClient'
import { useAuthStore } from '../stores/authenticate'
import { useSavingStore } from '@/stores/saveCharts'
const store2 = useSavingStore()
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
    logged.value = false
  }
}
let logged = ref(false)
if (store.userData != null) {
  logged.value = true
}
</script>

<template>
  <h1>Logged In: {{ logged }}</h1>
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
  margin: 0;
  font-family: Arial, sans-serif;
  background-color: #f5f8fa;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.inputContainer {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 320px;
  max-width: 90vw;
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
}

.inputContainer input {
  padding: 0.6rem 0.8rem;
  font-size: 1rem;
  border: 1.8px solid #ccc;
  border-radius: 6px;
  transition: border-color 0.3s;
}

.buttonContainer {
  display: flex;
  justify-content: space-between;
  margin-top: 1.5rem;
  gap: 0.8rem;
}

.buttonContainer button {
  flex: 1;
  background-color: #3b82f6;
  border: none;
  color: white;
  font-weight: 600;
  padding: 0.8rem 0;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s;
}
@media (max-width: 480px) {
  .inputContainer {
    width: 90vw;
    padding: 1.5rem;
  }
  .buttonContainer {
    flex-direction: column;
  }
  .buttonContainer button {
    width: 100%;
  }
}
</style>
