import {todoListObject, todoList,defaultProject,projects} from "./createTodo"
import{mainPage,displayingTodos,eventClickFunctions} from "./DOM"



function setData() {
    localStorage.setItem('projects', JSON.stringify(projects));
}
mainPage.sideContainerContent();
displayingTodos.projectDivs();




export{setData

}
