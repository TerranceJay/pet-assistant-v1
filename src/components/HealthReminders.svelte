// HealthReminders.svelte

<script>
  import { getAllHealthReminders, deleteHealthReminder } from '../path/to/healthReminderService';

  // Get all health reminders
  let reminders = getAllHealthReminders();

  // Function to delete a reminder
  function handleDeleteReminder(reminderId) {
    deleteHealthReminder(reminderId);
    reminders = getAllHealthReminders(); // Update the list of reminders
  }
</script>

<!-- Display the reminders in the template -->
{#each reminders as reminder}
  <div>
    <h3>{reminder.title}</h3>
    <p>{reminder.description}</p>
    <p>Due Date: {reminder.dueDate}</p>
    <button on:click={() => handleDeleteReminder(reminder.id)}>Delete</button>
  </div>
{/each}
