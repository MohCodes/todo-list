import './style.css'
import { todoList,projects } from './createTodo';
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

    const newProject = document.createElement('div');
    newProject.className = "newProject tab";
    newProject.setAttribute('id',"newProject");
    newProject.textContent = "New Project"
    sideContainerDiv.appendChild(newProject);
    newProject.addEventListener('click',eventClickFunctions.newProjectModal)

    const backTab = document.createElement('div');
    backTab.className = "backTab tab";
    backTab.setAttribute('id',"backTab");
    backTab.textContent = "back"
    sideContainerDiv.appendChild(backTab);

}

    return{sideContainerContent}
})();




const displayingTodos  = (()=>{

    const projectDivs = ()=>{
        mainContent.innerHTML = "";
        for(let i=0;i<projects.length;i++){
            let temp = document.createElement('div');
            temp.className = `project${i} todo`;
            temp.id =`project${i}`
            temp.setAttribute("data-value",`${i}`)
            mainContent.appendChild(temp);


            let topDiv = document.createElement('div');
            topDiv.className = `topDiv`;
            topDiv.id =`topDiv${i}`
            temp.appendChild(topDiv);
            topDiv.textContent = `${projects[i]}`

            let bottomDiv = document.createElement('div');
            bottomDiv.className = `bottomDiv`;
            bottomDiv.id =`bottomDiv${i}`
            temp.appendChild(bottomDiv);
            bottomDiv.textContent = "X"
          

            //removing project functionality
            const removeProject = (event)=>{
                const item = event.target.getAttribute('data-value')
                projects.splice(projects.indexOf(item),1);
                console.log(projects)
                projectDivs();
        }
        bottomDiv.addEventListener('click',removeProject)
    }
}

    return{projectDivs}
})()

const eventClickFunctions  = (()=>{

    const newProjectModal = ()=>{
        const projectModal = document.createElement('div')
        projectModal.className = 'projectModal'
        projectModal.id = 'projectModal'
        container.appendChild(projectModal)

        const projectModalTitle = document.createElement('div')
        projectModalTitle.className = 'projectModalTitle'
        projectModalTitle.id = 'projectModalTitle'
        projectModal.appendChild(projectModalTitle)
        projectModal.textContent = "Enter Project Name"

        const projectModalInput = document.createElement('input')
        projectModalInput.className = 'projectModalInput'
        projectModalInput.id = ' projectModalInput'
        projectModal.appendChild( projectModalInput)

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
            projects.push(projectModalInput.value);
            displayingTodos.projectDivs();
            console.log(projects)

        })

    }


return{newProjectModal}
})()

export{displayingTodos,eventClickFunctions, mainPage}