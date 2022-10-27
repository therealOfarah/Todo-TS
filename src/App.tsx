import { ChangeEvent, useState } from 'react';
import { ITask } from './interFace';
import { Todo } from './Components/Todo';
import './App.css';

function App() {
  // defining the type of states
  const[task, setTask]= useState<string>("")
  const[deadline, setDeadline]= useState<number>(0)
  const[todos, setTodos]= useState<ITask[]>([])

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void =>{
    if( event.target.name === 'task'){
      setTask(event.target.value)
    }else{
      setDeadline(Number(event.target.value))
    }
  }
  const addTask = () =>{
    const newTask ={task: task,  deadline: deadline}
    setTodos([...todos, newTask])
    setTask("")
    setDeadline(0)
    console.log(todos)
  }
  const completeTask = (taskCompleted: string): void=>{
    setTodos(todos.filter((task) =>{
      return task.task !== taskCompleted
    }))
  }
  return (
    <>
    <div className="App">
      <div className='header'>
        <div className="inputContainer">
        <input type="text"  autoComplete='off' placeholder='Task name' value={task} name='task' onChange={handleChange} />
        <input type="number"  placeholder='Due by' value={deadline} name='deadline' onChange={handleChange} />
        </div>
        <button className='btn btn-primary' onClick={addTask}>Add Task</button>
      </div>
      <div className='todo'>
      {todos.map((task:ITask, key: number)=>{
        return <Todo task={task} key={key} completeTask={completeTask}/>
      })}
      </div>
    </div>
    </>
  );
}

export default App;
