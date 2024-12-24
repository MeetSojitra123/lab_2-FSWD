let tasks =[
    {title:"Running",dueTime:1,priority:3},{title:"Sleeping",dueTime:7,priority:1},
    {title:"Study",dueTime:3,priority:2},{title:"Eating",dueTime:1,priority:4},
];

console.log(tasks);
//function to add new task in task
function addTask(title, dueTime, priority) {
    try {
      if (!title || typeof dueTime != 'number' || typeof priority != 'number') {
        throw new Error("Invalid input data. Please provide valid title, dueTime (number), and priority (number).");
      }
  
      const newTask = { title, dueTime, priority };
      tasks.push(newTask);
      console.log(`Task "${title}" added successfully.`);
    } catch (error) {
      console.error(error.message);
    }
  }



//function for sorting by theire priority
function sortTasksByPriority() {
    tasks.sort((a, b) => a.priority - b.priority);
    console.log("Tasks sorted by priority.");
  }


//function to Display tasks due within a certain timeframe
function getTasksDueWithin(minutes) {
    const now = 0; // Assume current time is 0 minutes from now
    const dueTasks = tasks.filter(task => task.dueTime <= now + minutes);
    console.log(`Tasks due within ${minutes} minutes:`, dueTasks);
    return dueTasks;
}


//function to Simulate sending reminders using setTimeout() based on the task's dueTime.
function scheduleReminders() {
    tasks.forEach(task => {
        setTimeout(() => {
            console.log(`Reminder: Task "${task.title}" is due now!`);
        }, task.dueTime * 60000); // Convert minutes to milliseconds
    });
}

  addTask("Attend Meeting",2,5);
  //console.log(tasks);
  sortTasksByPriority();
  //console.log(tasks);
  getTasksDueWithin(1);
  //console.log(tasks);
  scheduleReminders();