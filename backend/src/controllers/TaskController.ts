import { Request, Response } from 'express';
import { TaskService } from '../services/TaskService.js';
import { NewTask, UpdateTask } from '../models/Task.js'; 

const taskService = new TaskService();

export class TaskController {

    async create(req: Request, res: Response): Promise<void> {
        try {
            const body = req.body as NewTask;
            const newTask = await taskService.create(body);
            
            res.status(201).json(newTask);
        } catch (error: any) {
            if (error.message === 'Title is required') {
                res.status(400).json({ message: error.message }); 
                return;
            }
            console.error("Erro ao criar tarefa:", error);
            res.status(500).json({ message: 'Erro interno ao criar tarefa' });
        }
    }

    async list(_req: Request, res: Response): Promise<void> { 
        try {
            const tasks = await taskService.getAll();
            
            res.status(200).json(tasks);
        } catch (error) {
            console.error("Erro ao listar tarefas:", error);
            res.status(500).json({ message: 'Erro interno ao listar tarefas' });
        }
    }

    async getById(req: Request, res: Response): Promise<void> {
        const { id } = req.params;

        if (!id) {
            res.status(400).json({ message: 'ID da tarefa é obrigatório na requisição.' });
            return;
        }

        try {
            const task = await taskService.getById(id);
            
            if (!task) {
                res.status(404).json({ message: 'Tarefa não encontrada' });
                return;
            }
            
            res.status(200).json(task);
        } catch (error) {
            console.error("Erro ao buscar tarefa:", error);
            res.status(500).json({ message: 'Erro interno ao buscar tarefa' });
        }
    }

    async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;

        if (!id) {
            res.status(400).json({ message: 'ID da tarefa é obrigatório na requisição.' });
            return;
        }

        try {
            const body = req.body as UpdateTask;
            const updatedTask = await taskService.update(id, body);
            
            if (!updatedTask) {
                res.status(404).json({ message: 'Tarefa não encontrada' }); 
                return;
            }
            
            res.status(200).json(updatedTask);
        } catch (error) {
            console.error("Erro ao atualizar tarefa:", error);
            res.status(500).json({ message: 'Erro interno ao atualizar tarefa' });
        }
    }

    async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;

        if (!id) {
            res.status(400).json({ message: 'ID da tarefa é obrigatório na requisição.' });
            return;
        }

        try {
            const wasDeleted = await taskService.delete(id);
            
            if (!wasDeleted) {
                res.status(404).json({ message: 'Tarefa não encontrada' });
                return;
            }
            
            res.status(204).send();
        } catch (error) {
            console.error("Erro ao deletar tarefa:", error);
            res.status(500).json({ message: 'Erro interno ao deletar tarefa' });
        }
    }
}