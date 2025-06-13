<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>
<template>
  <div class="dropdown">
    <button class="dropbtn">Menu</button>
    <div class="dropdown-content">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">Dice Gameplay</RouterLink>
      <RouterLink to="/logtest">Login Page</RouterLink>
    </div>
  </div>
  <div class="page-wrapper">
    <RouterView />
  </div>
</template>

<style scoped>
/*might need to fix css of dropdown-content and dropbtn. thinking of separating it*/
.page-wrapper {
  margin-top: 120px; /* ← always leaves room for the menu */
  padding: 20px;
}
.dropdown {
  position: fixed;
  top: 20px;
  left: 20px;
  width: 100vw;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.dropbtn {
  background-color: #3b82f6;
  color: white;
  padding: 10px 18px;
  font-size: 16px;
  border: none;
  border-radius: 0 0 10px 10px;
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  z-index: 1001; /* Makes sure it stays above the dropdown */
  position: relative;
}

.dropdown-content {
  background-color: #ffffff;
  width: 100%;
  padding: 10px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  border-bottom: 1px solid #e5e5e5;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}
.dropbtn:hover {
  background-color: #2563eb;
}

@media screen and (max-width: 768px) {
  .dropdown {
    left: auto;
    right: 10px;
    width: auto;
  }

  .dropbtn {
    border-radius: 10px;
  }

  .dropdown-content {
    position: absolute;
    top: 100%;
    right: 0;
    width: 180px;
    flex-direction: column;
    align-items: flex-start;
    padding: 0;
    border: 1px solid #ddd;
  }

  .dropdown-content a {
    width: 100%;
    padding: 10px 16px;
    text-align: left;
    border-bottom: 1px solid #eee;
  }

  .page-wrapper {
    margin-top: 160px; /* extra space for the repositioned menu */
  }
}
</style>
