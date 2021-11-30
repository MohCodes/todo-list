

class todoListObject {
    constructor(title,description,dueDate,priority,subTodo){
        this.title=title;
        this.description=description;
        this.dueDate = dueDate;
        this.priority=priority;
        this.subTodo=subTodo;
    }
    
}



const cock = new todoListObject ("yeah","gang","gang","gang",'gang',)
const projects = ["default"];

const todoList = [cock,cock,cock]; //array of todos containing array of subtodos in each todo

export{todoListObject,
        todoList,
        projects
        };