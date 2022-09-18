import { useState } from "react";

import { DynamicCard } from "../../Card/DynamicCard";
import { ListProps } from "../index";
import { MdAdd, MdClose } from "react-icons/md";
import { useTask } from "../../hooks/useTask";
import "../styles.scss";

export function DynamicList({ tasks, title, type }: ListProps) {
  const [inputVisible, setInputVisible] = useState(false);
  const [newTask, setNewmTask] = useState("");
  const { createTask } = useTask();

  function submitTask() {
    createTask(newTask);
    setNewmTask("");
    setInputVisible(false);
  }

  return (
    <div className="list-container">
      <header>
        <h2 className={`title-${type}`}>{title}</h2>
      </header>

      <ul>
        {tasks.map((item, index) => (
          <DynamicCard key={index} task={item} />
        ))}
      </ul>
      <ul>
        {!inputVisible ? (
          <div
            className="session-create-task"
            onClick={() => setInputVisible(!inputVisible)}
          >
            <MdAdd size={20} color="#000" />
            <span>Criar nova tarefa</span>
          </div>
        ) : (
          <div className="session-input">
            <textarea
              placeholder="Digite..."
              onChange={(e) => setNewmTask(e.target.value)}
              value={newTask}
            />
            <div>
              <button onClick={submitTask}>Adicionar tarefa</button>
              <MdClose
                size={30}
                color="#6b778c"
                onClick={() => setInputVisible(!inputVisible)}
              />
            </div>
          </div>
        )}
      </ul>
    </div>
  );
}
