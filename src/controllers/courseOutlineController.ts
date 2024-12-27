import { Request, Response } from 'express';
import CourseOutline from '../models/courseOutlineModel';

export const getCourseOutlines = async (req: Request, res: Response) => {
  try {
    const outlines = await CourseOutline.find().populate('assignedBy', 'name');
    res.status(200).json(outlines);
  } catch (error : any) {
    res.status(500).json({ error: error.message });
  }
};

export const createCourseOutline = async (req: Request, res: Response) => {
  try {
    const { task, assignedBy } = req.body;
    const outline = new CourseOutline({ task, assignedBy });
    await outline.save();
    res.status(201).json(outline);
  } catch (error : any) {
    res.status(500).json({ error: error.message });
  }
};
