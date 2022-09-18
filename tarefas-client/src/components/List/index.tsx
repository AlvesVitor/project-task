import { ITask } from "../../interfaces/task";
import { Card } from "../Card";
import "./styles.scss";

export interface ListProps {
  tasks: ITask[];
  title: string;
  type: string;
}

export function List({ tasks, title, type }: ListProps) {
  return (
    <div className="list-container readonly">
      <header>
        <h2 className={`title-${type}`}>{title}</h2>
      </header>
      <ul>
        {tasks.map((item, index) => (
          <Card key={index} task={item} />
        ))}
      </ul>
    </div>
  );
}
