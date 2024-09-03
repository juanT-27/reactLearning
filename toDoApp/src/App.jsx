import React from 'react'
import { useState } from 'react'
import './index.css'

import NavBar from './components/navBar'

function App() {
 let [theme, setTheme]= useState(false)
 let [tasks, setTasks]= useState([])

 function addNewTask(newTask){
    setTasks([...tasks,newTask])
 }

 function deleteTask(taskId){
  let deleted= tasks.filter(task=> task.title !== taskId)
  console.log(deleted)
  setTasks(deleted)
 }

  return (
    <>
    <NavBar newTask={addNewTask}/>
    <form>
      {tasks.map((task, idx)=> (
        <div key={"task" + idx}>
        <label type="text" className={task.state ? "done": "toDo"}>{task.title}</label> 
        <input type="checkBox" name="taskTitle" id={"task"+idx} onChange={()=>updateState(task.title, task.state)}/>
        <button onClick={()=>deleteTask(task.title)}> Delete</button>
        </div>
      ))}
    </form>
    </>
  )
}

export default App
