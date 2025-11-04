import { Router } from 'express';
import { TaskController } from '../controllers/TaskController.js';

const router = Router();
const taskController = new TaskController();

// Rotas CRUD
router.post('/', taskController.create);       
router.get('/', taskController.list);         
router.get('/:id', taskController.getById);   
router.put('/:id', taskController.update);    
router.delete('/:id', taskController.delete);

export default router;