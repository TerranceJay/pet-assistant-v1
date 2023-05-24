 <script>
  import { auth } from './firebase'; // Assuming you have the Firebase initialization in a file named firebase.js
  import { onMount } from 'svelte';
  import PetProfileForm from './components/PetProfileForm.svelte';
  import PetProfileManagement from './components/PetProfileManagement.svelte';

  let user = null;

  // Listen for changes in the user's authentication state
  onMount(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      if (currentUser) {
        // User is authenticated
        user = currentUser;
      } else {
        // User is not authenticated
        user = null;
      }
    });

    // Unsubscribe from the listener when the component is destroyed
    return () => {
      unsubscribe();
    };
  });
</script>

<main>
  {#if user}
    <!-- Render authenticated content -->
    <h1>Welcome, {user.email}!</h1>
    <PetProfileForm />
    <PetProfileManagement />
    <!-- Display user-specific data or provide access to authenticated features -->
  {:else}
    <!-- Render non-authenticated content -->
    <h1>Please log in to continue.</h1>
    <!-- Show login or registration form -->
  {/if}
</main>

