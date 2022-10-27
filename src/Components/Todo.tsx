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
        <span>{task.deadline}</span>
      </div>
      <button onClick={()=>{completeTask(task.task)}}>Complete</button>
    </div>
    </>
  )
}