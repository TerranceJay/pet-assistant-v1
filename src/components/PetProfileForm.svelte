<script>
  import { createPetProfile } from '../firebase'; // Assuming you have the necessary Firebase service methods in a file named firebase.js

  let name = '';
  let breed = '';
  let age = '';
  let medicalHistory = '';

  async function savePetProfile() {
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

<form on:submit|preventDefault={savePetProfile}>
  <label>
    Pet Name:
    <input type="text" bind:value={name} required />
  </label>

  <label>
    Breed:
    <input type="text" bind:value={breed} required />
  </label>

  <label>
    Age:
    <input type="text" bind:value={age} required />
  </label>

  <label>
    Medical History:
    <textarea bind:value={medicalHistory}></textarea>
  </label>

  <button type="submit">Save</button>
</form>

import { createPetProfile } from '../path/to/petProfileService'; // Adjust the path to match your project structure
