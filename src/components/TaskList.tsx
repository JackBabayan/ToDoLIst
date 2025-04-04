import { useState, useEffect } from 'react';
import { useTasks } from '@/contexts/TaskContext';
import FilterGroup from '@/components//ui/FilterGroup';
import Button from '@/components//ui/Buttons';
import TaskGroupCard from '@/components//ui/TaskGroupCard';
import Loader from '@/components//ui/Loader';

export default function TaskList() {
  const { tasks, removeTask, toggleTask } = useTasks();
  const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all');
  const [isLoading, setIsLoading] = useState(true);
  const [activeGroupIndex, setActiveGroupIndex] = useState(0);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000); // Симуляция загрузки
  }, []);

  const filteredTasks = tasks.filter(task => {
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true;
  });

  const taskGroups: Record<string, typeof tasks> = {};
  filteredTasks.forEach((task, index) => {
    const groupId = Math.floor(index / 10).toString();
    taskGroups[groupId] = taskGroups[groupId] || [];
    taskGroups[groupId].push(task);
  });

  const groupIds = Object.keys(taskGroups);
  const totalGroups = groupIds.length;

  const handleNext = () => {
    setActiveGroupIndex(prev => (prev + 1) % totalGroups);
  };

  const handlePrev = () => {
    setActiveGroupIndex(prev => (prev - 1 + totalGroups) % totalGroups);
  };

  if (isLoading) return <Loader />;

  return (
    <div className="animate-page-load">
      <FilterGroup>
        {(['all', 'active', 'completed'] as const).map(f => (
          <Button
            key={f}
            variant="secondary"
            onClick={() => setFilter(f)}
            className={`capitalize ${filter === f ? 'bg-blue-500 text-white hover:bg-blue-600' : ''}`}
          >
            {f}
          </Button>
        ))}
      </FilterGroup>
      {totalGroups > 0 ? (
        <div className="task-group">
            {totalGroups > 0 && (
              <div className="flex justify-between my-4">
                <Button variant="secondary" onClick={handlePrev}>
                  Prev
                </Button>
                <Button variant="secondary" onClick={handleNext}>
                  Next
                </Button>
              </div>
            )}
          <div className="task-group-stack">

            {groupIds.map((groupId, index) => (
              <TaskGroupCard
                key={groupId}
                groupId={groupId}
                tasks={taskGroups[groupId]}
                onToggleTask={toggleTask}
                onRemoveTask={removeTask}
                isActive={index === activeGroupIndex}
                zIndex={index === activeGroupIndex ? 1000 : totalGroups - index}
              />
            ))}
          </div>
        </div>
      ) : (
        <p className="text-center text-gray-500">No tasks yet.</p>
      )}
    </div>
  );
}