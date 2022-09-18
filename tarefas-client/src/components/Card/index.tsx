import { ITask } from "../../interfaces/task";
import "./styles.scss";

interface CardProps {
  task: ITask;
}

export function Card({ task }: CardProps) {
  const type = task.status.toLowerCase();
  return (
    <div className={`card-container ${type}`}>
      <p>{task.description}</p>
    </div>
  );
}
