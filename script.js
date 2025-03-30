const addbtn = document.getElementById('addtask')
const taskInput = document.getElementById('taskinput')
const taskList = document.getElementById('tasklist')


loadTask()

function addtask(){
  const task = taskInput.value.trim()

  if(task){
    creatTaskElement(task)
    taskInput.value=""
    saveTask()
  }else{
    alert('please Enter a task!')
  }
}

addbtn.addEventListener('click',()=>{
    addtask()
    // console.log(addtask);
    
})

function creatTaskElement(task){
    const listItem = document.createElement('li')
    listItem.textContent = task

    const deleteButton = document.createElement('button')
    deleteButton.textContent = 'Delete'
    deleteButton.className = 'deleteTask'

    listItem.appendChild(deleteButton)

    taskList.appendChild(listItem)

    deleteButton.addEventListener('click',() => {
        taskList.removeChild(listItem)
    })

}


function saveTask(){
    let tasks = []
    taskList.querySelectorAll('li').forEach((item) =>{
        tasks.push(item.textContent.replace('Delete','').trim())

    })

    localStorage.setItem('task',JSON.stringify(tasks))
}

function loadTask(){
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(creatTaskElement)

}


// mode

let mode = document.getElementById('mode')
let newbody = document.getElementById('body')

mode.addEventListener('click', () => {
    newbody.style.backgroundColor = "rgb(238, 162, 76)"
})