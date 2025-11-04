export interface Task {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  createdAt: string;
  updatedAt: string;
}

export type NewTask = Omit<Task, 'id' | 'createdAt' | 'updatedAt' | 'completed'>; 

export type UpdateTask = Partial<Omit<Task, 'id' | 'createdAt' | 'updatedAt'>>;