import { db } from './firebase'; // Adjust the path to match your project structure


async function createPetProfile(petProfileData) {
  try {
    // Create a new document in the 'petProfiles' collection
    await db.collection('petProfiles').add(petProfileData);
  } catch (error) {
    throw new Error('Failed to create pet profile: ' + error.message);
  }
}

// Function to save a new pet profile
async function createPetProfile(petProfileData) {
  try {
    // Create a new document in the 'petProfiles' collection
    const docRef = await db.collection('petProfiles').add(petProfileData);
    return docRef.id;
  } catch (error) {
    throw new Error('Failed to create pet profile: ' + error.message);
  }
}

// Function to update an existing pet profile
async function updatePetProfile(petProfileId, petProfileData) {
  try {
    // Update the document in the 'petProfiles' collection
    await db.collection('petProfiles').doc(petProfileId).update(petProfileData);
  } catch (error) {
    throw new Error('Failed to update pet profile: ' + error.message);
  }
}

// Function to retrieve pet profiles
async function getPetProfiles() {
  try {
    // Retrieve all documents from the 'petProfiles' collection
    const snapshot = await db.collection('petProfiles').get();
    const petProfiles = [];
    snapshot.forEach((doc) => {
      petProfiles.push({ id: doc.id, ...doc.data() });
    });
    return petProfiles;
  } catch (error) {
    throw new Error('Failed to retrieve pet profiles: ' + error.message);
  }
}

// Function to delete a pet profile
async function deletePetProfile(petProfileId) {
  try {
    // Delete the document from the 'petProfiles' collection
    await db.collection('petProfiles').doc(petProfileId).delete();
  } catch (error) {
    throw new Error('Failed to delete pet profile: ' + error.message);
  }
}

export { createPetProfile, updatePetProfile, getPetProfiles, deletePetProfile };

export { createPetProfile };