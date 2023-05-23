<script>
  import { auth } from '../firebase'; // Assuming you have the Firebase initialization in a file named firebase.js

  let email = '';
  let password = '';

  async function login() {
    try {
      const userCredential = await auth.signInWithEmailAndPassword(email, password);
      // Handle successful login, such as redirecting to a dashboard or displaying a success message
      console.log('User logged in:', userCredential.user);
    } catch (error) {
      // Handle login errors, such as displaying an error message to the user
      console.error('Login error:', error);
    }
  }
</script>

<form on:submit|preventDefault={login}>
  <label>
    Email:
    <input type="email" bind:value={email} required />
  </label>

  <label>
    Password:
    <input type="password" bind:value={password} required />
  </label>

  <button type="submit">Log in</button>
</form>