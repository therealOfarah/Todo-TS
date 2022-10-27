import { ChangeEvent, useEffect, useState } from 'react';
import { ITask } from './interFace';
import './App.css';

function App() {
  // defining the type of states
  const[task, setTask]= useState<string>("")
  const[deadline, setDeadline]= useState<number>(0)
  const[todo, setTodo]= useState<ITask[]>([])

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void =>{
    if( event.target.name === 'task'){
      setTask(event.target.value)
    }else{
      setDeadline(Number(event.target.value))
    }
  }
  const addTask = () =>{
    const newTask ={task: task,  deadline: deadline}
    setTodo([...todo, newTask])
    console.log(todo)
  }
  return (
    <div className="App">
      <div className='header'>
        <div className="inputContainer">
        <input type="text" placeholder='Task name' name='task' onChange={handleChange} />
        <input type="number" name='deadline' placeholder='Due by' onChange={handleChange} />
        </div>
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className='todo' >
      </div>
    </div>
  );
}

export default App;
