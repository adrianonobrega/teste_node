import express from 'express';
import cors from 'cors';
import taskRoutes from './routes/TaskRoutes.js';

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());
app.get('/health', (_req, res) => res.status(200).json({ status: 'API is running' }));
app.use('/api/tasks', taskRoutes);

app.listen(PORT, () => {
  console.log(`Backend API rodando em http://localhost:${PORT}`);
});