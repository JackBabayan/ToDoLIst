import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface Task {
  id: string;
  title: string;
  completed: boolean;
}

interface TaskContextType {
  tasks: Task[];
  addTask: (title: string) => void;
  removeTask: (id: string) => void;
  toggleTask: (id: string) => void;
  editTask: (id: string, newTitle: string) => void;
}

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export function TaskProvider({ children }: { children: ReactNode }) {
  const [tasks, setTasks] = useState<Task[]>([]); // Изначально пустой массив

  // Загружаем задачи из localStorage только на клиенте
  useEffect(() => {
    if (typeof window !== 'undefined') { // Проверяем, что мы на клиенте
      const savedTasks = localStorage.getItem('tasks');
      if (savedTasks) {
        setTasks(JSON.parse(savedTasks));
      }
    }
  }, []); // Выполняется один раз при монтировании на клиенте

  // Сохраняем задачи в localStorage при каждом изменении
  useEffect(() => {
    if (typeof window !== 'undefined') { // Проверяем, что мы на клиенте
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }, [tasks]);

  const addTask = (title: string) => {
    setTasks(prev => [...prev, { id: Date.now().toString(), title, completed: false }]);
  };

  const removeTask = (id: string) => {
    setTasks(prev => prev.filter(task => task.id !== id));
  };

  const toggleTask = (id: string) => {
    setTasks(prev =>
      prev.map(task => (task.id === id ? { ...task, completed: !task.completed } : task))
    );
  };

  const editTask = (id: string, newTitle: string) => {
    setTasks(prev =>
      prev.map(task => (task.id === id ? { ...task, title: newTitle } : task))
    );
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, removeTask, toggleTask, editTask }}>
      {children}
    </TaskContext.Provider>
  );
}

export function useTasks() {
  const context = useContext(TaskContext);
  if (!context) throw new Error('useTasks must be used within a TaskProvider');
  return context;
}