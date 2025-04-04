import { z } from 'zod';

export const taskSchema = z.object({
  title: z.string().min(1, 'Task title is required').max(100),
  completed: z.boolean().optional(),
});

export type Task = z.infer<typeof taskSchema> & { id: string };