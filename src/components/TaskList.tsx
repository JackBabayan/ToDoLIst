import { List, Checkbox, Button } from "antd";
import { useTodo } from "../context/TaskContext";

function TaskList() {
  const { tasks, toggleTask, deleteTask, filter } = useTodo();

  const filteredTasks = tasks.filter((task) =>
    filter === "all" ? true : filter === "active" ? !task.completed : task.completed
  );

  return (
    <List
      bordered
      dataSource={filteredTasks}
      renderItem={(task) => (
        <List.Item
          actions={[
            <Checkbox
              checked={task.completed}
              onChange={() => toggleTask(task.id)}
            />,
            <Button type="link" onClick={() => deleteTask(task.id)}>
              Удалить
            </Button>
          ]}
        >
          <span style={{ textDecoration: task.completed ? "line-through" : "none" }}>
            {task.text}
          </span>
        </List.Item>
      )}
    />
  );
}

export default TaskList;
