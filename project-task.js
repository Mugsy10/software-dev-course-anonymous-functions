/*
===========================================
📝 To-Do List Filter with Anonymous Functions
===========================================

🎯 Objective:
Students will create and manipulate a simple array of to-do items using anonymous functions.

They will practice using:
- `filter()` to extract specific items
- `map()` to transform items
- `sort()` to organize items

This activity helps build a dynamic "To-Do List Filter" based on different criteria.
*/

// ============================================
// 🚀 Starting Point: To-Do List Array
// ============================================

// Sample to-do list array
const todos = [
  { task: "Do laundry", completed: false, priority: 2 },
  { task: "Write report", completed: true, priority: 1 },
  { task: "Buy groceries", completed: false, priority: 3 },
  { task: "Clean room", completed: true, priority: 2 },
  { task: "Prepare presentation", completed: false, priority: 1 },
];

// 1. Filter Incomplete Tasks
const incompleteTasks = todos.filter(function(item) {
  return !item.completed;
});
console.log("Incomplete Tasks:", incompleteTasks);

// 2. Sort Tasks by Priority (ascending: 1 = highest)
const sortedByPriority = [...todos].sort(function(a, b) {
  return a.priority - b.priority;
});
console.log("Tasks Sorted by Priority:", sortedByPriority);

// 3. Mark All Tasks as Completed
const allCompleted = todos.map(function(item) {
  return { ...item, completed: true };
});
console.log("All Tasks Marked as Completed:", allCompleted);

// 4. Combine Filters: Incomplete Tasks Sorted by Priority
const incompleteSorted = todos
  .filter(function(item) {
      return !item.completed;
  })
  .sort(function(a, b) {
      return a.priority - b.priority;
  });
console.log("Incomplete Tasks Sorted by Priority:", incompleteSorted);
