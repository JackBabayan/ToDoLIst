import { render, screen, fireEvent } from "@testing-library/react";
import TodoApp from "../App";

describe("TodoApp", () => {
  test("Добавление новой задачи", () => {
    render(<TodoApp />);
    const input = screen.getByPlaceholderText("Новая задача");
    const addButton = screen.getByText("Добавить");

    fireEvent.change(input, { target: { value: "Купить молоко" } });
    fireEvent.click(addButton);

    expect(screen.getByText("Купить молоко")).toBeInTheDocument();
  });

  test("Переключение состояния задачи", () => {
    render(<TodoApp />);
    const input = screen.getByPlaceholderText("Новая задача");
    const addButton = screen.getByText("Добавить");

    fireEvent.change(input, { target: { value: "Почитать книгу" } });
    fireEvent.click(addButton);

    const checkbox = screen.getByRole("checkbox");
    fireEvent.click(checkbox);

    expect(checkbox).toBeChecked();
  });

  test("Удаление задачи", () => {
    render(<TodoApp />);
    const input = screen.getByPlaceholderText("Новая задача");
    const addButton = screen.getByText("Добавить");

    fireEvent.change(input, { target: { value: "Выгулять собаку" } });
    fireEvent.click(addButton);

    const deleteButton = screen.getByText("Удалить");
    fireEvent.click(deleteButton);

    expect(screen.queryByText("Выгулять собаку")).not.toBeInTheDocument();
  });
});
