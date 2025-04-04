import { useTasks } from '@/contexts/TaskContext';
import { useState } from 'react';
import Button from '@/components/ui/Buttons';



export default function TaskForm() {
  const { addTask } = useTasks();
  const [title, setTitle] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      addTask(title);
      setTitle('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6 flex gap-4">
      <input
        type="text"
        value={title}
        onChange={e => setTitle(e.target.value)}
        className="w-full p-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
        placeholder="Add a new task"
      />
      <Button type="submit" className="btn btn-primary">
        Add Task
      </Button>
    </form>
  );
}