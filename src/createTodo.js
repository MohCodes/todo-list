class projectObject {
  constructor(projectTitle, dueDate, todo) {
    this.projectTitle = projectTitle;
    this.dueDate = dueDate;
    this.todo = todo;
  }
}

class todoObject {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }
}

/// data structure for project/ todo list [ Project object 
//containing a subarray with many todo objects]

const todog2 = [];
const todog1 = new todoObject('Go Shopping', 'Get Bread', '03/12/2021', 'High');
const todog3 = new todoObject('Go Shopping', 'Get Bananas', '03/12/2021', 'High');
todog2.push(todog1, todog3);
const defaultProject = new projectObject('default', '03/12/2021', todog2);
const projects = [defaultProject];
const todoList = [];

export {
  projectObject,
  todoObject,
  todoList,
  projects,
  defaultProject,

};

/// //create page for each project upon clicking an array is created and filled with a todo object
