import './style.css'
import { projectObject,todoObject,todoList,projects } from './createTodo';
const container = document.getElementById('container')


const mainPage  = (()=>{

const mainContainers = () =>{
    const titleDiv = document.createElement('div');
titleDiv.className = "titleDiv";
titleDiv.setAttribute('id',"titleDiv");
container.appendChild(titleDiv);

const mainDiv = document.createElement('div');
mainDiv.className = "mainDiv";
mainDiv.setAttribute('id',"mainDiv");
container.appendChild(mainDiv);

 const sideContainerDiv = document.createElement('div');
 sideContainerDiv.className = "sideContainerDiv";
 sideContainerDiv.setAttribute('id',"sideContainerDiv");
 mainDiv.appendChild(sideContainerDiv);

 const mainContainerDiv = document.createElement('div');
 mainContainerDiv.className = "mainContainerDiv";
 mainContainerDiv.setAttribute('id',"mainContainerDiv");
 mainDiv.appendChild(mainContainerDiv);
}


const mainContainerContent = ()=>{
    mainContainers();

    const mainContentTitle = document.createElement('div');
    mainContentTitle.className = "mainContentTitle";
    mainContentTitle.setAttribute('id',"mainContentTitle");
    mainContainerDiv.appendChild(mainContentTitle);

    const mainContent = document.createElement('div');
    mainContent.className = "mainContent";
    mainContent.setAttribute('id',"mainContent");
    mainContainerDiv.appendChild(mainContent);

}

const sideContainerContent = ()=>{
    mainContainerContent();

    const homeTab = document.createElement('div');
    homeTab.className = "homeTab tab";
    homeTab.setAttribute('id',"homeTab");
    homeTab.textContent = "Home"
    sideContainerDiv.appendChild(homeTab);
    homeTab.addEventListener('click',displayingTodos.projectDivs)

    const newProject = document.createElement('div');
    newProject.className = "newProject tab";
    newProject.setAttribute('id',"newProject");
    newProject.textContent = "New Project"
    sideContainerDiv.appendChild(newProject);
    newProject.addEventListener('click',modals.newProjectModal)
 

    const newTodo = document.createElement('div');
    newTodo.className = "newTodo tab";
    newTodo.setAttribute('id',"newTodo");
    newTodo.textContent = "Add To Do"
    sideContainerDiv.appendChild(newTodo);
    newTodo.style.display= "none";
    newTodo.addEventListener('click',function(){
        
        const todoModal = document.createElement('div')
        todoModal.className = 'projectModal todoModal'
        todoModal.id = 'todoModal'
        container.appendChild(todoModal)

        const todoModalContent = document.createElement('div')
        todoModalContent.className = 'projectModalContent TodoModalContent'
        todoModalContent.id = 'todoModalContent'
        todoModal.appendChild(todoModalContent)

        const todoModalTitle = document.createElement('div')
        todoModalTitle.className = 'projectModalTitle todoModalTitle'
        todoModalTitle.id = 'todoModalTitle'
        todoModalContent.appendChild(todoModalTitle)
        todoModalTitle.textContent = "Enter To Do Title"

        const todoModalTitleInput = document.createElement('input')
        todoModalTitleInput.className = 'projectModalInput todoModalTitleInput'
        todoModalTitleInput.id = ' TodoModalInput'
        todoModalContent.appendChild(todoModalTitleInput)

        const todoModalDescription = document.createElement('div')
        todoModalDescription.className = ' todoModalDescription'
        todoModalDescription.id = 'todoModalDescription'
        todoModalContent.appendChild(todoModalDescription)
        todoModalDescription.textContent = "Enter Description"

        const todoModalDescriptionInput = document.createElement('TEXTAREA')
        todoModalDescriptionInput.className = 'projectModalInput todoModalDescriptionInput'
        todoModalDescriptionInput.id = ' todoModalDescriptionInput'
        todoModalContent.appendChild( todoModalDescriptionInput)


        const todoModalPriority = document.createElement('div')
        todoModalPriority.className = ' todoModalDescription todoModalPriority'
        todoModalPriority.setAttribute('for','todoModalPriorityInput')
        todoModalPriority.id = 'todoModalDescription'
        todoModalContent.appendChild(todoModalPriority)
        todoModalPriority.textContent = "Select Priority"

        const todoModalPriorityInput = document.createElement('select')
        todoModalPriorityInput.className = 'projectModalInput todoModalPriorityInput'
        todoModalPriorityInput.id = ' todoModalPriorityInput'
        todoModalContent.appendChild( todoModalPriorityInput)

        const todoModalPriorityHigh = document.createElement('option')
        todoModalPriorityHigh.setAttribute('value','High')
        todoModalPriorityHigh.textContent = "High"
        todoModalPriorityInput.appendChild(todoModalPriorityHigh)

        const todoModalPriorityMedium = document.createElement('option')
        todoModalPriorityMedium.setAttribute('value','Medium')
        todoModalPriorityMedium.textContent = "Medium"
        todoModalPriorityInput.appendChild(todoModalPriorityMedium)

        const todoModalPriorityLow = document.createElement('option')
        todoModalPriorityLow.setAttribute('value','Low')
        todoModalPriorityLow.textContent = "Low"
        todoModalPriorityInput.appendChild(todoModalPriorityLow)



        const todoModalDueDate = document.createElement('div')
        todoModalDueDate.className = 'projectModalDueDate TodoModalDueDate'
        todoModalDueDate.id = 'projectModalDueDate'
        todoModalContent.appendChild(todoModalDueDate)
        todoModalDueDate.textContent = "Enter Due Date"

        const todoModalDueDateInput = document.createElement('input')
        todoModalDueDateInput.setAttribute('type','date')
        todoModalDueDateInput.className = 'projectModalDueDateInput todoModalDueDateInput'
        todoModalDueDateInput.id = ' todoModalDueDateInput'
        todoModalContent.appendChild( todoModalDueDateInput)




        const todoModalOptions = document.createElement('div')
        todoModalOptions.className = 'projectModalOptions todoModalOptions'
        todoModalOptions.id = ' todoModalOptions'
        todoModal.appendChild(todoModalOptions)


        const todoModalCancel = document.createElement('div')
        todoModalCancel.className = 'projectModalCancel projectOptions todoModalCancel'
        todoModalCancel.id = ' todoModalCancel'
        todoModalOptions.appendChild( todoModalCancel)
        todoModalCancel.textContent = "Cancel"
        todoModalCancel.addEventListener('click',function(){
            todoModal.style.display = "none";
        })

        const todoModalSubmit = document.createElement('div')
        todoModalSubmit.className = 'projectModalSubmit projectOptions todoModalSubmit'
        todoModalSubmit.id = ' todoModalSubmit'
        todoModalOptions.appendChild( todoModalSubmit)
        todoModalSubmit.textContent = "Submit"
        todoModalSubmit.addEventListener('click',function (event){
            todoModal.style.display='none'
            const todoTitleValue= todoModalTitleInput.value;
            const todoDescriptionValue=todoModalDescriptionInput.value;
            const todoPriorityValue = todoModalPriorityInput.value;
            const todoDueDateValue = todoModalDueDateInput.value;
            const newTodoObject = new todoObject (todoTitleValue,todoDescriptionValue,todoPriorityValue,todoDueDateValue);
            displayingTodos.gangang(newTodoObject)
        })

    })

}

    return{sideContainerContent}
})();

