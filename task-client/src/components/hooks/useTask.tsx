import { request } from "../../services/request";
import {
  createContext,
  ReactNode,
  useContext,
  useState,
  useEffect,
} from "react";
import { ITask } from "../../interfaces/task";
import { toast } from "react-toastify";

interface TaskProviderProps {
  children: ReactNode;
}
interface TaskGroup {
  pedding: ITask[];
  completed: ITask[];
  deleted: ITask[];
}

interface TaskContextData {
  tasks: TaskGroup;
  createTask: (data: string) => void;
  updateTask: (id: Number, data: ITask) => void;
}

const TaskContext = createContext<TaskContextData>({} as TaskContextData);

export function TaskProvider({ children }: TaskProviderProps) {
  const [tasks, setTasks] = useState<TaskGroup>({
    pedding: [],
    completed: [],
    deleted: [],
  });

  useEffect(() => {
    findAll();
  }, []);

  async function findAll() {
    await request({ url: `/task`, type: "GET", value: null })
      .then((data) => {
        setTasks(data);
      })
      .catch((e) => toast.error(e));
  }

  async function createTask(data: string) {
    if (!data.trim()) {
      return toast.warning("Atenção: Insira insira um valor válido");
    }
    await request({ url: `/task`, type: "POST", value: { description: data } })
      .then((data) => {
        setTasks((prevState) => ({
          ...prevState,
          pedding: [...prevState?.pedding, data],
        }));
      })
      .catch((e) => toast.error(e));
  }

  async function updateTask(id: Number, data: ITask) {
    await request({
      url: `/task/${id}`,
      type: "PUT",
      value: data,
    })
      .then(() => {
        findAll();
      })
      .catch((e) => toast.error(e));
  }

  return (
    <TaskContext.Provider value={{ tasks, createTask, updateTask }}>
      {children}
    </TaskContext.Provider>
  );
}

export function useTask(): TaskContextData {
  return useContext(TaskContext);
}
