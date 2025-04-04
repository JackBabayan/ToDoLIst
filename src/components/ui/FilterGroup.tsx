import { ReactNode } from 'react';

interface FilterGroupProps {
    children: ReactNode;
}

export default function FilterGroup({ children }: FilterGroupProps) {
    return <div className="filter-group">
        {children}
    </div>;
}