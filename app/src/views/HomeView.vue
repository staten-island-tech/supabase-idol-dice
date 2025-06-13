<template>
  <main>
    <h1>Welcome to Idol Dice</h1>
    <div id="svgContainer">
      <!--for some reason when I delete one of them, the other one also gets deleted...-->
      <object type="image/svg+xml" data="/public/LoadingScreenAnimation.svg">
        <img src="/public/LoadingScreenAnimation.svg" />
      </object>
    </div>
    <h2>Please Log In before attempting to play.</h2>
  </main>
</template>
<script></script>
<style>
html,
body {
  height: 100%;
  margin: 0;
}
body {
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Arial, sans-serif;
  background-color: #f9f9f9;
  color: #333;
}
main {
  max-width: 600px;
  padding: 0 1rem;
  text-align: center;
  justify-self: center;
}
h1 {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
}
#svgContainer {
  max-width: 350px;
  margin: 0 auto 2rem auto;
}
#svgContainer img {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}
h2 {
  font-size: 1.25rem;
  margin-bottom: 2rem;
  font-weight: 400;
  color: #555;
}
</style>
