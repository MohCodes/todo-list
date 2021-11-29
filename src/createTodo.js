

class todoListObject {
    constructor(title,description,dueDate,priority,subTodo){
        this.title=title;
        this.description=description;
        this.dueDate = dueDate;
        this.priority=priority;
        this.subTodo=subTodo;

    }
    
}

class subTodoListObject {
    constructor(subtitle,subdescription,subdueDate,subpriority){
        this.title=subtitle;
        this.description=subdescription;
        this.dueDate = subdueDate;
        this.priority=subpriority;


    }
    
}

const cock1 =new subTodoListObject ('sub','sub','sub','sub');

const cock = new todoListObject ("gang","gang","gang","gang",cock1,)

const todoList = [cock,cock,cock,cock];

export{todoListObject,
        todoList,
        };