import { Button, Space } from "antd";
import { useTodo } from "../context/TaskContext";

function TaskFilters() {
  const { filter, setFilter } = useTodo();

  return (
    <Space>
      <Button
        type={filter === "all" ? "primary" : "default"}
        onClick={() => setFilter("all")}
      >
        Все
      </Button>
      <Button
        type={filter === "active" ? "primary" : "default"}
        onClick={() => setFilter("active")}
      >
        Активные
      </Button>
      <Button
        type={filter === "completed" ? "primary" : "default"}
        onClick={() => setFilter("completed")}
      >
        Выполненные
      </Button>
    </Space>
  );
}

export default TaskFilters;
