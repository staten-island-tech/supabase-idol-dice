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
#svgContainer {
  max-width: 400px; /* limit max width */
  margin: 2rem auto;
  width: 100%; /* fill available space */
}

#svgContainer object,
#svgContainer img {
  width: 100%; /* scale SVG to container width */
  height: auto; /* maintain aspect ratio */
  display: block;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
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
h2 {
  font-size: 1.25rem;
  margin-bottom: 2rem;
  font-weight: 400;
  color: #555;
}
</style>
