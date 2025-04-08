<!-- <template>
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Sign In</title>
      <!--<script src="https://zvtxgxkaxjwwmwmspdax.supabase.co"></script>-->
    </head>
    <body>
      <h1>Sign In</h1>
      <form id="signInForm">
        <label for="email">Email:</label>
        <input type="email" id="email" required />
        <br />
        <label for="password">Password:</label>
        <input type="password" id="password" required />
        <br />
        <button type="submit">Sign In</button>
      </form>
    </body>
  </html>
</template>

<script setup>
const { createClient } = supabase
const supabaseUrl = 'https://zvtxgxkaxjwwmwmspdax.supabase.co'
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp2dHhneGtheGp3d213bXNwZGF4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM2MTAxNzMsImV4cCI6MjA1OTE4NjE3M30.NAFPgReFK0mMUGMu5jcJGYLQOKVfu4ZUkxU-jBlMttI'
const supabase = createClient(supabaseUrl, supabaseKey)

document.getElementById('signInForm').addEventListener('submit', async (event) => {
  event.preventDefault()
  const email = document.getElementById('email').value
  const password = document.getElementById('password').value

  const { user, error } = await supabase.auth.signIn({
    email,
    password,
  })

  if (error) {
    console.error('Error signing in:', error.message)
  } else {
    console.log('User signed in:', user)
    // Redirect or perform other actions after successful sign-in
  }
})
</script>

<style lang="css" scoped></style>
 -->