<script setup>
import { RouterLink, RouterView } from 'vue-router'

 </script>
 <template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
    <div class="wrapper">
       <nav>
         <RouterLink to="/">Home (Import test)</RouterLink> <p>--This is where the login page will be--</p>

         <RouterLink to="/about">Dice Testing (Exporting)</RouterLink> <p>--Im testing the ability to export save data from the dice so it's levels and cash don't reset--</p>

         <RouterLink to="/test">Supabase Testing (Importing)</RouterLink> <p>--Testing the ability to import data from a supabase table--</p>
         <RouterLink to="/logtest">Supabase Login Test (Importing)</RouterLink> <p>--Testing the ability to log into an account--</p>
       </nav>
     </div>
   </header>
 
   <RouterView />
 </template>
 
 <style scoped>
 header {
   line-height: 1.5;
   max-height: 100vh;
 }
 
 .logo {
   display: block;
   margin: 0 auto 2rem;
 }
 
 nav {
   width: 100%;
   font-size: 12px;
   text-align: center;
   margin-top: 2rem;
 }
 
 nav a.router-link-exact-active {
   color: magenta;
 }
 
 nav a.router-link-exact-active:hover {
   background-color: transparent;
 }
 
 nav a {
   display: inline-block;
   padding: 0 1rem;
   border-left: 1px solid var(--color-border);
 }
 
 nav a:first-of-type {
   border: 0;
 }
 
 @media (min-width: 1024px) {
   header {
     display: flex;
     place-items: center;
     padding-right: calc(var(--section-gap) / 2);
   }
   .logo {
     margin: 0 2rem 0 0;
   }
   header .wrapper {
     display: flex;
     place-items: flex-start;
     flex-wrap: wrap;
   }
 
   nav {
     text-align: left;
     margin-left: -1rem;
     font-size: 1rem;
 
     padding: 1rem 0;
     margin-top: 1rem;
   }
 }
 </style>
