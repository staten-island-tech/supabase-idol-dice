<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'
//import { supabase } from "../clients.supabase"

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
  }
}
async function signIn() {
  const { data, error } = await supabase.auth.signInWithPassword()
}
function logOut() {
  console.log('Logout')
}
</script>

<template>
  <div class="links">
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/login">Login</RouterLink>
    </nav>
  </div>
  <div class="content">
    <RouterView />
  </div>
</template>
