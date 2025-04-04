import { useState } from 'react';
import {useTasks , Task } from '@/contexts/TaskContext';
import Button from '@/components/ui/Buttons';

interface TaskCardProps {
  task: Task; // Передаем задачу напрямую
  onToggleTask: (id: string) => void;
  onRemoveTask: (id: string) => void;
  className?: string;
}

export default function TaskCard({ task, onToggleTask, onRemoveTask, className }: TaskCardProps) {
  const { editTask } = useTasks();
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title);

  const handleEdit = () => {
    if (isEditing && editedTitle.trim()) {
      editTask(task.id, editedTitle);
    }
    setIsEditing(!isEditing);
  };

  return (
    <div className={`task-card ${task.completed ? 'opacity-75' : ''} ${className || ''}`}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggleTask(task.id)}
        className="w-5 h-5"
      />
      {isEditing ? (
        <input
          type="text"
          value={editedTitle}
          onChange={e => setEditedTitle(e.target.value)}
          className="flex-1 p-1 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onKeyDown={e => e.key === 'Enter' && handleEdit()}
        />
      ) : (
        <span className={`flex-1 ${task.completed ? 'line-through text-gray-500 dark:text-gray-400' : ''}`}>
          {task.title}
        </span>
      )}
      <Button variant="icon" onClick={handleEdit}>
        {isEditing ? '💾' : '✏️'}
      </Button>
      <Button variant="icon" onClick={() => onRemoveTask(task.id)}>
        ×
      </Button>
    </div>
  );
}