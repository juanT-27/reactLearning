import { useState } from "react";

export default function NavBar({newTask}) {
  let [active, setActive]= useState(true)

  function handleFormSubmit(e){
    e.preventDefault()
    let inputValue= e.target.querySelector("#taskToAdd").value;
    let task= {title:inputValue, state:false}
    newTask(task)
  }


  function handleChange(){
    setActive(!active)
  }

  return (
    <header>
      <nav className="nav">
        <h1>To-do App</h1>
      </nav>
      <form onSubmit={(e)=>handleFormSubmit(e)}>
        <input type="checkbox" value="addNew" onChange={handleChange}   />
        <input type="text" placeholder="add a new Task"  id="taskToAdd" disabled={active} />
        <input type="submit" />
      </form>
    </header>
  );
}
