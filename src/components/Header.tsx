import { useTheme } from '@/contexts/ThemeContext';
import Button from '@/components/ui/Buttons';

export default function Header() {
    const { isDark, toggleTheme } = useTheme();

    return (
        <div className="flex justify-between items-center mb-6">
            <h1>Your To-Do list</h1>
            
            <Button variant="icon"  onClick={toggleTheme}>
              {isDark ? '☀️' : '🌙'}
            </Button>
        </div>
    );
}