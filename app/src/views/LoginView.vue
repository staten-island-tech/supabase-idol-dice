<!-- <template>
  <h1>Form</h1>
  <div class="inputContainer">
    <label for="email">Email</label>
    <input type="email" id="email" />
    <label for="password">Password</label>
    <input type="password" id="password" />
  </div>
  <div class="buttonContainer">
    <button>Login</button>
    <button>Logout</button>
    <button>Sign up</button>
  </div>
</template> -->
<template>
  <div>
    <!-- ✅ single root -->
    <h1>Form</h1>
    <div class="inputContainer">
      <label for="email">Email</label>
      <input type="email" id="email" />

      <label for="password">Password</label>
      <input type="password" id="password" />
    </div>
    <div class="buttonContainer">
      <button type="submit">Login</button>
      <button type="button">Logout</button>
      <button type="button">Sign up</button>
    </div>
  </div>
</template>

<script setup></script>

<style lang="css" scoped>
.inputContainer {
  display: flex;
}
</style>
