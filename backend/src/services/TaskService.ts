import { Level } from 'level';
import { Task, NewTask, UpdateTask } from '../models/Task.js';
import { v4 as uuidv4 } from 'uuid';

const db = new Level<string, Task>('./data/tasks', { valueEncoding: 'json' });

export class TaskService {
  private _connection = db; 

  async create(data: NewTask): Promise<Task> {
    if (!data.title || data.title.trim() === '') {
        throw new Error('Title is required'); 
    }
    
    const now = new Date().toISOString();
    
    const newTask: Task = {
      id: uuidv4(),
      title: data.title,
      description: data.description || '',
      completed: false,
      createdAt: now,
      updatedAt: now,
    };
    
    await this._connection.put(newTask.id, newTask);
    return newTask;
  }

  async getAll(): Promise<Task[]> {
    const tasks: Task[] = [];
    for await (const [key, value] of this._connection.iterator()) {
      tasks.push(value);
    }
    return tasks.sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
  }
  
  async getById(id: string): Promise<Task | null> {
    try {
      const task = await this._connection.get(id);
      return task;
    } catch (e: any) {
      if (e.code === 'LEVEL_NOT_FOUND') {
        return null;
      }
      throw e;
    }
  }

  async update(id: string, data: UpdateTask): Promise<Task | null> {
    const existingTask = await this.getById(id);
    if (!existingTask) {
      return null; 
    }

    const updatedTask: Task = {
      ...existingTask,
      ...data,
      updatedAt: new Date().toISOString(),
    };

    await this._connection.put(id, updatedTask);
    return updatedTask;
  }
  
  async delete(id: string): Promise<boolean> {
    const exists = await this.getById(id);
    if (!exists) {
        return false;
    }
    
    await this._connection.del(id);
    return true;
  }
}