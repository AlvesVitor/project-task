import { DynamicList } from "../List/DynamicList";
import { useTask } from "../hooks/useTask";
import { List } from "../List";
import "./styles.scss";

export function Board() {
  const { tasks } = useTask();
  return (
    <div className="board-container">
      <DynamicList tasks={tasks.pedding} title="Pendentes" type="pedding" />
      <List tasks={tasks.completed} title="Concluídas" type="completed" />
      <List tasks={tasks.deleted} title="Deletadas" type="deleted" />
    </div>
  );
}
