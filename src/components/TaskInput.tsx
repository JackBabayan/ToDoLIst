import { useState } from "react";
import { Input, Button, Row, Col } from "antd";
import { useTodo } from "../context/TaskContext";

function TaskInput() {
  const [input, setInput] = useState("");
  const { addTask } = useTodo();

  return (
    <Row gutter={[8, 8]} style={{ marginBottom: "20px" }}>
      <Col span={18}>
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Новая задача"
        />
      </Col>
      <Col span={6}>
        <Button
          type="primary"
          block
          onClick={() => { if (input.trim()) { addTask(input); setInput(""); } }}
        >
          Добавить
        </Button>
      </Col>
    </Row>
  );
}

export default TaskInput;
