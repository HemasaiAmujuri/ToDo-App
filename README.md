✅ Project: To-Do List App
Technologies Used: HTML, CSS, JavaScript

🔹 Features Implemented:
1.✅ Add Tasks:

Users can enter any task and click the "Add Task" button to add it to the list.

Each task is shown with Edit and Delete buttons.

2.✏️ Edit/Delete Tasks:

Users can edit a task by clicking the Edit button, changing the text, and saving it.

Clicking Delete removes the task from the UI.

3.💾 Save Tasks to Local Storage:

When the user clicks the "Save" button, all current tasks in the UI are stored in localStorage as JSON.

This allows persistence even after a page reload.

4.📥 Display Saved Tasks:

Clicking "Saved Tasks" displays all saved tasks from localStorage in the UI.

It avoids duplication by only showing tasks that are not already in the UI.

5.🗑️ Clear All Tasks from Local Storage:

Clicking the "Clear" button removes all saved tasks from localStorage.

The UI is also updated accordingly.

6.🛠️ Fixed: Deleting Saved Task (Bug)

Before: Deleting a task only removed it from the UI, not from localStorage.

After Fix: When a user deletes a task that was saved, it's also removed from localStorage to keep both in sync
