import express from 'express';
import { getCourseOutlines, createCourseOutline } from '../controllers/courseOutlineController';

const router = express.Router();

router.get('/', getCourseOutlines);
router.post('/', createCourseOutline);

export default router;
