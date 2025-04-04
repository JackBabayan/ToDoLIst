import { HTMLAttributes } from 'react';

interface LoaderProps extends HTMLAttributes<HTMLDivElement> {}

export default function Loader({ className, ...props }: LoaderProps) {
  return (
    <div className={`loader ${className || ''}`} {...props}>
      <div className="spinner" />
    </div>
  );
}