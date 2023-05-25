<script>
  import { getPetProfiles, deletePetProfile } from './petProfileService';
  import { onMount } from 'svelte';

  let petProfiles = [];

  async function fetchPetProfiles() {
    try {
      // Call the function to retrieve pet profiles from the database
      petProfiles = await getPetProfiles();
    } catch (error) {
      console.error('Failed to fetch pet profiles:', error);
    }
  }

  async function removePetProfile(petProfileId) {
    try {
      // Call the function to delete the specified pet profile
      await deletePetProfile(petProfileId);
      // Remove the deleted pet profile from the local array
      petProfiles = petProfiles.filter(profile => profile.id !== petProfileId);
    } catch (error) {
      console.error('Failed to delete pet profile:', error);
    }
  }

  // Fetch pet profiles when the component is mounted
  onMount(fetchPetProfiles);

  export { petProfiles };
</script>

<h1>Pet Profile Management</h1>

{#if petProfiles.length === 0}
  <p>No pet profiles found.</p>
{:else}
  <ul>
    {#each petProfiles as profile}
      <li key={profile.id}>
        <h3>{profile.name}</h3>
        <p>Breed: {profile.breed}</p>
        <p>Age: {profile.age}</p>
        <p>Medical History: {profile.medicalHistory}</p>
        <button on:click={() => removePetProfile(profile.id)}>Delete</button>
      </li>
    {/each}
  </ul>
{/if}