import TaskCard from '@/components/ui/TaskCard';
import { Task } from '@/contexts/TaskContext';

interface TaskGroupCardProps {
  groupId: string;
  tasks: Task[];
  onToggleTask: (id: string) => void;
  onRemoveTask: (id: string) => void;
  isActive: boolean;
  zIndex: number;
}

export default function TaskGroupCard({
  groupId,
  tasks,
  onToggleTask,
  onRemoveTask,
  isActive,
  zIndex,
}: TaskGroupCardProps) {
  const maxTasks = 15;
  const displayedTasks = tasks.slice(0, maxTasks);

  return (
    <div
      className={`task-group-card ${isActive ? 'animate-card-switch' : 'opacity-50 scale-95'}`}
      style={{ zIndex, top: isActive ? 0 : `${zIndex * 10}px` }}
    >
      <h2 className="text-lg font-semibold mb-2">Group {+groupId+1}</h2>
      <ul className="space-y-2">
        {displayedTasks.map((task, index) => (
          <TaskCard
            key={task.id}
            task={task}
            onToggleTask={onToggleTask}
            onRemoveTask={onRemoveTask}
            className={`delay-${index * 50}`}
          />
        ))}
      </ul>
    </div>
  );
}