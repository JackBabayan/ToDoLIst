import { TaskProvider } from '@/contexts/TaskContext';
import { ThemeProvider } from '@/contexts/ThemeContext';

import Header from '@/components/Header';
import TaskForm from '@/components/TaskForm';
import TaskList from '@/components/TaskList';

export default function Home() {

  return (
    <ThemeProvider>
      <TaskProvider>
        <div className="min-h-screen flex justify-between items-center">
          <div className="container py-6">
            <Header />
            <TaskForm />
            <TaskList />
          </div>
        </div>
      </TaskProvider>
    </ThemeProvider>
  );
}