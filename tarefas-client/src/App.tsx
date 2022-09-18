import { TaskProvider } from "./components/hooks/useTask";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Home } from "./pages/Home";
import "./styles/global.scss";

export function App() {
  return (
    <div className="App">
      <TaskProvider>
        <Home />
      </TaskProvider>
      <ToastContainer />
    </div>
  );
}
