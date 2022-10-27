import React from "react"
import { ITask } from "../interFace"
interface Props {
  task: ITask;
  completeTask(taskCompleted:string):void;
}
export const Todo = ({task, completeTask}:Props) =>{
  return(
    <>
    <div className="task">
      <div className="content">
        <span>{task.task}</span>
        <span>In {task.deadline} day(s)</span>
      </div>
      <button className='btn btn-danger'onClick={()=>{completeTask(task.task)}}>Complete</button>
    </div>
    </>
  )
}