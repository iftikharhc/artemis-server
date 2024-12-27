import express from 'express';
import { getTrainers, createTrainer, getStudentsWithTrainers } from '../controllers/trainerController';

const router = express.Router();

router.get('/', getTrainers);
router.get('/get-students-with-trainers', getStudentsWithTrainers);
router.post('/', createTrainer);

export default router;
