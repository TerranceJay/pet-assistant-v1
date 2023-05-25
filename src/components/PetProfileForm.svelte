<script>
  import { createPetProfile } from './firebase.js'; // Assuming you have the necessary Firebase service methods in a file named firebase.js

 // export let petProfile;

  let name = '';
  let breed = '';
  let age = '';
  let medicalHistory = '';

  export async function onSave() {
    try {
      // Call the Firebase service method to save the pet profile
      await createPetProfile({ name, breed, age, medicalHistory });

      // Handle successful pet profile creation, such as displaying a success message or redirecting to the pet profile management page
      console.log('Pet profile saved successfully!');
    } catch (error) {
      // Handle pet profile creation errors, such as displaying an error message to the user
      console.error('Pet profile creation error:', error);
    }
  }
</script>

<form on:submit|preventDefault={onSave}>
  <!-- ... form inputs ... -->
</form>