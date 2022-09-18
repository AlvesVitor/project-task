import {
  MdEdit,
  MdSave,
  MdClose,
  MdDeleteForever,
  MdCheckCircle,
} from "react-icons/md";
import { ITask } from "../../../interfaces/task";
import { useTask } from "../../hooks/useTask";
import { useState } from "react";
import "../styles.scss";

interface CardProps {
  task: ITask;
}

export function DynamicCard({ task }: CardProps) {
  const { updateTask } = useTask();
  const [edit, setEdit] = useState(false);
  const [textEdit, setTextEdit] = useState(task.description);
  const type = task.status.toLowerCase();

  function editTask() {
    const taskUpdate = { ...task, description: textEdit };

    updateTask(task.id, taskUpdate);
    setEdit(!edit);
  }

  function deletedTask() {
    const taskUpdate = { ...task, status: "DELETED" };
    updateTask(task.id, taskUpdate);
  }

  function completedTask() {
    const taskUpdate = { ...task, status: "COMPLETED" };
    updateTask(task.id, taskUpdate);
  }

  return (
    <div className={`card-container ${type}`}>
      {!edit ? (
        <>
          <p>{task.description}</p>
          <div className="card-options">
            <MdCheckCircle size={20} color="#000" onClick={completedTask} />
            <MdEdit size={20} color="#000" onClick={() => setEdit(!edit)} />
            <MdDeleteForever size={20} color="#000" onClick={deletedTask} />
          </div>
        </>
      ) : (
        <>
          <textarea
            value={textEdit}
            onChange={(e) => setTextEdit(e.target.value)}
          />
          <div>
            <MdSave size={20} color="#000" onClick={editTask} />
            <MdClose size={20} color="#000" onClick={() => setEdit(!edit)} />
          </div>
        </>
      )}
    </div>
  );
}
