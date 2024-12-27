import { Request, Response } from 'express';
import Student from '../models/studentModel';

export const getStudents = async (req: Request, res: Response) => {
  try {
    const student = await Student.find();
    res.status(200).json(student);
  } catch (error:  any) {
    res.status(500).json({ error: error.message });
  }
};

export const createStudent = async (req: Request, res: Response) => {
  try {
    const { name, coachId } = req.body;
    const student = new Student({ name, coachId });
    await student.save();
    res.status(201).json(student);
  } catch (error : any) {
    res.status(500).json({ error: error.message });
  }
};
