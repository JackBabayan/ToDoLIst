import { Layout } from "antd";
import TaskInput from "./components/TaskInput";
import TaskFilters from "./components/TaskFilters";
import TaskList from "./components/TaskList";
import { TodoProvider } from "./context/TaskContext";

const { Content } = Layout;

export default function App() {
  return (
    <TodoProvider>
      <Layout style={{ minHeight: "100vh" }}>
        <Content style={{ padding: "20px" }}>
          <TaskInput />
          <TaskFilters />
          <TaskList />
        </Content>
      </Layout>
    </TodoProvider>
  );
}
