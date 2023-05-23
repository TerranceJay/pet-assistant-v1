<script>
  import { auth } from '../firebase'; // Assuming you have the Firebase initialization in a file named firebase.js

  let email = '';
  let password = '';

  async function register() {
    try {
      const userCredential = await auth.createUserWithEmailAndPassword(email, password);
      // Handle successful registration, such as redirecting to a dashboard or displaying a success message
      console.log('User registered:', userCredential.user);
    } catch (error) {
      // Handle registration errors, such as displaying an error message to the user
      console.error('Registration error:', error);
    }
  }
</script>

<form on:submit|preventDefault={register}>
  <label>
    Email:
    <input type="email" bind:value={email} required />
  </label>

  <label>
    Password:
    <input type="password" bind:value={password} required />
  </label>

  <button type="submit">Register</button>
</form>