const modals  = (()=>{

    const newProjectModal = ()=>{


        const projectModal = document.createElement('div')
        projectModal.className = 'projectModal'
        projectModal.id = 'projectModal'
        container.appendChild(projectModal)

        const projectModalContent = document.createElement('div')
        projectModalContent.className = 'projectModalContent'
        projectModalContent.id = 'projectModalContent'
        projectModal.appendChild(projectModalContent)

        const projectModalTitle = document.createElement('div')
        projectModalTitle.className = 'projectModalTitle'
        projectModalTitle.id = 'projectModalTitle'
        projectModalContent.appendChild(projectModalTitle)
        projectModalTitle.textContent = "Enter Project Name"

        const projectModalInput = document.createElement('input')
        projectModalInput.className = 'projectModalInput'
        projectModalInput.id = ' projectModalInput'
        projectModalContent.appendChild( projectModalInput)



        const projectModalDueDate = document.createElement('div')
        projectModalDueDate.className = 'projectModalDueDate'
        projectModalDueDate.id = 'projectModalDueDate'
        projectModalContent.appendChild(projectModalDueDate)
        projectModalDueDate.textContent = "Enter Due Date"

        const projectModalDueDateInput = document.createElement('input')
        projectModalDueDateInput.setAttribute('type','date')
        projectModalDueDateInput.className = 'projectModalDueDateInput'
        projectModalDueDateInput.id = ' projectModalDueDateInput'
        projectModalContent.appendChild( projectModalDueDateInput)




        const projectModalOptions = document.createElement('div')
        projectModalOptions.className = 'projectModalOptions'
        projectModalOptions.id = ' projectModalOptions'
        projectModal.appendChild(projectModalOptions)


        const projectModalCancel = document.createElement('div')
        projectModalCancel.className = 'projectModalCancel projectOptions'
        projectModalCancel.id = ' projectModalCancel'
        projectModalOptions.appendChild( projectModalCancel)
        projectModalCancel.textContent = "Cancel"
        projectModalCancel.addEventListener('click',function(){
            projectModal.style.display = "none";
        })

        const projectModalSubmit = document.createElement('div')
        projectModalSubmit.className = 'projectModalSubmit projectOptions'
        projectModalSubmit.id = ' projectModalSubmit'
        projectModalOptions.appendChild( projectModalSubmit)
        projectModalSubmit.textContent = "Submit"
        projectModalSubmit.addEventListener('click',function(){
            projectModal.style.display = "none";
            
            let newTodo = [];
            let newProjects = new projectObject (projectModalInput.value,projectModalDueDateInput.value,newTodo);
            projects.push(newProjects);
            displayingTodos.projectDivs();
            // HOW TO ADD TODOS to project objects
            // const newtodoo = new todoObject ('gang','gang','gang','gang');
            // newProjects['todo'].push(newtodoo);
            console.log(projects)
            return{newTodo}
 
        })

    }

    const projectComponentsPage = ()=>{
        const projectPage = document.createElement('div');
        projectPage.className ="projectPage";
        projectPage.id = "projectPage"; 

    }


return{newProjectModal,projectComponentsPage}
})()



