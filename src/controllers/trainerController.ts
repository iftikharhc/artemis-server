import { Request, Response } from 'express';
import Trainer from '../models/trainerModel';
import Student from '../models/studentModel';

export const getTrainers = async (req: Request, res: Response) => {
  try {
    const trainers = await Trainer.find();
    res.status(200).json(trainers);
  } catch (error:  any) {
    res.status(500).json({ error: error.message });
  }
};

export const getStudentsWithTrainers = async (req: Request, res: Response) => {
    try {
        const trainersWithStudents = await Trainer.aggregate([
            {
              $lookup: {
                from: 'students', 
                localField: '_id',
                foreignField: 'coachId', 
                as: 'studentsDetails',
              },
            },
        ]);
        res.status(200).json(trainersWithStudents);
    } catch (error:  any) {
      res.status(500).json({ error: error.message });
    }
};

export const createTrainer = async (req: Request, res: Response) => {
  try {
    const { name, specialization } = req.body;
    const trainer = new Trainer({ name, specialization });
    await trainer.save();
    res.status(201).json(trainer);
  } catch (error : any) {
    res.status(500).json({ error: error.message });
  }
};


