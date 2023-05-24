// healthReminderService.js

let healthReminders = []; // Initialize an empty array to store the reminders


// healthReminderService.js

// Function to create a new health reminder
export function createHealthReminder(reminder) {
  healthReminders.push(reminder); // Add the reminder to the array
}

// Function to retrieve all health reminders
export function getAllHealthReminders() {
  return healthReminders; // Return the array of health reminders
}

// Function to update a reminder's completion status
export function updateHealthReminderCompletionStatus(reminderId, completed) {
  const reminderIndex = healthReminders.findIndex((reminder) => reminder.id === reminderId);
  if (reminderIndex !== -1) {
    healthReminders[reminderIndex].completed = completed; // Update the completed status
  }
}

// Function to delete a health reminder
export function deleteHealthReminder(reminderId) {
  healthReminders = healthReminders.filter((reminder) => reminder.id !== reminderId); // Remove the reminder from the array
}