const displayingTodos  = (()=>{

    const projectDivs = ()=>{

        const newTodoButton = document.getElementById("newTodo")
        newTodoButton.style.display = "none"
        mainContent.innerHTML = "";
        for(let i=0;i<projects.length;i++){
            let temp = document.createElement('div');
            temp.className = `project${i} todo`;
            temp.id =`project${i}`
            temp.setAttribute("data-value",`${i}`)
            mainContent.appendChild(temp);

            //opening object function
            const openProject = (event)=>{
            globalThis.arrayDataValue = event.target.getAttribute('data-value')
            mainContent.innerHTML="";
            for(let z = 0;z<projects[arrayDataValue]["todo"].length;z++){

            const newTodoButton = document.getElementById("newTodo")
            newTodoButton.style.display = ""

            const todoDisplay = document.createElement('div')
            todoDisplay.className = `todoDisplay`;
            todoDisplay.id =`todoDisplay${z}`
            todoDisplay.setAttribute("data-value",`${z}`)
            mainContent.appendChild(todoDisplay);


            const todoTopDiv = document.createElement('div')
            todoTopDiv.className = `todoTopDiv`;
            todoTopDiv.id =`todoTopDiv${z}`
            todoTopDiv.setAttribute("data-value",`${z}`)
            todoDisplay.appendChild(todoTopDiv);

            const todoTitle = document.createElement('div')
            todoTitle.className = `todoTitle`;
            todoTitle.id =`todoTitle${z}`
            todoTitle.setAttribute("data-value",`${z}`)
            todoTopDiv.appendChild(todoTitle);
            todoTitle.textContent = `Title: ${projects[arrayDataValue]["todo"][z]['title']}`

            const todoDescription = document.createElement('div')
            todoDescription.className = `todoDescription`;
            todoDescription.id =`todoDescription${z}`
            todoDescription.setAttribute("data-value",`${z}`)
            todoTopDiv.appendChild(todoDescription);
            todoDescription.textContent = `Description: ${projects[arrayDataValue]["todo"][z]['description']}`

            const todoDueDate = document.createElement('div')
            todoDueDate.className = `todoDueDate`;
            todoDueDate.id =`todoDueDate${z}`
            todoDueDate.setAttribute("data-value",`${z}`)
            todoTopDiv.appendChild(todoDueDate);
            todoDueDate.textContent = `Due Date: ${projects[arrayDataValue]["todo"][z]['dueDate']}`

            const todoPriority = document.createElement('div')
            todoPriority.className = `todoPriority`;
            todoPriority.id =`todoPriority${z}`
            todoPriority.setAttribute("data-value",`${z}`)
            todoTopDiv.appendChild(todoPriority);
            todoPriority.textContent = `Priority: ${projects[arrayDataValue]["todo"][z]['priority']}`

            const todoBotDiv = document.createElement('div')
            todoBotDiv.className = `todoBotDiv`;
            todoBotDiv.id =`todoBotDiv${z}`
            todoBotDiv.setAttribute("data-value",`${z}`)
            todoDisplay.appendChild(todoBotDiv);
            todoBotDiv.textContent = "X"

            const reTodo = (event)=>{
                const todoArrayValue = event.target.getAttribute('data-value')
                projects[arrayDataValue]["todo"].splice(todoArrayValue,1);

                ///
                mainContent.innerHTML="";
                for(let z = 0;z<projects[arrayDataValue]["todo"].length;z++){
                const todoDisplay = document.createElement('div')
                todoDisplay.className = `todoDisplay`;
                todoDisplay.id =`todoDisplay${z}`
                todoDisplay.setAttribute("data-value",`${z}`)
                mainContent.appendChild(todoDisplay);
    
                const todoTopDiv = document.createElement('div')
                todoTopDiv.className = `todoTopDiv`;
                todoTopDiv.id =`todoTopDiv${z}`
                todoTopDiv.setAttribute("data-value",`${z}`)
                todoDisplay.appendChild(todoTopDiv);

                const todoTitle = document.createElement('div')
            todoTitle.className = `todoTitle`;
            todoTitle.id =`todoTitle${z}`
            todoTitle.setAttribute("data-value",`${z}`)
            todoTopDiv.appendChild(todoTitle);
            todoTitle.textContent = `Title: ${projects[arrayDataValue]["todo"][z]['title']}`

            const todoDescription = document.createElement('div')
            todoDescription.className = `todoDescription`;
            todoDescription.id =`todoDescription${z}`
            todoDescription.setAttribute("data-value",`${z}`)
            todoTopDiv.appendChild(todoDescription);
            todoDescription.textContent = `Description: ${projects[arrayDataValue]["todo"][z]['description']}`

            const todoDueDate = document.createElement('div')
            todoDueDate.className = `todoDueDate`;
            todoDueDate.id =`todoDueDate${z}`
            todoDueDate.setAttribute("data-value",`${z}`)
            todoTopDiv.appendChild(todoDueDate);
            todoDueDate.textContent = `Due Date: ${projects[arrayDataValue]["todo"][z]['dueDate']}`

            const todoPriority = document.createElement('div')
            todoPriority.className = `todoPriority`;
            todoPriority.id =`todoPriority${z}`
            todoPriority.setAttribute("data-value",`${z}`)
            todoTopDiv.appendChild(todoPriority);
            todoPriority.textContent = `Priority: ${projects[arrayDataValue]["todo"][z]['priority']}`

    
            const todoBotDiv = document.createElement('div')
            todoBotDiv.className = `todoBotDiv`;
            todoBotDiv.id =`todoBotDiv${z}`
            todoBotDiv.setAttribute("data-value",`${z}`)
            todoDisplay.appendChild(todoBotDiv);
            todoBotDiv.textContent = "X"
            todoBotDiv.addEventListener('click', reTodo)

            const newTodoButton = document.getElementById("newTodo")
            newTodoButton.style.display = ""
                }
            
            console.log(projects[arrayDataValue]["todo"])
            }

            todoBotDiv.addEventListener('click', reTodo)

            // todoDisplay.textContent = `${projects[arrayDataValue]["todo"][z]['title']},${projects[arrayDataValue]["todo"][z]['dueDate']}`
            console.log(projects[arrayDataValue]["todo"][z])
            }
     

        };
            let topDiv = document.createElement('div');
            topDiv.className = `topDiv`;
            topDiv.id =`topDiv${i}`
            topDiv.setAttribute('data-value',`${i}`)
            temp.appendChild(topDiv);
            topDiv.textContent = `Project Title: ${projects[i].projectTitle}`
            topDiv.addEventListener('click',function(){
                openProject(event)
                const newTodoButton = document.getElementById("newTodo")
                newTodoButton.style.display = ""
                
            })
            let projectDueDate = document.createElement('div')
            projectDueDate.className = "projectDueDate"
            projectDueDate.id = "projectDueDate"
            projectDueDate.setAttribute('data-value',`${i}`)
            topDiv.appendChild(projectDueDate);
            projectDueDate.textContent = `Due Date: ${projects[i].dueDate}`
            
            let bottomDiv = document.createElement('div');
            bottomDiv.className = `bottomDiv`;
            bottomDiv.id =`bottomDiv${i}`
            bottomDiv.setAttribute('data-value',`${i}`)
            temp.appendChild(bottomDiv);
            bottomDiv.textContent = "X"
          

            //removing project functionality
            const removeProject = (event)=>{
                const item = event.target.getAttribute('data-value')
                projects.splice(item,1);
                console.log(projects)
                projectDivs();
        }
        bottomDiv.addEventListener('click',removeProject)
    }
}

const gangang = (obj)=>{
    projects[arrayDataValue]["todo"].push(obj);
    projectDivs();
    
}

    return{projectDivs,gangang}
})()


///////seeeeeet upppp add todo functionality link to newtodo for each project 


export{displayingTodos,modals, mainPage}