import React from "react"
import { ITask } from "../interFace"
interface Props {
  task: ITask;
}
export const Todo = ({task}:Props) =>{
  return(
    <>
    <div className="task">
      <div className="content">
        <span>{task.task}</span>
        <span>{task.deadline}</span>
      </div>
      <button>Complete</button>
    </div>
    </>
  )
}